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
- **Email Service**: [@emailjs/browser](https://www.emailjs.com/) with native `mailto:` fallback

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
├── .env.example              # Environment variables template for EmailJS
├── .gitignore                # Git ignore configuration
├── PROJECT_CONTEXT.md        # Single source of truth for personal data and rules
├── README.md                 # Project documentation & setup instructions
├── index.html                # Main HTML with SEO, Google fonts, and Open Graph tags
├── package.json              # Project dependencies & scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind theme tokens & fonts
├── tsconfig.json             # TypeScript compiler settings
├── vite.config.ts            # Vite build configuration
├── public/
│   └── favicon.svg           # Custom branded SVG favicon
└── src/
    ├── assets/
    │   └── images/
    │       ├── profile-placeholder.svg      # Replaceable portrait asset
    │       └── certificate-placeholder.svg  # Replaceable certificate asset
    ├── components/
    │   ├── About.tsx          # Editorial profile & academic overview
    │   ├── Certifications.tsx # Verified HTML5 certification showcase
    │   ├── Contact.tsx        # Direct contact channels & validated EmailJS form
    │   ├── Footer.tsx         # Semantic footer, social links, back to top
    │   ├── Hero.tsx           # Cinematic display hero & call-to-actions
    │   ├── Journey.tsx        # Vertical academic & development timeline
    │   ├── Navbar.tsx         # Sticky glass navigation with active section indicator
    │   ├── OrbitalScene.tsx   # Custom animated celestial SVG visual
    │   ├── ProjectCard.tsx    # Asymmetric alternating project showcase card
    │   ├── ProjectMockup.tsx  # Interactive concept mockups (CampusFix / AngularJS)
    │   └── ProjectModal.tsx   # Accessible focus-trapped project details dialog
    ├── data/
    │   ├── profile.ts         # Personal details, education, contact links
    │   ├── projects.ts        # Verified project metadata & verified URLs
    │   └── skills.ts          # Core languages, frontend tools, and interest areas
    ├── App.tsx               # Primary layout composition
    ├── index.css             # Tailwind layers, font families, and reduced-motion
    ├── main.tsx              # React DOM entry point
    └── vite-env.d.ts         # Vite client type definitions
```

---

## Contact Form Setup (EmailJS)

The contact form in `src/components/Contact.tsx` is powered by **EmailJS** to send messages directly from the client side without needing a custom email server backend.

### 1. Create an EmailJS Account
1. Visit [emailjs.com](https://www.emailjs.com/) and create a free account.
2. Sign in to your dashboard at [dashboard.emailjs.com](https://dashboard.emailjs.com/).

### 2. Add an Email Service
1. In the sidebar, navigate to **Email Services** &rarr; **Add New Service**.
2. Select your email provider (e.g., **Gmail** or custom SMTP).
3. Connect your email account and click **Create Service**.
4. Note your **Service ID** (e.g. `service_abc123`).

### 3. Create an Email Template
1. In the sidebar, go to **Email Templates** &rarr; **Create New Template**.
2. Configure the email template subject and body:
   - **Subject**: `New Portfolio Message: {{subject}}`
   - **Content**:
     ```text
     You received a new message from your portfolio contact form:

     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}

     Message:
     {{message}}
     ```
3. Save the template and note the **Template ID** (e.g. `template_xyz789`).

### 4. Obtain Your Public Key
1. Go to **Account** &rarr; **API Keys** in the EmailJS dashboard.
2. Copy your **Public Key** (Account User ID).

### 5. Configure Your Local Environment
Create a `.env` file in the project root:
```bash
cp .env.example .env
```
Populate `.env` with your actual credentials:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Automatic Mailto Fallback
If `.env` is omitted or contains placeholder values:
- The form performs client-side validation as normal.
- When submitted, it automatically constructs a prefilled `mailto:` link opening the user's default email client addressed to `vishnugpai007@gmail.com`.
- An honest status message informs the user that EmailJS is not configured and the mailto fallback was triggered.
- **Strict honesty guarantee**: Success feedback is only shown when an email is genuinely dispatched and acknowledged by the server.

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
