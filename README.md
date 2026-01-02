# ✨ Oratrics Media & Creative Pages

A modern **Next.js (App Router)** project utilizing **Tailwind CSS** to deliver reusable, data-driven media grids. This project serves as a scalable foundation for various content routes like Creative Writing, Personality Profiles, and General Media.

---

## 🚀 Tech Stack

* **Framework:** Next.js 14/15 (App Router)
* **Library:** React.js
* **Styling:** Tailwind CSS & CSS Grid
* **Architecture:** Modular Data-Driven Design

---

## 📁 Project Structure

```text
src/app/
├── allroutes/               # Route-specific page compositions
│   ├── creative-writing/
│   ├── general-media/
│   ├── personality/
│   ├── media/
│   └── payments/
├── components/
│   └── GridCard.jsx         # Global reusable UI component
├── data/
│   ├── creative.js          # Shared content for creative-writing/personality
│   └── personality.js       # Specific content for personality route
├── globals.css              # Global styles & Tailwind directives
└── page.jsx                 # Landing page / Home



My Created
src/app/
├── components/
│   └── GridCard.jsx uses by creating-writting & personality
│
├── allroutes
│   └── 
│       ├── creative-writting
│       ├── general-media
│       └── personality
│       ├── media
│       ├── payments
│       
│
├── data/
│   ├── creative.js use by creating-writting personality
│   └── personality.js use by personality
│
├── page.jsx
└── globals.css
