# Vishnu G Pai — Portfolio

Personal portfolio for **Vishnu G Pai**, a second-year Computer Science & Engineering student at FISAT (Federal Institute of Science and Technology, Angamaly, Kerala) and aspiring Full-Stack Developer.

Built with a dark premium cinematic editorial aesthetic inspired by high-craft digital experiences.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment Platform**: [Vercel](https://vercel.com/) / Static Hosting

---

## Design System

- **Background**: `#101116` (Deep Obsidian)
- **Secondary Background**: `#17191F`
- **Card Surface**: `#20232B`
- **Text (Primary)**: `#F5F3EE`
- **Text (Secondary)**: `#A5A7AE`
- **Accent**: `#7599FF` (Electric Cinematic Blue)
- **Border**: `#343741`
- **Typography**:
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Labels & Code: `JetBrains Mono`

---

## Project Structure

```text
portfolio/
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore configuration
├── PROJECT_CONTEXT.md        # Single source of truth for personal data and rules
├── README.md                 # Project documentation & setup instructions
├── index.html                # Main HTML with SEO, Google fonts, and Open Graph tags
├── package.json              # Project dependencies & scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind theme tokens & fonts
├── tsconfig.json             # TypeScript compiler settings
├── vercel.json               # Vercel deployment & routing configuration
├── vite.config.ts            # Vite build configuration
├── public/
│   ├── favicon.svg           # Custom branded SVG favicon
│   └── og-image.png          # 1200x630 Open Graph & Twitter social card
├── raw-assets/               # Uncompressed high-res master files (outside bundle)
│   └── 1000038596.jpg.jpeg   # Original 5.65 MB profile photo archive
└── src/
    ├── assets/
    │   └── images/
    │       ├── profile.jpg          # Web-optimized profile photo (1200x1600, 267 KB)
    │       ├── certificate.jpg      # Official Certiport HTML5 certificate (364 KB)
    │       └── campusfix.png        # Official CampusFix portal screenshot (113 KB)
    ├── components/
    │   ├── About.tsx          # Editorial profile & academic overview
    │   ├── Certifications.tsx # Verified HTML5 certification showcase + Lightbox
    │   ├── Contact.tsx        # Direct contact channels (Email, LinkedIn, GitHub)
    │   ├── Footer.tsx         # Semantic footer, social links, back to top
    │   ├── Hero.tsx           # Cinematic display hero & call-to-actions
    │   ├── Journey.tsx        # Vertical academic & development timeline
    │   ├── Navbar.tsx         # Sticky glass navigation with active section indicator
    │   ├── OrbitalScene.tsx   # Custom animated celestial SVG visual
    │   ├── PageLoader.tsx     # Non-blocking 400ms top progress indicator
    │   ├── ProjectCard.tsx    # Asymmetric alternating project showcase card
    │   ├── ProjectMockup.tsx  # Live preview frames (CampusFix screenshot / AngularJS)
    │   └── ProjectModal.tsx   # Accessible focus-trapped project details dialog
    ├── data/
    │   ├── profile.ts         # Personal details, education, contact links
    │   ├── projects.ts        # Verified project metadata & verified URLs
    │   └── skills.ts          # Core languages, frontend tools, and interest areas
    ├── App.tsx               # Primary layout composition + MotionConfig
    ├── index.css             # Tailwind layers, font families, and reduced-motion
    ├── main.tsx              # React DOM entry point
    └── vite-env.d.ts         # Vite client type definitions
```

---

## Replacing Images

All images are located in `src/assets/images/`:

### 1. Profile Photo (`src/assets/images/profile.jpg`)
- Used in the **About** section.
- **Aspect Ratio**: Portrait (approx. 4:5 or 3:4).
- **Recommended resolution**: ~1200×1600 px (compressed JPG, 200–300 KB).
- **Object position**: Controlled via `object-[center_20%]` in `src/components/About.tsx` to ensure your face is framed correctly without cropping.
- **How to update**: Save your new photo as `src/assets/images/profile.jpg` (or change the import path in `src/components/About.tsx`).

### 2. Certificate Image (`src/assets/images/certificate.jpg`)
- Used in the **Certifications** section and high-resolution **Lightbox**.
- **Aspect Ratio**: Landscape (~16:11 or 4:3).
- **Recommended resolution**: ~2000×1400 px or higher so text is crisp when viewed full-screen in the lightbox.
- **How to update**: Save your new certificate as `src/assets/images/certificate.jpg` (or update the import in `src/components/Certifications.tsx`).

### 3. CampusFix Screenshot (`src/assets/images/campusfix.png`)
- Used in the **Projects** card and the **Project Detail Modal**.
- **Aspect Ratio**: Standard desktop browser viewport (16:10 or 16:9, e.g. 1440×900 px).
- **Recommended format**: PNG or optimized WebP.
- **How to update**: Replace `src/assets/images/campusfix.png` (or update `image` in `src/data/projects.ts`).

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

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## Deployment (Vercel, Netlify, GitHub Pages)

### Vercel (Recommended)
This repository includes a preconfigured `vercel.json` with SPA routing and immutable asset caching.
1. Push your code to GitHub.
2. Import the repository in [vercel.com](https://vercel.com/).
3. No environment variables are required for standard deployment.
4. Click **Deploy**.
