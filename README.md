# Tristan Dave Plaza — Digital Portfolio & Systems Showcase

> **Senior Full-Stack Developer • UI/UX Engineer • Software Architect**  
> Based in the Philippines • Available for Engineering Roles, Consultancies & High-Impact Contracts.

A modern, editorial-grade, single-page application (SPA) portfolio crafted to communicate senior engineering rigor, scalable systems architecture, and human-centered design. Built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## 🌟 Key Highlights & Features

- **Editorial Tech Aesthetic**: Precision-engineered dark mode default (`#0B0F17`) with cyan (`#38BDF8`) and amber (`#F59E0B`) accents, alongside a high-contrast, distraction-free light mode.
- **12 Interactive Sections**:
  1. **Glassmorphic Navigation** with active scroll spy, mobile drawer, resume modal trigger, and CLI Easter egg.
  2. **High-Impact Hero** with live status telemetry ("Available for High-Impact Projects") and interactive tabbed Code Sandbox simulation (`AppArchitecture.ts`, `RelationalSchema.sql`, `EdgeRelay.py`).
  3. **About & Developer Snapshot** detailing engineering philosophy, core competencies, education, and quick stats (4+ yrs experience, 99.98% target uptime, 25+ projects shipped).
  4. **Technical Skills Matrix** categorized by Frontend, Backend, Database, Tools & DevOps, and Other, featuring proficiency badges and contextual usage descriptions.
  5. **Experience & Journey Timeline** with milestone filtering (All, Career, Education, Projects).
  6. **Engineering Case Studies (Featured Projects)** with category filters (`ALL`, `WEB`, `FULL-STACK`, `AI`, `SYSTEMS`, `ACADEMIC`) and comprehensive deep-dive modals featuring Problem, Solution, Architecture, Key Features, Challenges Overcome, and Quantifiable Results.
  7. **Services Offered**: 8 clear engineering services ranging from Full-Stack Architecture to Cloud DevOps and UX Design Systems.
  8. **Credentials & Certifications**: Real-world credentials with verified status badges and issuing authorities.
  9. **Currently Building (R&D)**: Real-time look into active development roadmap with progress bar and upcoming milestones.
  10. **Interactive Terminal (Easter Egg CLI)**: Fully functional in-browser terminal console supporting `help`, `about`, `skills`, `projects`, `contact`, `theme`, and `clear` commands.
  11. **Client-Validated Contact Form**: Interactive form with immediate feedback, toast notifications, and single-click email copying.
  12. **System Telemetry Footer**: Philippine Standard Time (PST UTC+8) real-time clock, status indicator, and quick links.
- **Print-Ready Resume Modal**: Standardized CV view equipped with one-click `@media print` optimization for PDF export.
- **Accessibility & Performance**: Semantic HTML5, WCAG AAA contrast compliance, keyboard navigation focus indicators, and reduced-motion awareness.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework / Core** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) |
| **Styling & Design** | [Tailwind CSS v3](https://tailwindcss.com/) with Custom Palette |
| **Micro-Interactions** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/) & Custom SVG Assets |
| **Delight / Feedback** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- **Node.js**: v18.0 or higher
- **npm** or **pnpm** or **yarn**

### 2. Clone & Install
```bash
git clone https://github.com/tristandaveplaza/digital-portfolio.git
cd digital-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
This compiles TypeScript (`tsc -b`) and bundles minified assets into the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Architecture

```
Digital Portfolio-Plaza/
├── index.html                   # HTML entry point with meta tags & typography
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Extended theme colors, fonts, and dark mode strategy
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # App layout orchestrator & modal coordinator
│   ├── index.css                # Global styles, scrollbar, and Tailwind directives
│   ├── types.ts                 # Strongly-typed data models & interfaces
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme provider (dark / light + localStorage sync)
│   ├── data/
│   │   └── portfolioContent.ts  # Single source of truth for all content & projects
│   ├── components/
│   │   ├── common/
│   │   │   ├── Icons.tsx        # Inline SVGs (GitHub, LinkedIn)
│   │   │   ├── LoadingScreen.tsx # Elegant initial boot monogram animation
│   │   │   ├── ScrollProgress.tsx # Top viewport reading progress bar
│   │   │   ├── ThemeToggle.tsx  # Dark / Light mode toggle switch
│   │   │   └── Toast.tsx        # Success/warning notification toasts
│   │   ├── navigation/
│   │   │   └── Navbar.tsx       # Glassmorphism navbar with scroll spy & mobile menu
│   │   ├── layout/
│   │   │   └── Footer.tsx       # Footer with Philippine Standard Time telemetry
│   │   ├── modals/
│   │   │   ├── ProjectModal.tsx # Full case study deep-dive modal
│   │   │   ├── ResumeModal.tsx  # Printable resume modal
│   │   │   └── TerminalModal.tsx # Developer terminal Easter egg CLI
│   │   └── sections/
│   │       ├── HeroSection.tsx  # Hero banner & interactive code editor tab simulation
│   │       ├── AboutSection.tsx # Bio, Developer Snapshot card, and philosophy
│   │       ├── SkillsSection.tsx # Filterable technical skills matrix
│   │       ├── ExperienceSection.tsx # Chronological career & academic journey
│   │       ├── ProjectsSection.tsx # Filterable project showcase grid
│   │       ├── ProjectCard.tsx  # High-density project showcase card
│   │       ├── ServicesSection.tsx # Core engineering offerings
│   │       ├── AchievementsSection.tsx # Verified certifications and credentials
│   │       ├── CurrentlyBuilding.tsx # Active R&D project roadmap
│   │       └── ContactSection.tsx # Validated inquiry form & direct contact channels
```

---

## ⚙️ Customization & Updating Content

All personal details, projects, skills, services, and links are decoupled from layout code and centralized in:
👉 `src/data/portfolioContent.ts`

To personalize this portfolio:
1. **Developer Profile**: Update `developerProfile` with your name, title, bio, email, and social profiles.
2. **Featured Projects**: Add or modify objects in `projectsData`. Each project supports deep-dive fields (`problem`, `solution`, `architecture`, `features`, `challenges`, `results`).
3. **Skills**: Add or update entries in `skillsData` across `Frontend`, `Backend`, `Database`, `Tools & DevOps`, and `Other`.
4. **Services & Milestones**: Edit `servicesData`, `timelineData`, `achievementsData`, and `currentlyBuildingData`.

---

## 🌐 Deployment

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository.
4. Set Build Command to `npm run build` and Output Directory to `dist`.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Add a `_redirects` file with `/*  /index.html  200` to support client-side routing.

---

## 📄 License

MIT © Tristan Dave Plaza. Feel free to use this as inspiration for your own engineering portfolio.
