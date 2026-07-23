import { useState } from 'react';

const TECH_GROUPS = [
  { label: 'Frontend', items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS 3', 'Framer Motion'] },
  { label: 'Backend', items: ['Python', 'Node.js', 'Django', 'Laravel', 'PostgreSQL', 'REST APIs'] },
  { label: 'Mobile', items: ['React Native', 'iOS Swift', 'Android Kotlin', 'Expo'] },
  { label: 'Cloud & DevOps', items: ['AWS Cloud', 'Docker', 'Vercel', 'GitHub Actions', 'Cloudflare'] },
  { label: 'AI & Automation', items: ['OpenAI API', 'Custom MCP Servers', 'LangChain', 'Vector DBs'] },
];

export default function TechStrip() {
  const [selectedGroup, setSelectedGroup] = useState('All');

  return (
    <section className="border-y border-hairline bg-white py-12">
      <div className="container-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Engineering Ecosystem</span>
            <h2 className="text-2xl font-extrabold text-charcoal sm:text-3xl">Battle-Tested Stack & Technologies</h2>
          </div>

          <div className="flex flex-wrap gap-1.5 rounded-full border border-hairline bg-sea-50 p-1">
            <button
              onClick={() => setSelectedGroup('All')}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                selectedGroup === 'All' ? 'bg-sea-950 text-white' : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              All
            </button>
            {TECH_GROUPS.map((g) => (
              <button
                key={g.label}
                onClick={() => setSelectedGroup(g.label)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  selectedGroup === g.label ? 'bg-sea-950 text-white' : 'text-charcoal-muted hover:text-charcoal'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TECH_GROUPS.filter((g) => selectedGroup === 'All' || selectedGroup === g.label).map((group) => (
            <div key={group.label} className="rounded-xl border border-hairline bg-sea-50/50 p-4 transition-all hover:border-sea-700/50">
              <span className="text-xs font-bold uppercase tracking-wider text-sea-700">{group.label}</span>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-hairline bg-white px-2.5 py-1 text-xs font-medium text-charcoal">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
