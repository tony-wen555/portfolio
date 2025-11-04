# Quick Setup Guide

## Step-by-Step Instructions

### 1. Project Setup
Create the following folder structure:

```
oscar-portfolio/
├── src/
│   └── components/
├── public/
```

### 2. Install the Project

```bash
# Initialize the project
npm install

# Start development server
npm run dev
```

### 3. File Placement

Place all component files in `src/components/`:
- Navbar.tsx
- Hero.tsx
- About.tsx
- Skills.tsx
- Projects.tsx
- Experience.tsx
- Contact.tsx
- Footer.tsx

Place in `src/`:
- App.tsx
- main.tsx
- index.css

Place in root directory:
- package.json
- vite.config.ts
- tsconfig.json
- tailwind.config.js
- postcss.config.js
- index.html

### 4. Install Dependencies

```bash
npm install react react-dom
npm install framer-motion react-icons
npm install -D @types/react @types/react-dom
npm install -D vite @vitejs/plugin-react
npm install -D typescript
npm install -D tailwindcss postcss autoprefixer
```

Or simply run:
```bash
npm install
```

### 5. Customization Checklist

✅ Update personal information in Hero.tsx
✅ Replace bio and stats in About.tsx
✅ Modify skills and proficiency levels in Skills.tsx
✅ Add your projects in Projects.tsx
✅ Update work experience in Experience.tsx
✅ Change contact details in Contact.tsx
✅ Update social media links in Footer.tsx
✅ Replace project images with your own
✅ Customize color scheme in tailwind.config.js
✅ Update meta tags in index.html

### 6. Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 7. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Key Notes:
- The portfolio is fully responsive
- All animations are handled by Framer Motion
- TailwindCSS is used for styling
- TypeScript provides type safety
- Vite ensures fast development and building

### Troubleshooting:

**Issue: "Cannot find module 'react-intersection-observer'"**
```bash
npm install react-intersection-observer
```

**Issue: Icons not showing**
```bash
npm install react-icons simple-icons
```

**Issue: Framer Motion errors**
Make sure you have the latest version:
```bash
npm install framer-motion@latest
```

### Environment:
- Node.js: v18+
- npm: v9+
- React: v18.3+
- TypeScript: v5.2+

That's it! Your portfolio should now be running at http://localhost:3000
