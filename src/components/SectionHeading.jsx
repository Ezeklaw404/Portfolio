export default function SectionHeading({ index, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent mb-1">// {index}. {title.toLowerCase()}</p>
      <h2 className="font-mono text-2xl sm:text-3xl font-semibold text-text">{title}</h2>
    </div>
  )
}
