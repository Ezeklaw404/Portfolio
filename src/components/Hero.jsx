import { useEffect, useState } from 'react'

const roles = ['Software Engineer', 'Full Stack Developer', 'Backend Tinkerer', 'Problem Solver']

function useTypingEffect(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(roles)

  return (
    <section id="top" className="max-w-5xl mx-auto px-6 pt-20 pb-24">
      <div className="rounded-lg border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden animate-fadeUp">
        {/* VS Code style tab bar */}
        <div className="flex items-center bg-surface2 border-b border-border">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-r border-border">
            <span className="w-2 h-2 rounded-sm bg-[#f7df1e]" />
            <span className="font-mono text-xs text-text">about-me.json</span>
            <span className="text-muted text-xs ml-2 hover:text-text cursor-pointer">×</span>
          </div>
          <div className="px-4 py-2.5 text-xs text-muted font-mono opacity-60">
            portfolio.jsx
          </div>
        </div>

        {/* code body */}
        <div className="px-6 py-10 sm:px-10 sm:py-14 font-mono text-sm sm:text-base leading-relaxed">
          <p className="text-muted">{'{'}</p>
          <p className="pl-6">
            <span className="text-[#c792ea]">"name"</span>
            <span className="text-text">: </span>
            <span className="text-[#c3e88d]">"Ezekiel Andreason"</span>
            <span className="text-text">,</span>
          </p>
          <p className="pl-6 flex flex-wrap items-baseline gap-1">
            <span className="text-[#c792ea]">"role"</span>
            <span className="text-text">:</span>
            <span className="text-[#c3e88d]">"{typed}</span>
            <span className="text-accent animate-blink">|</span>
            <span className="text-[#c3e88d]">"</span>
            <span className="text-text">,</span>
          </p>
          <p className="pl-6">
            <span className="text-[#c792ea]">"focus"</span>
            <span className="text-text">: </span>
            <span className="text-[#c3e88d]">"building things that solve real problems"</span>
          </p>
          <p className="text-muted">{'}'}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-accent text-bg font-sans font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md border border-border text-text font-sans font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-accent/10 border-t border-border text-[11px] font-mono text-muted">
          <span>main*</span>
          <span>Ln 6, Col 12  UTF-8  JSON</span>
        </div>
      </div>
    </section>
  )
}