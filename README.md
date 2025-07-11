# Con Heo Vàng Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Mobile-First Responsive Design
- **Mobile Menu**: Hamburger menu with slide-out drawer for mobile devices
- **Touch-Friendly**: All buttons and interactive elements are optimized for touch (44px minimum)
- **Responsive Typography**: Text scales appropriately across all device sizes
- **Optimized Images**: Images are responsive and load efficiently on mobile
- **Smooth Animations**: Mobile-optimized animations that don't impact performance

### Key Mobile Improvements
- **Header**: Collapsible mobile menu with user authentication
- **Navigation**: Hidden on mobile, accessible via hamburger menu
- **Content**: Proper spacing and padding for mobile screens
- **Buttons**: Larger touch targets for better mobile interaction
- **Images**: Responsive image sizing with proper aspect ratios

## 📱 Mobile Responsive Features

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch targets minimum 44px
- Smooth scrolling behavior
- Prevented horizontal scroll
- Improved text readability
- Better spacing and padding
- Mobile-specific animations

### Components
- **HeaderHomepage**: Mobile menu with drawer
- **Logo**: Responsive sizing with clamp()
- **Banner**: Mobile-optimized height and content
- **Navigation**: Hidden on mobile, accessible via menu
- **Content Sections**: Responsive grids and spacing

## 🛠️ Technologies

- React 18
- TypeScript
- Tailwind CSS
- Ant Design
- Framer Motion
- Vite

## 📦 Installation

```bash
npm install
npm run dev
```

## 🎨 Design System

### Colors
- Primary: Orange (#ffc84e)
- Secondary: Gray tones
- Accent: Orange variations

### Typography
- Mobile: Optimized font sizes and line heights
- Responsive: Scales from mobile to desktop
- Readable: Proper contrast and spacing

## 📱 Mobile Testing

The website has been optimized for:
- iPhone (all sizes)
- Android devices
- Tablets
- Various screen orientations

## 🔧 Customization

### Mobile Menu
Edit `src/components/organisms/HeaderHomepage.tsx` to modify the mobile menu behavior.

### Responsive Breakpoints
Update Tailwind config or CSS media queries in `src/index.css`.

### Touch Targets
All interactive elements follow the 44px minimum touch target guideline.

## 📄 License

MIT License

## Clone Project

```bash
git clone https://github.com/trananhkiet0504/conheovang
```

Project Overview

Folder Structure

📂 src
┣ 📂 assets  
 ┣ 📂 components  
 ┃ ┣ 📂 atoms  
 ┃ ┣ 📂 molecules  
 ┃ ┣ 📂 organisms  
 ┃ ┣ 📂 templates  
 ┃ ┗ 📂 pages  
 ┣ 📂 hooks  
 ┣ 📂 contexts  
 ┣ 📂 services  
 ┣ 📂 utils  
 ┣ 📂 routes  
 ┣ 📂 styles  
 ┣ 📜 App.tsx  
 ┣ 📜 main.tsx  
 ┣ 📜 vite.config.ts  
 ┗ 📜 tsconfig.json

Start up Steps

1. Clone the repository:

git clone <repo-url>
cd <project-directory>

2. Install dependencies:

npm install

3. Start the development server:

npm run dev
