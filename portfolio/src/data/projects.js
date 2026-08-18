// ─────────────────────────────────────────────────────────────
// ADD YOUR PROJECTS HERE.
// To add a new project, copy an object below, paste it into the
// array, and edit the fields. No other files need to change —
// the Projects section renders this list automatically.
//
// Fields:
//   title       - project name
//   description - 1-3 sentences on what it does / why it matters
//   stack       - array of tech used (shows as tags)
//   status      - "shipped" | "in-progress" | "archived"
//   github      - link to repo (or "" to hide the button)
//   live        - link to live demo (or "" to hide the button)
//   featured    - true puts it in the larger card style
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    title: 'Project One',
    description:
      'A short, punchy description of what this project does, who it is for, and the problem it solves.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    status: 'shipped',
    github: 'https://github.com/yourusername/project-one',
    live: 'https://project-one.example.com',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'Another project summary. Focus on the outcome or the interesting technical problem you solved.',
    stack: ['TypeScript', 'Next.js', 'Prisma'],
    status: 'shipped',
    github: 'https://github.com/yourusername/project-two',
    live: '',
    featured: true,
  },
  {
    title: 'Project Three',
    description: 'What it does and why you built it.',
    stack: ['Python', 'FastAPI', 'Docker'],
    status: 'in-progress',
    github: 'https://github.com/yourusername/project-three',
    live: '',
    featured: false,
  },
  {
    title: 'Project Four',
    description: 'What it does and why you built it.',
    stack: ['React Native', 'Firebase'],
    status: 'shipped',
    github: 'https://github.com/yourusername/project-four',
    live: 'https://project-four.example.com',
    featured: false,
  },
  {
    title: 'Project Five',
    description: 'What it does and why you built it.',
    stack: ['Vue', 'Express', 'MongoDB'],
    status: 'shipped',
    github: 'https://github.com/yourusername/project-five',
    live: '',
    featured: false,
  },
  {
    title: 'Project Six',
    description: 'What it does and why you built it.',
    stack: ['Go', 'Redis', 'AWS'],
    status: 'archived',
    github: 'https://github.com/yourusername/project-six',
    live: '',
    featured: false,
  },
  {
    title: 'Project Seven',
    description: 'What it does and why you built it.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    status: 'shipped',
    github: 'https://github.com/yourusername/project-seven',
    live: '',
    featured: false,
  },
]
