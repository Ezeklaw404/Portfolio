import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading index="01" title="About" />
      <div className="grid sm:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            {/* EDIT ME: replace with your real bio */}
            I'm a full stack developer who likes taking a project from a rough idea
            to something people actually use — designing the data model, wiring up
            the API, and polishing the interface that sits on top of it.
          </p>
          <p>
            I'm currently focused on React on the frontend and Node.js on the
            backend, with a growing interest in cloud infrastructure and
            developer tooling. When I'm not coding, I'm usually reading about
            system design or contributing to a side project.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6 font-mono text-sm">
          <p className="text-muted mb-3">$ whoami</p>
          <ul className="space-y-2 text-text">
            <li><span className="text-accent">location</span> — Your City, ST</li>
            <li><span className="text-accent">focus</span> — Full Stack Development</li>
            <li><span className="text-accent">availability</span> — Open to opportunities</li>
            <li><span className="text-accent">resume</span> — <a href="/resume.pdf" className="underline hover:text-accent">download</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
