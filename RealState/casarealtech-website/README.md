# 🏠 Casa Realtech — Premium Real Estate Website

A modern, fully responsive real estate consultancy website built with **React + Vite + Tailwind CSS**. Casa Realtech Private Limited helps clients find premium residential, commercial, and land properties across Kolkata.

![Casa Realtech](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan)

---

## 📖 Overview

**Casa Realtech** is a trusted real estate consultancy based in Kolkata, offering end-to-end services for property buyers, investors, and NRIs. This website serves as a digital storefront for the company, showcasing featured properties, services, and enabling direct lead generation through inquiry forms and WhatsApp integration.

**Tagline:** *"Where Every Dream Finds a Roof."*

---

## ✨ Features

### 🎨 Design & UX
- **Fully Responsive** — Mobile, Tablet, and Desktop optimized layouts
- **Premium Color Scheme** — Deep Navy (`#0B1B32`) + Amber (`#F59E0B`) accents
- **Modern UI** — Clean typography, smooth animations, hover effects
- **Sticky Navigation** — Always accessible top navbar with mobile hamburger menu
- **Floating WhatsApp Button** — Global quick-contact CTA on every page

### 🧩 Sections & Pages

- **Home Page**
  - Hero Section with Kolkata skyline background
  - "What We Do" — Services cards (Commercial, Land, Investment)
  - "Why Choose Us" — Trust badges (RERA, Google Rating, Expert Team, Support)
  - Featured Properties — Handpicked listings
  - Testimonials — Client reviews with star ratings
  - Contact Section — Inquiry form + Office details + Google Map

- **Additional Pages** *(In Development)*
  - Properties — Full listing with filters & search
  - About Us — Company story, team, credentials
  - Services — Detailed service descriptions
  - Contact — Standalone contact page

### 🔧 Functionality
- React Router for client-side navigation
- Reusable component architecture
- Icon library: `react-icons` (Font Awesome)
- Google Maps embed (no API key required)
- SEO-friendly semantic HTML

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router DOM |
| **Icons** | React Icons (Font Awesome) |
| **Language** | JavaScript (JSX) |

---

## 📁 Folder Structure

```
casarealtech-website/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive navigation with mobile menu
│   │   ├── Hero.jsx                # Homepage hero section
│   │   ├── Services.jsx            # "What We Do" cards
│   │   ├── WhyChooseUs.jsx         # Trust badges section
│   │   ├── FeaturedProperties.jsx  # Featured property cards
│   │   ├── Testimonials.jsx        # Client reviews
│   │   ├── ContactSection.jsx      # Inquiry form + map
│   │   └── Footer.jsx              # Footer with links & social
│   ├── pages/
│   │   ├── Home.jsx                # Homepage assembly
│   │   ├── Properties.jsx          # Properties listing (WIP)
│   │   ├── About.jsx               # About page (WIP)
│   │   ├── Services.jsx            # Services page (WIP)
│   │   └── Contact.jsx             # Contact page (WIP)
│   ├── data/
│   │   └── properties.js           # Static property data
│   ├── App.jsx                     # Main app with routing
│   ├── main.jsx                    # Entry point with BrowserRouter
│   └── index.css                   # Tailwind directives
├── .env
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/casarealtech-website.git
   cd casarealtech-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory:

   ```env
   VITE_WHATSAPP_NUMBER=919830334567
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open in browser:**

   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server with HMR |
| `npm run build` | Builds production-ready bundle in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint for code quality checks |

---

## 📱 Responsive Breakpoints

The website is designed with a mobile-first approach using Tailwind CSS breakpoints:

| Breakpoint | Width | Devices |
|------------|-------|---------|
| Default | 0px+ | Mobile phones |
| `sm:` | 640px+ | Large phones / Small tablets |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Laptops / Desktops |
| `xl:` | 1280px+ | Large desktops |

**Example: Property Grid Responsiveness**

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* 1 column on mobile, 2 on tablet, 4 on desktop */}
</div>
```

---

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Navy Blue | `#0B1B32` | Primary background, navbar, footer |
| Amber | `#F59E0B` | Accent, buttons, highlights |
| White | `#FFFFFF` | Text on dark bg, card backgrounds |
| Gray | `#6B7280` | Secondary text, borders |
| Green | `#22C55E` | WhatsApp button |

---

## 🌐 Key Integrations

### WhatsApp Integration

The floating WhatsApp button uses the `wa.me` deep-link format:

```
https://wa.me/919830334567
```

### Google Maps Embed

Uses the free embed URL (no API key required):

```
https://www.google.com/maps?q=Ecospace+Business+Tower,+Newtown,+Kolkata&output=embed
```

---

## 🔐 RERA Compliance

**RERA Registration Number:** `WBRERA/A/NOR/2025/000805`

All property listings must comply with West Bengal RERA regulations. The RERA number is prominently displayed in the "Why Choose Us" section for transparency.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact

**Casa Realtech Private Limited**

📍 **Address:** Tower 5A-303, Ecospace Business Tower, Action Area II, Newtown, Kolkata - 700156

📞 **Phone:** +91 98303 34567 / +91 98765 43210

✉️ **Email:** info@casarealtech.com / sales@casarealtech.com

🌐 **Website:** www.casarealtech.com

---

## 📄 License

This project is proprietary and owned by Casa Realtech Private Limited. Unauthorized copying, distribution, or modification is strictly prohibited.

© 2025 Casa Realtech Private Limited. All rights reserved.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) — For placeholder images

---

Built with ❤️ for Casa Realtech