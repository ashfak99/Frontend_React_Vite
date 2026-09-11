# NEXUS GYM — Premium Gym Website

A modern, responsive and visually polished gym/fitness website built with **React 19, Vite, Tailwind CSS v4 and React Icons**.

The website is designed as a complete gym business landing website where visitors can explore the gym, membership plans, facilities, trainers, testimonials, fitness content, gallery, and contact information. The current project is **frontend-only** and uses local mock data for most website content.

---

## 📌 Project Overview

**NEXUS GYM** is presented as a premium yet budget-friendly fitness destination in Kasinathpur, Kolkata.

The website focuses on:

- Professional gym branding
- Responsive design for desktop, tablet and mobile
- Smooth one-page navigation
- Membership plan presentation
- Trainer profiles
- Gym facilities and amenities
- Group fitness classes
- Nutrition guidance
- Progress tracking features
- Member testimonials
- Image gallery with interactive lightbox
- Fitness blog section
- Contact/inquiry form
- WhatsApp inquiry integration
- Phone, email and Google Maps actions
- Social media links
- Mobile navigation drawer
- Back-to-top functionality

---

# ✨ Features & Functionalities

## 1. Responsive Navigation Bar

The website has a sticky navigation bar that remains visible while scrolling.

### Desktop navigation

The desktop menu provides quick access to:

- Home
- About Us
- Pricing
- Blog
- Contact

Navigation uses section anchors so visitors can move directly to different parts of the single-page website.

### Mobile navigation

On smaller screens:

- A hamburger menu is displayed
- Clicking the menu opens a right-side navigation drawer
- A dark backdrop appears behind the drawer
- Clicking a navigation item closes the menu
- The menu can also be closed using the close button
- Pressing `Escape` closes the mobile menu
- Background page scrolling is disabled while the mobile menu is open

---

# 🏋️ 2. Hero Section

The hero section is the first major section visitors see.

It contains:

- NEXUS GYM branding
- Main headline: **Build Your Legacy**
- Gym tagline/subtitle
- Primary call-to-action
- Secondary call-to-action
- Member statistics
- Success rate
- Expert trainer count
- Large gym visual
- Decorative gradient/glow effects
- Scroll indicator

### Current statistics displayed

- **1200+ Happy Members**
- **95% Success Rate**
- **12+ Expert Trainers**

The hero background image is configurable through the mock data file.

---

# ℹ️ 3. About Us Section

The About section introduces the gym and communicates its key advantages.

It presents the gym's positioning around:

- Premium-quality facilities
- Budget-friendly pricing
- Expert trainers
- Extended operating hours
- Supportive fitness community

The section is data-driven and reads the "Why Choose Us" content from:

```text
src/mockdata/mockdata.json
```

---

# 🏢 4. Facilities Section

The Facilities section explains the major workout zones available inside the gym.

## Workout Zones

### Cardio Zone

Includes:

- Treadmills
- Ellipticals
- Cycling machines

Designed for different types of cardiovascular training.

### Functional Area

Includes facilities for:

- Kettlebell training
- Battle ropes
- TRX-based training
- Functional workouts

### Weight Training Zone

Focused on strength development with:

- Free weights
- Squat racks
- Resistance machines

## Additional Amenities

The website also highlights:

- State-of-the-art equipment
- Spacious workout zones
- Premium locker rooms
- Air-conditioned facility
- Clean and hygienic environment
- Prime location in Kasinathpur

---

# 💳 5. Membership Pricing Section

The Pricing section displays available gym membership plans in a responsive card layout.

There are currently three plans.

## Basic Plan

**₹799/month**

Includes:

- Standard Gym Access
- Cardio & Weight Zone
- Locker Room Access
- Clean & Hygienic Environment

## Pro Plan

**₹1,199/month**

Includes:

- Full Gym Access
- Access to All Zones
- 2 Free PT Sessions/Month
- Progress Tracking
- Premium Equipment Access

The Pro plan is automatically highlighted as:

> Most Popular

The middle pricing plan is automatically treated as the popular plan based on the number of plans.

## Elite Plan

**₹1,799/month**

Includes:

- Full Gym Access
- All Zones Access
- Unlimited Group Classes
- 1-on-1 Personal Trainer
- Nutrition Guidance
- Live Progress Tracking
- Priority Support

