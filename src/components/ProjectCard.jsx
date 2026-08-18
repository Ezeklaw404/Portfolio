const statusStyles = {
  built: 'text-[#3ee8ff] border-[#1e8fa8]',
  'side project': 'text-[#ffbd2e] border-[#8a6a1e]',
  experiment: 'text-[#c792ea] border-[#7a5a9e]',
  prototype: 'text-muted border-border',
}

export default function ProjectCard({ project, featured }) {
  return (
    <div
      className={`group rounded-lg border border-border bg-surface overflow-hidden flex flex-col h-full transition-all hover:border-accent/60 hover:-translate-y-0.5 ${
        featured ? 'sm:col-span-2' : ''
      }`}
    >
      {project.image && (
        <div
          className={`w-full overflow-hidden bg-surface2 flex items-center justify-center ${
            project.portrait ? 'aspect-square' : 'aspect-[4/3]'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={project.portrait ? 'h-full w-auto object-contain' : 'w-full h-full object-cover'}
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-mono font-semibold text-text text-lg">{project.title}</h3>
          <span
            className={`shrink-0 font-mono text-[11px] px-2 py-0.5 rounded border ${statusStyles[project.status] || statusStyles.built}`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-1 rounded bg-surface2 text-muted border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 font-mono text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-text hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-text hover:text-accent transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}