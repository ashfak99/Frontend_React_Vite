# 🦷 Dentacare — Dental Clinic Website

A modern, fully responsive dental clinic website built with **React + Vite + Tailwind CSS v4**. Features smooth scroll navigation, appointment booking form, doctor profiles, and a clean healthcare-focused UI.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 📖 Overview

**Dentacare** is a single-page dental clinic website designed for a modern dental practice. It showcases services, doctors, patient trust indicators, and an appointment booking form — all in a smooth, scroll-based experience.

The site is fully responsive and works seamlessly across **mobile**, **tablet**, and **desktop** devices.

---

## ✨ Features

- 🎨 **Modern UI** — Clean healthcare-themed design with teal accents
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- 🔄 **Smooth Scroll Navigation** — Navbar links scroll to sections
- 🎯 **Active Section Highlight** — Current section auto-detected in navbar
- 👨‍⚕️ **Doctor Profiles** — Cards with experience badges and specialties
- 🦷 **Services Grid** — Six dental services with hover animations
- 📅 **Appointment Form** — Contact form with validation and success state
- 🗺️ **Google Maps Embed** — Clinic location on contact section
- 📞 **Click-to-Call** — Direct phone dialing on mobile
- 🎭 **Hamburger Menu** — Animated mobile slide-in navigation
- 🎨 **Custom Tailwind Theme** — Brand colors via `@theme` directive

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | UI library |
| **Vite 7** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **JavaScript (ES6+)** | Programming language |

> ⚠️ **Note:** This project uses **no routing library**. Navigation is done via `#id` based smooth scroll.

---

## 📁 Folder Structure

```
dentacare/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Doctors.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/dentacare.git
   cd dentacare
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint (if configured) |

---

## 🎨 Tailwind CSS v4 Setup

This project uses **Tailwind CSS v4** with the Vite plugin. No `tailwind.config.js` file is needed.

### `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### `src/index.css`

```css
@import "tailwindcss";

@theme {
  --color-primary: #0EA5A4;
  --color-dark: #0F172A;
}

html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 90px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
```

---

## 🎨 Custom Colors

| Color | Hex | Usage |
| :--- | :--- | :--- |
| `primary` | `#0EA5A4` | Buttons, links, accents |
| `dark` | `#0F172A` | Headings, footer background |

Use them as Tailwind classes:

```jsx
<div className="bg-primary text-dark">Hello</div>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
| :--- | :--- | :--- |
| Mobile | `< 640px` | 1 column, stacked |
| Tablet | `640px – 1024px` | 2 columns |
| Desktop | `≥ 1024px` | 3–4 columns, horizontal nav |

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — click **Deploy**
4. Done! Your site is live in under a minute

### Deploy on Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and connect the repo
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click **Deploy**

---

## 🔧 Configuration

### Update Contact Information

Edit these files to add your real clinic details:

- `src/components/Navbar.jsx` — Phone number
- `src/components/Hero.jsx` — Trust stats
- `src/components/Contact.jsx` — Address, phone, email
- `src/components/Footer.jsx` — All contact info

### Add Real Images

Replace Unsplash URLs with your clinic photos:

```jsx
<img src="/images/your-clinic.jpg" alt="Clinic" />
```

Place images in the `public/` folder.

---

## 📌 Future Enhancements

- [ ] Testimonials section with patient reviews
- [ ] Gallery of clinic photos
- [ ] EmailJS integration for form submission
- [ ] WhatsApp floating chat button
- [ ] Multi-language support (English / Hindi / Bengali)
- [ ] Blog section for dental tips
- [ ] Online appointment scheduling with calendar

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

---

## 🙏 Acknowledgements

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Unsplash](https://unsplash.com) — Free stock images
- [Google Maps](https://maps.google.com) — Location embed

---

<p align="center">
  Made with ❤️ for <strong>Dentacare Dental Clinic</strong>
</p>