### Pricing interactions

Every plan has a **Join Now** CTA that navigates the visitor to the contact section.

---

# 🎁 6. Free Trial CTA

The pricing section also contains a dedicated free-trial promotional banner.

Current configuration:

- **3 Free Training Sessions**
- Expert coach guidance
- Facility experience before membership commitment

The CTA:

> Claim Your 3 Free Sessions

takes the visitor to the contact section.

The free-trial feature can be enabled/disabled through the mock data configuration.

---

# 👨‍🏫 7. Trainers Section

The Trainers section presents the gym's expert coaches.

Currently included trainers:

### Coach Vikram

**Head Strength & Conditioning Coach**

Experience:

- 9+ years

Expertise:

- Weight Training
- Bodybuilding
- Strength Conditioning

### Coach Meera

**Functional & Cardio Specialist**

Experience:

- 7+ years

Expertise:

- Functional Training
- Cardio
- Fat Loss

### Coach Arjun

**Body Transformation Expert**

Experience:

- 8+ years

Expertise:

- Body Transformation
- Nutrition
- Metabolic Conditioning

### Coach Ritu

**Women's Fitness & Wellness Coach**

Experience:

- 6+ years

Expertise:

- Women's Fitness
- Postnatal Wellness
- Flexibility

### Trainer card functionality

Each trainer card supports:

- Trainer image
- Trainer name
- Professional title
- Experience badge
- Short biography
- Expertise tags
- Hover animations
- Social media icon presentation

If a trainer image fails to load, the UI automatically falls back to an initials-based avatar.

> Note: The trainer social icons are currently UI placeholders using `href="#"`; real trainer social profiles are not configured in the current project.

---

# 🧑‍🤝‍🧑 8. Group Fitness Classes

The Features section includes a dedicated Group Fitness Classes card.

Current classes:

- Strength Training
- HIIT (High Intensity Interval Training)
- Functional Circuit
- Boxing & Kickboxing
- Core & Abs Blast

The card explains that these workouts are designed around community motivation and performance.

---

# 🥗 9. Nutrition Guidance

The website includes a nutrition feature section.

Current nutrition services:

- Personalized diet planning
- Calorie tracking
- Supplement advice
- Meal-prepping tips

The feature can be enabled/disabled using:

```json
"nutrition": {
  "isAvailable": true
}
```

This makes the feature configurable without changing the component structure.

---

# 📈 10. Smart Tracking & Progress Monitoring

The website promotes technology-based fitness tracking.

Current features:

- Real-time Performance Tracking
- Body Composition Analysis
- Progress Dashboard
- Science-backed Workouts

The section also displays the configured gym promise:

> 100% Results Focused

A CTA connects visitors to the pricing section.

### Important

These are currently **website feature/service descriptions**, not a connected real-time fitness tracking system. There is no member dashboard, wearable integration, analytics backend or database implementation in this frontend project.

---

# ⭐ 11. Testimonials / Success Stories

The Testimonials section displays member success stories.

Each testimonial card contains:

- Member name
- Transformation/result
- Testimonial quote
- Five-star visual rating
- Member image
- Result badge
- Hover animation

Current examples include:

- Rahul D. — Lost 15kg in 3 months
- Sneha R. — Transformed Strength & Confidence
- Amit K. — Achieved Lean Muscle Gain

The section also shows trust statistics:

- **4.9 Average Rating**
- **1200+ Happy Members**
- **95% Success Rate**

A CTA:

> Start Your Transformation

takes users to the contact section.

---

# 🖼️ 12. Interactive Gallery

The Gallery section displays gym images in a modern **bento-style grid**.

### Gallery features

- Responsive grid layout
- Different image sizes for visual hierarchy
- Lazy-loaded images
- Image captions
- Hover zoom effect
- Expand icon on hover
- Image overlay
- Click-to-open lightbox

### Lightbox functionality

When an image is clicked:

- Full-screen dark overlay opens
- Image is displayed in a larger view
- Caption is displayed
- Current image number is displayed
- Previous button is available
- Next button is available
- Close button is available
- `Escape` closes the lightbox
- `Arrow Left` moves to previous image
- `Arrow Right` moves to next image
- Clicking outside the image closes the lightbox

If an image fails to load, a fallback visual is displayed.

---

# 📝 13. Fitness Blog Section

