# Tony W - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- ⚡ Built with Vite for lightning-fast development
- 💎 TypeScript for type safety
- 🎨 TailwindCSS for modern styling
- ✨ Framer Motion for smooth animations
- 📱 Fully responsive design
- 🌙 Dark theme with gradient accents
- 🎯 SEO optimized
- 📦 Component-based architecture

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository or download the source code:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

## 🏃 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## 🎨 Customization

### Personal Information

Update the following in the component files:

**Hero.tsx:**

- Name
- Title
- Description
- Social media links

**About.tsx:**

- Bio and background
- Statistics

**Skills.tsx:**

- Technical skills and proficiency levels

**Projects.tsx:**

- Project details, descriptions, and links
- Project images

**Experience.tsx:**

- Work history
- Company details
- Responsibilities

**Contact.tsx:**

- Email address
- Phone number
- Location

### Colors

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0ea5e9',    // Sky blue
  secondary: '#8b5cf6',  // Purple
  dark: '#0f172a',       // Dark blue
  light: '#f1f5f9',      // Light gray
}
```

### Fonts

Change fonts in `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📦 Dependencies

### Main Dependencies

- react: ^18.3.1
- react-dom: ^18.3.1
- framer-motion: ^11.5.4
- react-icons: ^5.3.0

### Dev Dependencies

- vite: ^5.3.1
- typescript: ^5.2.2
- tailwindcss: ^3.4.4
- @vitejs/plugin-react: ^4.3.1

## 🔧 Configuration Files

### tsconfig.json

TypeScript configuration with strict mode enabled

### tailwind.config.js

TailwindCSS configuration with custom colors and fonts

### vite.config.ts

Vite configuration for React

## 📝 Notes

- Replace placeholder images with your actual project screenshots
- Update social media links with your profiles
- Customize the color scheme to match your brand
- Add your actual projects and work experience
- Update contact information
- Add Google Analytics or other tracking if needed

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 Author

**Tony Wen**

- Location: Wuhan, China
- GitHub: https://github.com/tony-wen555
- Email: giantking0511@gmail.com

---

Made with ❤️ and React
