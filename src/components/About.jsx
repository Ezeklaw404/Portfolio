import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="01" title="About" />
      <div className="grid sm:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I'm a software developer who enjoys owning a project end to end
            from database schema to UI polish. I've built across C#, Python, Java,
            and JavaScript/TypeScript, working with tools like .NET MAUI, Blazor
            Hybrid, and React along the way, and I like picking the right tool for
            the job rather than sticking to one stack.
          </p>
          <p>
            I care a lot about clean data workflows and building things that
            actually hold up under real use, not just in a demo. Outside of class,
            I'm usually tinkering with a side project or digging into something new
            on my own.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6 font-mono text-sm">
          <p className="text-muted mb-3">$ whoami</p>
          <ul className="space-y-2 text-text">
            <li><span className="text-accent">location</span> — SLC, UT</li>
            <li><span className="text-accent">focus</span> — Software Development</li>
            <li><span className="text-accent">availability</span> — Open to opportunities</li>
            <li><span className="text-accent">resume</span> — <a href="/EzekielAndreason_Resume.pdf" className="underline hover:text-accent">download</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