The website contains a static fitness blog section with three sample articles.

## Current articles

### 1. 5 Essential Exercises for Beginners at the Gym

Category:

**Fitness Tips**

Author:

**Coach Vikram**

Reading time:

**5 min read**

### 2. The Complete Guide to Pre-Workout Nutrition

Category:

**Nutrition**

Author:

**Coach Arjun**

Reading time:

**7 min read**

### 3. How to Stay Consistent When Motivation Fades

Category:

**Mindset**

Author:

**Coach Meera**

Reading time:

**4 min read**

Each blog card contains:

- Cover image
- Category
- Author
- Date
- Article title
- Excerpt
- Reading time
- Read More UI

There is also a:

> View All Articles

CTA.

### Current limitation

The blog is currently a **static frontend section**. The articles do not have separate detail pages or a CMS/database-backed blog system yet. The "Read More" and "View All Articles" interactions currently point to the blog section rather than opening individual article pages.

---

# 📞 14. Contact Section

The Contact section provides multiple ways for visitors to reach the gym.

## Contact information

The section displays:

- Gym address
- Phone number
- Email address
- Opening hours
- WhatsApp CTA
- Google Maps link

---

# 🗺️ 15. Google Maps Integration

The address section includes an:

> Open in Google Maps →

link.

Clicking it generates a Google Maps search URL using the configured full gym address.

The visitor can therefore open the gym location directly in Google Maps.

---

# 📱 16. Click-to-Call

The phone number uses the `tel:` protocol.

On supported devices, clicking the phone number can open the device's phone/calling interface.

---

# 📧 17. Click-to-Email

The email address uses the `mailto:` protocol.

Clicking it can open the visitor's configured email application.

---

# 💬 18. WhatsApp Inquiry Integration

The contact section includes WhatsApp integration.

The website can open a WhatsApp conversation using the configured WhatsApp link.

The inquiry form can also generate a WhatsApp message automatically.

### Form submission flow

1. Visitor enters their details.
2. Form data is collected in React state.
3. The website builds a WhatsApp message.
4. Submitted fields are converted into readable message lines.
5. The generated message is URL encoded.
6. WhatsApp opens in a new browser tab/window.
7. A success state is shown on the website.
8. Form fields are reset.
9. The success state automatically disappears after 4 seconds.

### Current form fields

- Full Name — Required
- Email Address — Required
- Phone Number — Required
- Your Message — Optional

### Important

The current implementation does **not** send the form to an email server or database. It redirects the inquiry to WhatsApp.

---

# 🕐 19. Opening Hours

The website displays gym operating hours.

Current schedule:

| Day | Timing |
|---|---|
| Monday - Friday | 6:00 AM - 11:59 PM |
| Saturday | 6:00 AM - 11:59 PM |
| Sunday | 6:00 AM - 11:59 PM |

The website also displays:

> Open 7 Days a Week

---

# 🔗 20. Footer

The footer provides several important website utilities.

## Brand information

Includes:

- NEXUS GYM logo
- Tagline
- Gym description

## Quick Links

- About Us
- Trainers
- Membership
- Free Trial
- Contact

## Explore

- Facilities
- Pricing
- Trainers
- Gallery
- Blog

## Contact

- Address
- Phone
- Email

## Social Media

Configured social platforms:

- Facebook
- Instagram
- YouTube

Social links open in a new tab.

## Back to Top

The footer contains a **Back to Top** button.

Clicking it smoothly scrolls the page to the top.

---

# 📊 21. Data-Driven Website Configuration

A major advantage of this project is that much of the website content is separated from the React components.

The primary content configuration is:

```text
src/mockdata/mockdata.json
```

This file contains:

- Site configuration
- Hero content
- Statistics
- Membership plans
- Free trial
- Trainer information
- Facilities
- Amenities
- Group classes
- Nutrition services
- Technology features
- Testimonials
- Opening hours
- Contact information
- Footer information
- Gallery information
- Why Choose Us content
- Social feed information

This makes it easier to update business content without rewriting component logic.

---

# 🎨 22. UI / UX Features

The website uses a modern premium visual style.

### Design characteristics

- Clean white/light background
- Blue and cyan accent system
- Dark footer
- Rounded cards
- Gradient text
- Soft background glows
- Shadows
- Hover transitions
- Animated buttons
- Responsive spacing
- Mobile-friendly layout
- Visual hierarchy
- Consistent typography
- Interactive image presentation

