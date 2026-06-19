# RemoteRecruit - Landing Page

A simple, fast, and beautiful landing page for **RemoteRecruit**. It shows the features and pricing of the platform.

---

## 🛠️ Tools Used

- **React 19 & TypeScript**: For building the page structure.
- **Vite 6**: For fast building and development.
- **Tailwind CSS v4**: For page styles.
- **Framer Motion 11**: For smooth animations.
- **React Icons**: For clean vector icons.

---

## 🧱 Folder Structure

```
src/
 ├── animations/
 │    └── variants.ts      # Animation settings
 ├── assets/
 │    └── images/          # Images and SVGs
 ├── components/
 │    ├── layout/          # Navbar, Footer, and Layout
 ├── components/
 │    ├── sections/        # Main sections of the page
 ├── components/
 │    └── ui/              # Small UI elements
 ├── data/                 # Text data (FAQs, pricing, features)
 ├── pages/
 │    └── HomePage.tsx     # The home page component
 ├── styles/
 │    └── globals.css      # Core styles
 ├── App.tsx               # Main app file
 └── main.tsx              # App start file
```

---

## 🚀 How to Run the Project

### What you need
Make sure you have **Node.js** installed on your computer.

### 1. Install dependencies
Run this command to install the packages:
```bash
npm install
```

### 2. Run in development mode
Run this command to start the local site:
```bash
npm run dev
```
Now, open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
To build a fast version of the site for hosting:
```bash
npm run build
```
The files will be saved in the `dist` folder.

### 4. Test the built project
To test the production build locally:
```bash
npm run preview
```

### 5. Check code quality
To check the code for errors:
```bash
npm run lint
```

---

## ⚡ Deployment

This website is set up to deploy on **Vercel** using the `vercel.json` file. All pages load from `index.html`.

---

## ⚠️ Important Details

1. **Responsive Design**: The original design was made for big screens. We added responsive styles so the page looks good on mobile phones and tablets too.
2. **Smooth Scroll**: Animations are adjusted so they do not lag or jump on small screens.
