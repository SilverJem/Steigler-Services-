# Steigler Services — Corporate Website

## 🏢 Project Overview

A premium, multi-page corporate website for **Steigler Services** — a business and management consulting / engineering infrastructure firm operating across Africa, the Middle East, and Europe.

The site is built to Deloitte/McKinsey caliber with clean corporate minimalism, bold data-driven visuals, smooth animations, and a fully responsive mobile-first design.

---

## ✅ Completed Features

### Pages
| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, trust strip, about preview, services overview, methodology, featured projects, stats, CTA |
| About | `about.html` | Company story, vision & mission, core values, decade timeline, business philosophy |
| Services | `services.html` | 6 detailed practice areas with deliverables, metrics, and section navigation tabs |
| Projects | `projects.html` | 12 case studies with filterable grid (by category), impact bars, outcome stats |
| Contact | `contact.html` | Contact form, company info, FAQ accordion, quick service links |

### Design Features
- ✅ Premium dark hero with animated teal glow effects and grid overlay
- ✅ Sticky navbar with transparent → frosted glass scroll transition
- ✅ Count-up animations for key statistics
- ✅ Animated progress/metric bars (IntersectionObserver triggered)
- ✅ Fade-up scroll animations on all sections
- ✅ Project filtering by category (Infrastructure, Consulting, Public Sector, Strategy, Valuation)
- ✅ Interactive FAQ accordion on Contact page
- ✅ Mobile hamburger menu with animated toggle
- ✅ Responsive grid layouts (desktop → tablet → mobile)
- ✅ Teal/dark corporate brand palette with Inter typography

---

## 🗂️ File Structure

```
index.html          → Home page
about.html          → About Us page
services.html       → Services page (6 practice areas)
projects.html       → Projects / Case Studies page
contact.html        → Contact page

css/
  style.css         → Shared styles (variables, navbar, footer, cards, buttons)
  home.css          → Home page specific styles
  about.css         → About page specific styles
  services.css      → Services page specific styles
  projects.css      → Projects page specific styles
  contact.css       → Contact page specific styles

js/
  main.js           → Shared JS (navbar, animations, counter, filter, form)
  contact.js        → Contact page JS (FAQ, form validation, tabs)
```

---

## 🎨 Brand Guidelines

| Property | Value |
|----------|-------|
| Primary Colour | `#00A699` (Teal) |
| Secondary | `#595959` (Dark Gray) |
| Background | `#ffffff` / `#f5f5f5` |
| Dark Hero BG | `#0a1520` → `#0f2233` |
| Font | Inter (300–900 weights) |
| Icon Library | Font Awesome 6.5 |

---

## 🧭 Navigation Structure

```
/ (index.html)
├── /about.html
│   ├── #vision    → Vision & Mission
│   └── #team      → Team section
├── /services.html
│   ├── #business  → Business & Management Consulting
│   ├── #strategy  → Strategic Advisory
│   ├── #pm        → Project & Programme Management
│   ├── #public    → Public Sector Consulting
│   ├── #infra     → Infrastructure & Civil Engineering
│   └── #valuation → Asset Valuation & Due Diligence
├── /projects.html → Filterable project case studies
└── /contact.html  → Contact form + FAQ
```

---

## 📧 Contact Information

- **Email:** info@steiglerservices.com.ng
- **Regions:** Africa · Middle East · Europe
- **Hours:** Monday–Friday, 8:00 AM – 6:00 PM

---

## 🔧 Recommended Next Steps

1. **Real team/photos** — Add actual team member profiles and headshots to the About page
2. **CMS integration** — Connect to a headless CMS (e.g. Contentful, Sanity) for project and blog management
3. **Contact form backend** — Connect the form to a backend service (e.g. Formspree, EmailJS) for real email delivery
4. **Case study detail pages** — Expand each project card into a full case study page
5. **Testimonials section** — Add client testimonials/social proof to Home or Projects pages
6. **Blog/Insights section** — Add a thought leadership blog for SEO and authority building
7. **Google Analytics** — Add GA4 tracking
8. **SEO meta tags** — Add structured data (JSON-LD) and OG tags for social sharing
9. **Cookie consent** — Add GDPR-compliant cookie consent banner

---

## 🚀 Deployment

To publish the website live, go to the **Publish tab** in your project dashboard and click publish. No build step required — all files are static HTML/CSS/JS.