### Micro-interactions

The project contains multiple UI interactions such as:

- Button hover animations
- Card elevation on hover
- Image zoom on hover
- Navigation hover states
- Mobile menu transitions
- Lightbox transitions
- Icon transitions
- CTA arrow movement
- Back-to-top smooth scrolling
- Experience badges
- Animated status indicator

---

# 📱 23. Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive behavior includes:

- Desktop navigation switches to mobile drawer
- Grid layouts change according to screen width
- Trainer cards adapt from 4-column to smaller layouts
- Pricing cards adapt to mobile/tablet/desktop
- Gallery changes its grid structure
- Hero content changes between desktop and mobile layouts
- Typography and spacing scale across breakpoints

---

# ♿ 24. Accessibility Considerations

The project includes several accessibility-oriented implementations:

- `alt` text for images
- `aria-label` on interactive controls
- `aria-expanded` for mobile menu
- `aria-hidden` on mobile backdrop
- `role="dialog"` for gallery lightbox
- `aria-modal="true"` for lightbox
- Keyboard support for lightbox
- Keyboard `Escape` support for mobile menu
- Visible focus rings on navigation controls

---

# 🧩 25. Component Architecture

The application follows a component-based React architecture.

Main application:

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
│
├── assets/
│   ├── hero.png
│   ├── logoNexus.png
│   ├── react.svg
│   └── vite.svg
│
├── components/
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   │
│   ├── Blog/
│   │   ├── Blog.jsx
│   │   └── Blog.css
│   │
│   ├── Contacts/
│   │   ├── Contacts.jsx
│   │   └── Contacts.css
│   │
│   ├── Facilities/
│   │   ├── Facilities.jsx
│   │   └── Facilities.css
│   │
│   ├── Features/
│   │   ├── Features.jsx
│   │   └── Features.css
│   │
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   ├── Gallery/
│   │   ├── Gallery.jsx
│   │   └── Gallery.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── Pricing/
│   │   ├── Pricing.jsx
│   │   └── Pricing.css
│   │
│   ├── Testimonials/
│   │   ├── Testimonials.jsx
│   │   └── Testimonials.css
│   │
│   └── Trainers/
│       ├── Trainers.jsx
│       └── Trainer.css
│
└── mockdata/
    └── mockdata.json
```

---

# 🛠️ Technology Stack

## Frontend

- **React 19**
- **JavaScript / JSX**
- **HTML5**
- **CSS**
- **Tailwind CSS 4**

## Build Tool

- **Vite**

## Icons

- **React Icons**

## Code Quality

- **Oxlint**

## State Management

The project currently uses React's built-in:

```text
useState
useEffect
```

No external state-management library is currently used.

---

# 📦 Dependencies

Main dependencies:

```text
react
react-dom
react-icons
tailwindcss
@tailwindcss/vite
```

Development dependencies include:

```text
@vitejs/plugin-react
vite
oxlint
@types/react
@types/react-dom
```

---

# 🚀 Installation & Setup

## 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

## 2. Enter the project directory

```bash
cd GymWebsite
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start development server

