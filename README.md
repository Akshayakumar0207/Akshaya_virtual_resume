# Akshaya Kumar – Portfolio

A fully independent React + Vite + TypeScript + Tailwind CSS portfolio website.

---

## 🚀 Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Steps

```bash
# 1. Extract the zip and enter the folder
unzip akshaya-portfolio.zip
cd akshaya-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to the /dist folder
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deploy to Vercel (Step-by-Step)

### Option A — Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally (one time)
npm install -g vercel

# Inside the project folder
vercel

# Follow the prompts:
#   Set up and deploy? → Y
#   Which scope? → your account
#   Link to existing project? → N
#   Project name? → akshaya-portfolio (or anything)
#   In which directory is your code? → . (current)
#   Want to modify settings? → N
```

Vercel auto-detects Vite and sets:
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

### Option B — Vercel Dashboard (No CLI needed)

1. Push this folder to a **GitHub repository** (public or private).
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your GitHub repo.
4. Vercel auto-detects Vite. Just click **Deploy**.
5. Done! You get a live URL like `https://akshaya-portfolio.vercel.app`.

> **Note:** `vercel.json` is already included — it handles client-side routing so page refreshes work correctly.

---

## 📁 Project Structure

```
akshaya-portfolio/
├── public/              # Static files (favicon.svg, resume.pdf)
├── src/
│   ├── assets/          # All images, certs, icons
│   ├── components/
│   │   ├── ui/          # shadcn/ui base components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ProjectsFlip.tsx
│   │   ├── ExperienceFlip.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── vercel.json          # SPA routing fix for Vercel
└── package.json
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS + shadcn/ui |
| Routing | React Router v6 |
| Icons | Lucide React |
| Deploy | Vercel |

---

## ✏️ Customisation

- **Personal info / links** → edit `src/components/Hero.tsx`, `Contact.tsx`, `Footer.tsx`
- **Projects** → edit `src/components/ProjectsFlip.tsx`
- **Experience** → edit `src/components/ExperienceFlip.tsx`
- **Certifications** → edit `src/components/About.tsx`
- **Achievements** → edit `src/components/Achievements.tsx`
- **Resume** → replace `public/resume.pdf` with your file
- **Profile photo** → replace `src/assets/ak-profile.png`
- **Theme colours** → edit CSS variables in `src/index.css`
- **Logo / favicon** → replace `public/favicon.svg`
