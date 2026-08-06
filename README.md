# Ghulam Jalani — Portfolio

Single-page developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

**Sections:** Hero · About · Skills · Projects · Experience & Education · Contact · Footer

**Features:** dark/light toggle (defaults to dark), smooth scroll with scroll-spy navbar, scroll-reveal animations, responsive down to 375px, EmailJS contact form, SEO metadata + JSON-LD + sitemap/robots, `prefers-reduced-motion` support.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

Other commands: `npm run build` (production build), `npm run lint`.

---

## Folder structure

```
app/
  layout.tsx        Root layout, SEO metadata, JSON-LD, fonts
  page.tsx          Assembles all sections
  providers.tsx     next-themes provider
  globals.css       Design tokens (CSS variables) + base styles
  icon.svg          Favicon
  sitemap.ts        Generated /sitemap.xml
  robots.ts         Generated /robots.txt
components/
  sections/         Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
  ui/               Button, Section, Reveal, ThemeToggle
data/
  index.ts          ← ALL CONTENT LIVES HERE
lib/
  utils.ts          cn() classname helper
public/
  profile.png       Profile photo placeholder
  resume.pdf        Your resume (served by the Download Resume button)
  projects/         Project screenshot placeholders
```

---

## Editing content

Everything editable is in **`data/index.ts`** — no component changes needed.

| Export | Controls |
|---|---|
| `site` | Name, role, tagline, email, phone, location, resume path, site URL, "available for work" badge |
| `socials` | GitHub, LinkedIn, Vercel links |
| `navLinks` | Navbar items |
| `about` | Bio paragraphs + the four stat cards |
| `skillGroups` | Skill badges, grouped by category |
| `projects` | Project cards |
| `timeline` | Experience & education entries |
| `certifications` | Certification chips |

### Adding a project

Append to the `projects` array:

```ts
{
  title: "Project Name",
  blurb: "Short category label",
  description: "Two sentences on what it does.",
  tech: ["React.js", "Node.js", "MongoDB"],
  image: "/projects/your-screenshot.png",
  liveUrl: "https://your-demo.vercel.app/",
  repoUrl: "https://github.com/Jalani128/repo",
  adminUrl: "",        // optional — adds an "Admin Panel" button
  featured: true,      // optional — adds a "Featured" badge
  highlights: ["Bullet point", "Another one"],
}
```

**Buttons only render when their URL is non-empty**, so leaving `repoUrl: ""` simply hides the GitHub button instead of creating a dead link. Several projects currently have empty `repoUrl` — fill them in when the repos are public.

### Replacing placeholder images

The SVGs in `public/projects/` are placeholders. Drop in real screenshots (PNG/JPG, ~1600×1000, or WebP) and update the `image` path. They're rendered through `next/image`, so they're lazy-loaded and served as AVIF/WebP automatically.

Same for `public/profile.png` — replace with your photo and update the `src` in `components/sections/Hero.tsx`.

### Resume

`public/resume.pdf` is already in place. Replace that file to update the download.

---

## Contact form (EmailJS)

The form works out of the box in **fallback mode**: it opens the visitor's email client via `mailto:`. To send mail directly from the site:

1. Create a free account at [emailjs.com](https://dashboard.emailjs.com).
2. Add an email service, then create a template using these variable names:
   `{{user_name}}`, `{{user_email}}`, `{{message}}`
3. Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

4. Restart the dev server.

Once all three are set, the setup note under the form disappears and submissions send through EmailJS.

> These keys are `NEXT_PUBLIC_*`, so they ship to the browser — that's how EmailJS is designed to work. Lock the domain down in the EmailJS dashboard under **Account → Security → Allowed origins**.

---

## Deploying to Vercel

1. Push to GitHub:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/Jalani128/portfolio.git
git push -u origin main
```

2. Import the repo at [vercel.com/new](https://vercel.com/new). Next.js is detected automatically — no build config needed.
3. Add the three `NEXT_PUBLIC_EMAILJS_*` variables under **Settings → Environment Variables**, then redeploy.
4. After you get your domain, update `site.url` in `data/index.ts` so canonical URLs, Open Graph tags, and the sitemap point at the right place.

---

## Customizing the look

Colors are CSS variables in `app/globals.css` — change them in one place and both themes follow. The accent is teal:

```css
:root { --accent: 13 148 136; }   /* light */
.dark  { --accent: 45 212 191; }  /* dark  */
```

Values are space-separated RGB (no `rgb()` wrapper) so Tailwind's opacity modifiers like `bg-accent/20` keep working.

To default to light mode, change `defaultTheme="dark"` in `app/providers.tsx`.
