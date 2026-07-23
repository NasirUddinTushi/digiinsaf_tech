import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle2, ArrowRight, Code2, Smartphone, Bot, Layers, ShieldCheck, Sparkles } from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'mvp', name: 'MVP Launchpad', basePrice: 4500, icon: Layers, desc: 'Rapid prototype & core feature set for startups' },
  { id: 'web', name: 'Web Application', basePrice: 6500, icon: Code2, desc: 'High-performance React/Next.js web platforms' },
  { id: 'mobile', name: 'Mobile App', basePrice: 7500, icon: Smartphone, desc: 'Cross-platform iOS & Android mobile application' },
  { id: 'ai', name: 'AI & Automation', basePrice: 8500, icon: Bot, desc: 'Custom AI agents, LLM integrations & workflows' },
];

const FEATURES_LIST = [
  { id: 'auth', name: 'User Auth & Roles', price: 800 },
  { id: 'payments', name: 'Stripe/Payment Gateway', price: 1000 },
  { id: 'ai-agent', name: 'Custom AI Assistant / Bot', price: 2500 },
  { id: 'dashboard', name: 'Analytics & Admin Dashboard', price: 1800 },
  { id: 'cms', name: 'Headless CMS Integration', price: 1200 },
  { id: 'i18n', name: 'Multi-language (i18n)', price: 900 },
];

const TIMELINES = [
  { id: 'fast', name: 'Rapid Sprint (3–4 weeks)', multiplier: 1.25 },
  { id: 'standard', name: 'Standard Delivery (6–8 weeks)', multiplier: 1.0 },
  { id: 'phased', name: 'Strategic Phase Build (3+ months)', multiplier: 0.9 },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState('mvp');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'payments']);
  const [selectedTimeline, setSelectedTimeline] = useState('standard');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', note: '' });

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const featureCost = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURES_LIST.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const timelineObj = TIMELINES.find((t) => t.id === selectedTimeline) || TIMELINES[1];
  const totalMin = Math.round((currentType.basePrice + featureCost) * timelineObj.multiplier);
  const totalMax = Math.round(totalMin * 1.25);

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden rounded-xl3 border border-cyan-500/30 bg-gradient-to-b from-sea-950 via-sea-900 to-ink-950 p-6 sm:p-10 text-white shadow-neon-cyan backdrop-blur-2xl">
      {/* Ambient background blur circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-mesh-drift" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-sea-600/20 blur-3xl animate-mesh-drift" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
            <Calculator className="h-3.5 w-3.5" /> Instant Project Cost Estimator
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Calculate Your Project Investment
          </h2>
          <p className="mt-2 text-base text-graphite-300">
            Get an instant transparent estimate tailored for your digital product goals.
          </p>
        </div>

        {!submitted ? (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Step Selection Left Panel */}
            <div className="space-y-6 lg:col-span-7">
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300">
                  1. Select Project Scope
                </label>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {PROJECT_TYPES.map((type) => {
                    const IconComp = type.icon;
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`relative flex flex-col text-left p-3.5 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? 'border-cyan-400 bg-sea-800/90 shadow-neon-cyan scale-[1.02]'
                            : 'border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <IconComp className={`h-5 w-5 ${isSelected ? 'text-cyan-300' : 'text-graphite-400'}`} />
                          <span className="text-xs font-bold text-cyan-400">${type.basePrice.toLocaleString()}</span>
                        </div>
                        <span className="mt-2 text-sm font-bold text-white">{type.name}</span>
                        <span className="text-xs text-graphite-400 leading-tight mt-0.5">{type.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Features */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300">
                  2. Optional Functional Modules
                </label>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {FEATURES_LIST.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`flex items-center justify-between p-3 rounded-lg border text-xs font-medium transition-all ${
                          isSelected
                            ? 'border-cyan-400/80 bg-sea-800 text-white shadow-sm'
                            : 'border-white/10 bg-white/5 text-graphite-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`h-4 w-4 ${isSelected ? 'text-cyan-300' : 'opacity-30'}`} />
                          <span>{feat.name}</span>
                        </div>
                        <span className="text-cyan-400 font-semibold">+${feat.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300">
                  3. Delivery Speed
                </label>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {TIMELINES.map((t) => {
                    const isSelected = selectedTimeline === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTimeline(t.id)}
                        className={`p-3 rounded-lg border text-center text-xs font-semibold transition-all ${
                          isSelected
                            ? 'border-cyan-400 bg-sea-800 text-white shadow-neon-cyan'
                            : 'border-white/10 bg-white/5 text-graphite-400 hover:border-white/20'
                        }`}
                      >
                        {t.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Estimation Summary & Form Right Panel */}
            <div className="flex flex-col justify-between rounded-xl2 border border-white/10 bg-sea-950/90 p-6 backdrop-blur-xl lg:col-span-5 shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-graphite-400">
                  Estimated Investment Range
                </span>
                
                {/* Animated Price Counter */}
                <motion.div
                  key={totalMin}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 flex items-baseline gap-2"
                >
                  <span className="text-3xl font-extrabold text-cyan-300">
                    ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
                  </span>
                  <span className="text-xs text-graphite-400">EUR / USD</span>
                </motion.div>

                <div className="mt-3 space-y-1.5 text-xs text-graphite-300 border-t border-white/10 pt-3">
                  <p className="flex justify-between">
                    <span>Base Scope:</span> <span className="font-semibold text-white">{currentType.name}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Selected Modules:</span> <span className="font-semibold text-white">{selectedFeatures.length} Modules</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Timeline Mode:</span> <span className="font-semibold text-white">{timelineObj.name}</span>
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-graphite-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-graphite-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Project Brief / Details (Optional)"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-graphite-400 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-xs font-bold text-white transition-all hover:bg-cyan-500 hover:scale-[1.02] shadow-neon-cyan"
                >
                  Request Detailed Scope Breakdown <ArrowRight className="h-4 w-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-graphite-400 mt-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-signal-green" /> 100% Free Consultation • NDA Signed Upon Request
                </div>
              </form>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-xl2 border border-signal-green/30 bg-signal-green/10 p-8 text-center"
          >
            <CheckCircle2 className="mx-auto h-12 w-12 text-signal-green" />
            <h3 className="mt-3 text-2xl font-bold text-white">Estimation Request Received!</h3>
            <p className="mt-2 text-sm text-graphite-300">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our technical lead will review your estimate ({currentType.name}, ~${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}) and send a tailored proposal to <span className="font-semibold text-white">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs text-cyan-300 underline hover:text-white"
            >
              Recalculate Estimate
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
