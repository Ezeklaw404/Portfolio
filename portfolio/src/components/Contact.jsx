import SectionHeading from './SectionHeading.jsx'

// EDIT ME: swap in your real links
const contacts = [
  { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
  { label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: 'https://linkedin.com/in/yourusername' },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="04" title="Contact" />
      <div className="rounded-lg border border-border bg-surface p-8 sm:p-10">
        <p className="text-muted max-w-md mb-8">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>
        <ul className="space-y-3 font-mono text-sm">
          {contacts.map((c) => (
            <li key={c.label} className="flex gap-3">
              <span className="text-accent w-20 shrink-0">{c.label}</span>
              <a href={c.href} target="_blank" rel="noreferrer" className="text-text hover:text-accent transition-colors">
                {c.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-16 text-center font-mono text-xs text-muted">
        <p>Built with React &amp; Tailwind CSS · © {new Date().getFullYear()} Your Name</p>
      </footer>
    </section>
  )
}
