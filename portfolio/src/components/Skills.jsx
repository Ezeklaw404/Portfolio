import SectionHeading from './SectionHeading.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="02" title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <p className="font-mono text-xs text-accent mb-3 uppercase tracking-wide">
              {group.category}
            </p>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
