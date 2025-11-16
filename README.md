# Portfolio Website

A modern, fully responsive personal portfolio built with **Vue.js 3**, **Vue Router**, and **Tailwind CSS**.  
The site showcases my experience, projects, skills, and contact information, with a heavy focus on clean UI, smooth UX, and modular component architecture.

---

## 🚀 Features

### 🎨 Modern UI & Responsive Layout
- Fully responsive design using **Tailwind CSS**
- Custom animations (fade-in, smooth transitions, section reveal)
- Sticky navigation bar with shadow and dynamic active state

### 📌 Smart Navigation
- Active section highlighting using **IntersectionObserver**
- Smooth scrolling to all sections
- Mobile navigation menu with open/close animation
- Automatic highlight when manually scrolling or clicking nav items

### 🧩 Component-Based Architecture
All sections are built as standalone components for clarity and maintainability:
- `HomeHero`
- `AboutView`
- `ExperienceView`
- `SkillsView`
- `ProjectsView`
- `BlogView`
- `ContactView`
- Reusable `SiteNavigation`


### 📨 Contact Form with EmailJS
- Form submission handled through **EmailJS**
- Custom validation (Name + Email)
- Dynamic error messages and DOM feedback

### 🖼️ Projects Showcase
- Dynamic hover animations on project thumbnails  
- Multi-project layout with:
  - description  
  - stack tags  
  - GitHub links  
  - live demo placeholders


---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/MarkoG111/portfolio.git
cd portfolio

```

Install dependencies:

```bash
npm install

```
Run locally:
```bash

npm run dev

