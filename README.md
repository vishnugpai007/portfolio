# Vishnu G Pai — Portfolio

Personal portfolio for **Vishnu G Pai**, a second-year Computer Science & Engineering student at FISAT (Federal Institute of Science and Technology, Angamaly, Kerala) and aspiring Full-Stack Developer.

Built with a dark premium cinematic editorial aesthetic inspired by high-craft digital experiences.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Design System

- **Background**: `#101116`
- **Secondary Background**: `#17191F`
- **Card Surface**: `#20232B`
- **Text (Primary)**: `#F5F3EE`
- **Text (Secondary)**: `#A5A7AE`
- **Accent**: `#7599FF`
- **Border**: `#343741`
- **Typography**:
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Labels & Code: `JetBrains Mono`

---

## Project Structure

```text
portfolio/
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore configuration
├── PROJECT_CONTEXT.md    # Source of truth for personal data and rules
├── README.md             # Project overview
├── index.html            # Main HTML with SEO, fonts, and Open Graph tags
├── package.json          # Project dependencies & scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind theme extensions & tokens
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── public/
│   └── favicon.svg       # Custom branded SVG favicon
└── src/
    ├── assets/
    │   └── images/       # Static image assets (.gitkeep)
    ├── components/       # UI section components (placeholders)
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Projects.tsx
    │   └── Skills.tsx
    ├── data/             # Personal content source (separated from UI)
    │   ├── profile.ts
    │   ├── projects.ts
    │   └── skills.ts
    ├── App.tsx           # App layout container
    ├── index.css         # Tailwind directives, font config, textures, reduced-motion
    └── main.tsx          # React DOM entry point
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
