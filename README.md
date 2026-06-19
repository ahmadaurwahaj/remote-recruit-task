# RemoteRecruit - Features Landing Page

A pixel-perfect, highly optimized, and responsive React landing page showcasing the features and pricing of the **RemoteRecruit** platform. Designed and built to match Figma design references with subtle, high-performance scroll and hover animations.

---

## 📸 Screenshots & Preview

*Visual design reference and previews can be found in the project's documentation folder.*

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Purpose |
|----------|------------|---------|
| Core | React 19, TypeScript | Declarative UI structure and type-safe development |
| Build Tool | Vite 6 | Next-generation build tool and dev server |
| Styling | Tailwind CSS v4 | Utility-first styling with modern theme overrides |
| Motion | Framer Motion 11 | Smooth, high-performance web animations |
| Icons | React Icons | Clean vector icon graphics |
| Typography | Google Fonts (Poppins) | Elegant font family styling matching Figma |

---

## 🧱 Folder Structure

```
src/
 ├── animations/
 │    └── variants.ts      # Reusable motion variant presets (springs, fades, clips)
 ├── assets/
 │    └── images/          # Optimized graphic assets (PNG, SVG, etc.)
 ├── components/
 │    ├── layout/          # Layout components (Navbar, Footer, RootLayout)
 │    ├── sections/        # Section views (Hero, Feature, FAQ, SignUpCTA, Pricing)
 │    └── ui/              # Reusable atomic UI elements (Container, ScrollToTop, SectionBadge, PricingCard)
 ├── data/                 # Static data configurations (pricing tiers, FAQs, feature listings)
 ├── pages/
 │    └── HomePage.tsx     # Combined structural landing page
 ├── styles/
 │    └── globals.css      # Core theme directives, scrollbars, and tailwind utility classes
 ├── App.tsx               # Main application entry point
 └── main.tsx              # App bootstrapper
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The build artifacts will be generated in the `/dist` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

### 5. Run Linter
```bash
npm run lint
```

---

## ⚡ Deployment

This project is configured to be deployed on **Vercel** via the `vercel.json` file. The deployment maps all request routes to the static `index.html` file to support frontend routing/fallback.

---

## ⚠️ Known Issues & Limitations

1. **Figma Desktop-Only Layout**: The Figma reference design specifies a 1440px desktop layout. Tablet and mobile responsive layouts have been custom-crafted using clean tailwind breakpoints (e.g. `xl`, `lg`, `md`, `sm`) to ensure proper responsive wrapping without compromising the original design aesthetics.
2. **Animation Layout Shifts**: Elements animated on scroll have subtle slide distance thresholds (e.g. `y: 24` or `x: 48`) to ensure animations do not cause visual jumps or layout shifts on small screens.
3. **Optimized External Assets**: Embedded background graphics use localized static images to avoid network fetch latency and styling flash effects on initial render.
