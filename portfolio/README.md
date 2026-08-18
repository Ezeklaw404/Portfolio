# Your Portfolio

A single-page React portfolio with a dark, code-editor-inspired theme.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually http://localhost:5173).

## Where to edit things

| What you want to change      | File                          |
|-------------------------------|-------------------------------|
| Add / edit projects           | `src/data/projects.js`        |
| Add / edit skills             | `src/data/skills.js`          |
| Bio text                      | `src/components/About.jsx`    |
| Email / GitHub / LinkedIn     | `src/components/Contact.jsx`  |
| Name, role, typing words      | `src/components/Hero.jsx` (top of file has the `roles` array) |
| Colors                        | `tailwind.config.js` under `theme.extend.colors` |

**Adding a new project is just adding one object** to the array in
`src/data/projects.js` — no other file needs to change. Set `featured: true`
on your best 1-2 projects to give them a larger card.

## Resume

Drop your PDF at `public/resume.pdf` — the "resume" link in the About section
already points to `/resume.pdf`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy

The easiest options for a static Vite app:

- **Vercel**: `npx vercel` (or connect your GitHub repo at vercel.com — it auto-detects Vite)
- **Netlify**: drag the `dist/` folder onto netlify.com/drop, or connect your repo
- **GitHub Pages**: build, then push the `dist/` folder to a `gh-pages` branch

All three are free for a personal portfolio.