```bash
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

Create a production build using:

```bash
npm run build
```

The generated production files will be placed in:

```text
dist/
```

---

# 👀 Preview Production Build

After building:

```bash
npm run preview
```

---

# 🔍 Linting

Run the project's configured linter:

```bash
npm run lint
```

The project uses **Oxlint** for code-quality checking.

---

# ⚙️ Available NPM Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |

---

# 📝 Content Customization

Most business information can be modified from:

```text
src/mockdata/mockdata.json
```

For example, you can update:

### Gym name

```json
"siteName": "NEXUS GYM"
```

### Membership price

```json
"price": "₹799/month"
```

### Phone number

```json
"phone": "+91-98765-12345"
```

### Email

```json
"email": "info@nexusgymkasinathpur.com"
```

### WhatsApp

```json
"whatsappLink": "https://wa.me/..."
```

### Opening hours

The opening-hour objects can be edited directly in the same JSON file.

---

# 🖼️ Image Configuration

The project references images from configured paths in the mock data.

Examples include:

```text
/assets/images/gallery/
```

```text
/assets/images/trainers/
```

```text
/assets/images/testimonials/
```

```text
/assets/images/blog/
```

The image paths should match the actual files included in the deployment/public asset structure.

If an image fails to load, several components provide visual fallbacks rather than completely breaking the UI.

---

# 🔐 Current Architecture / Backend Status

This project is currently a **frontend-only React website**.

It does **not currently include**:

- Backend API
- Database
- Admin dashboard
- User authentication
- Membership payment gateway
- Online membership purchase
- Online appointment booking
- Email server
- CRM integration
- Member login
- Trainer login
- Real-time progress tracking backend
- Blog CMS
- Server-side form storage

The contact form currently uses **WhatsApp redirection** rather than submitting data to a backend.

---

# 🚧 Recommended Future Upgrades

The current frontend can be extended into a complete gym management platform.

Potential upgrades include:

## Backend

- Node.js
- Express.js
- MongoDB
- REST API

## Admin Dashboard

Admin could manage:

- Members
- Membership plans
- Trainers
- Blog posts
- Gallery images
- Leads
- Contact inquiries
- Pricing
- Gym announcements

## Membership System

Add:

- Online registration
- Membership selection
- Online payments
- Membership expiry tracking
- Renewal reminders
- Digital membership ID

## Booking System

Add:

- Trainer booking
- Personal training booking
- Group class booking
- Appointment calendar
- Booking confirmation

## Communication

Integrate:

- WhatsApp Business API
- Email notifications
- SMS notifications

## Analytics

Add:

- Visitor analytics
- Lead tracking
- Membership conversion tracking
- Campaign tracking

## Authentication

Possible roles:

```text
Admin
Trainer
Member
```

## Blog CMS

Convert the static blog into a dynamic CMS where administrators can:

- Create articles
- Edit articles
- Delete articles
- Upload images
- Add categories
- Add authors
- Publish/unpublish articles

## Real Progress Tracking

The existing "Smart Tracking" concept can be expanded into:

- Weight tracking
- Body-fat tracking
- Workout history
- Progress charts
- Personal goals
- Trainer feedback
- Before/after tracking

---

# 📂 Project Flow

The current single-page website follows this structure:

```text
Navbar
   ↓
Hero
   ↓
About
   ↓
Facilities
   ↓
Pricing
   ↓
Trainers
   ↓
Testimonials
   ↓
Features
   ├── Group Classes
   ├── Nutrition
   └── Smart Tracking
   ↓
Gallery
   ↓
Blog
   ↓
Contact
   ├── Google Maps
   ├── Phone
   ├── Email
   └── WhatsApp Inquiry
   ↓
Footer
```

---

# 🔄 User Journey

A typical visitor can use the website like this:

```text
Open Website
     ↓
View Gym Introduction
     ↓
Explore Facilities
     ↓
Check Membership Plans
     ↓
View Trainers
     ↓
Read Member Success Stories
     ↓
Explore Fitness Services
     ↓
View Gym Gallery
     ↓
Read Fitness Articles
     ↓
Contact Gym
     ├── Call
     ├── Email
     ├── Google Maps
     └── WhatsApp
```

---

# 📌 Important Notes

1. This repository is a **React frontend project**.
2. Website content is primarily controlled through `src/mockdata/mockdata.json`.
3. The current blog is static.
4. The current trainer social icons are placeholders.
5. Membership CTAs currently navigate to the contact section rather than processing online payments.
6. Contact inquiries are redirected to WhatsApp.
7. No database is connected.
8. No authentication system is currently implemented.
9. The smart tracking section describes a service/feature concept; it is not currently backed by a real tracking backend.
10. Real production deployment should verify that every configured image path exists.
11. Business contact details, social links, pricing and claims should be verified before publishing publicly.

---

# 🎯 Purpose of the Project

This project can be used as:

- A professional gym business website
- Gym landing page
- Fitness center website
- Gym lead-generation website
- Frontend portfolio project
- React + Tailwind practice project
- Base for a full gym management platform

---

# 📄 License

No explicit open-source license is currently specified in the project.

If this project is intended for public distribution, add an appropriate license such as MIT, Apache-2.0, or a proprietary/commercial license according to the owner's requirements.

---

## 👨‍💻 Built With

**React + Vite + Tailwind CSS + React Icons**

Built as a modern, responsive and conversion-focused frontend experience for **NEXUS GYM**.
