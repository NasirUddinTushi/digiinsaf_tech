const technologies = [
  'React', 'Next.js', 'Node.js', 'Laravel', 'Python', 'Flutter',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Tailwind CSS', 'GitHub',
];

export default function TechStrip() {
  return (
    <section className="border-y border-white/10 bg-ink-900 py-8">
      <div className="container-xl">
        <p className="mb-5 text-center text-caption font-medium uppercase tracking-widest text-graphite-400">
          Capabilities across the modern product stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {technologies.map((tech) => (
            <span key={tech} className="text-body-sm font-semibold text-muted-onlight transition-colors hover:text-white">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
