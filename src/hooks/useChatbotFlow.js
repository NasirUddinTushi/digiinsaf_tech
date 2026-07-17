import { useCallback, useState } from 'react';
import { chatbotFlows } from '@/data/chatbotFlows';
import { validateStepAnswer } from '@/utils/chatbotValidation';
import chatbotAnalytics from '@/utils/chatbotAnalytics';

/**
 * Encapsulates the guided-flow state machine (Start a Project, Get a Quote,
 * Book a Consultation, Talk to the Team): which flow is active, which step
 * it's on, the answers collected so far, and the summary-before-submit
 * gate. Message rendering and final submission are handled by the caller
 * via the `onMessage` / `onFlowComplete` callbacks, so this hook only
 * knows about flow *state*, not chat transcript or network calls.
 */
export function useChatbotFlow({ onMessage, onFlowComplete }) {
  const [activeFlow, setActiveFlow] = useState(null); // { flowId, stepIndex, answers, pendingMultiChoice }
  const [awaitingSummary, setAwaitingSummary] = useState(false);

  const currentFlow = activeFlow ? chatbotFlows[activeFlow.flowId] : null;
  const currentStep = currentFlow && !awaitingSummary ? currentFlow.steps[activeFlow.stepIndex] : null;

  const startFlow = useCallback(
    (flowId) => {
      const flow = chatbotFlows[flowId];
      if (!flow) return;
      const firstStep = flow.steps[0];
      setActiveFlow({ flowId, stepIndex: 0, answers: {}, pendingMultiChoice: [] });
      setAwaitingSummary(false);
      onMessage({ text: `Let's get started — ${flow.title.toLowerCase()}.` });
      onMessage({ text: firstStep.prompt, inputStep: firstStep });
      chatbotAnalytics.projectFlowStarted(flowId);
    },
    [onMessage]
  );

  const goToSummary = useCallback(
    (flowId, answers) => {
      setActiveFlow({ flowId, stepIndex: chatbotFlows[flowId].steps.length, answers, pendingMultiChoice: [] });
      setAwaitingSummary(true);
      onMessage({ type: 'summary', flowId, answers });
    },
    [onMessage]
  );

  const advance = useCallback(
    (rawValue, displayLabel) => {
      if (!activeFlow || !currentFlow || !currentStep) return;

      const value =
        currentStep.inputType === 'text' && typeof rawValue === 'string' && rawValue.trim().toLowerCase() === 'skip'
          ? ''
          : rawValue;

      const { valid, message } = validateStepAnswer(currentStep, value);
      if (!valid) {
        onMessage({ text: message });
        return;
      }

      onMessage({ role: 'user', text: displayLabel ?? (Array.isArray(value) ? value.join(', ') || 'None' : String(value)) });

      const updatedAnswers = { ...activeFlow.answers, [currentStep.field]: value };
      const nextIndex = activeFlow.stepIndex + 1;

      if (nextIndex >= currentFlow.steps.length) {
        if (currentFlow.showSummaryBeforeSubmit) {
          goToSummary(activeFlow.flowId, updatedAnswers);
        } else {
          setActiveFlow(null);
          onFlowComplete(activeFlow.flowId, updatedAnswers);
        }
        return;
      }

      const nextStep = currentFlow.steps[nextIndex];
      setActiveFlow({ flowId: activeFlow.flowId, stepIndex: nextIndex, answers: updatedAnswers, pendingMultiChoice: [] });
      onMessage({ text: nextStep.prompt, inputStep: nextStep });
    },
    [activeFlow, currentFlow, currentStep, onMessage, onFlowComplete, goToSummary]
  );

  const submitTextAnswer = useCallback((text) => advance(text), [advance]);
  const submitChoiceAnswer = useCallback((option) => advance(option.value, option.label), [advance]);
  const acceptConsent = useCallback(() => advance(true, 'I agree'), [advance]);

  const toggleMultiChoiceOption = useCallback((option) => {
    setActiveFlow((prev) => {
      if (!prev) return prev;
      const exists = prev.pendingMultiChoice.includes(option.value);
      const pendingMultiChoice = exists
        ? prev.pendingMultiChoice.filter((value) => value !== option.value)
        : [...prev.pendingMultiChoice, option.value];
      return { ...prev, pendingMultiChoice };
    });
  }, []);

  const confirmMultiChoiceStep = useCallback(() => {
    if (!activeFlow || !currentStep) return;
    const labels = currentStep.options
      .filter((option) => activeFlow.pendingMultiChoice.includes(option.value))
      .map((option) => option.label);
    advance(activeFlow.pendingMultiChoice, labels.length ? labels.join(', ') : 'None selected');
  }, [activeFlow, currentStep, advance]);

  const confirmSummary = useCallback(() => {
    if (!activeFlow) return;
    const { flowId, answers } = activeFlow;
    setActiveFlow(null);
    setAwaitingSummary(false);
    onFlowComplete(flowId, answers);
  }, [activeFlow, onFlowComplete]);

  const editSummary = useCallback(() => {
    if (!activeFlow) return;
    startFlow(activeFlow.flowId);
  }, [activeFlow, startFlow]);

  const cancelFlow = useCallback(() => {
    setActiveFlow(null);
    setAwaitingSummary(false);
  }, []);

  const restoreFlow = useCallback((snapshot) => {
    if (!snapshot) return;
    setActiveFlow(snapshot.activeFlow || null);
    setAwaitingSummary(Boolean(snapshot.awaitingSummary));
  }, []);

  return {
    activeFlow,
    currentStep,
    currentFlow,
    awaitingSummary,
    startFlow,
    submitTextAnswer,
    submitChoiceAnswer,
    acceptConsent,
    toggleMultiChoiceOption,
    confirmMultiChoiceStep,
    confirmSummary,
    editSummary,
    cancelFlow,
    restoreFlow,
  };
}

export default useChatbotFlow;
