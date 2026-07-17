import SectionHeading from '@/components/common/SectionHeading';
import ValueCard from '@/components/cards/ValueCard';
import Section from '@/components/common/Section';

// Trust signals only — no certification, compliance-body membership or
// audit claim is made here unless it has actually been verified.
const trustPoints = [
  {
    icon: 'ShieldCheck',
    title: 'GDPR-Conscious Approach',
    description:
      'Client and user data is handled with GDPR principles in mind throughout discovery, design and development.',
  },
  {
    icon: 'Lock',
    title: 'Data Protection',
    description:
      'Access to client systems, credentials and data is scoped, documented and limited to what a project actually requires.',
  },
  {
    icon: 'FileCheck',
    title: 'NDA Available',
    description:
      'Happy to sign a mutual NDA before any confidential project details, code or business information are shared.',
  },
  {
    icon: 'Code2',
    title: 'Secure Development',
    description:
      'Secure coding practices, dependency hygiene and access control are treated as standard, not an add-on.',
  },
  {
    icon: 'Eye',
    title: 'Ethical and Transparent Delivery',
    description:
      'Clear scope, honest timelines and no hidden costs — decisions and trade-offs are explained, not buried in fine print.',
  },
];

export default function TrustedApproach() {
  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-precision-lines opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-signal-green/[0.08] blur-3xl" aria-hidden="true" />
      <SectionHeading
        eyebrow="Trusted Approach"
        title="Security, privacy and transparency by default."
        description="Working responsibly with client data and business information is treated as a baseline requirement, not an afterthought."
        align="center"
        tone="dark"
        className="mb-14"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((point, index) => (
          <ValueCard key={point.title} value={point} tone="dark" index={index} />
        ))}
      </div>
    </Section>
  );
}
