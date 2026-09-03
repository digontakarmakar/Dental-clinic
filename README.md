# Dental Harmony - Premium Dental Clinic Website

A modern, bilingual (English/Bengali) dental clinic website built with React, TypeScript, and Tailwind CSS.

## 🦷 Features

- **Bilingual Support**: Full English and Bengali language support with seamless switching
- **Modern UI**: Clean, professional design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**:
  - Auto-rotating hero image carousel
  - Google Maps integration
  - Patient testimonials with Google Reviews link
  - Before/After treatment gallery
  - Doctor profiles
  - Treatment information pages
  - FAQ section
  - Appointment booking form

## 🚀 Live Demo

[View Live Site](https://digontakarmakar.github.io/Dental-clinic/)

## 📦 Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Router v7** - Routing
- **Lucide React** - Icons

## 🛠️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/digontakarmakar/Dental-clinic.git
cd Dental-clinic
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, MobileMenu
│   └── ui/              # Reusable UI components
├── data/
│   ├── before-after.ts  # Before/After gallery data
│   ├── clinic-config.ts # Clinic configuration
│   ├── doctors.ts       # Doctor profiles
│   ├── faq.ts           # FAQ data
│   ├── testimonials.ts  # Patient testimonials
│   └── treatments.ts    # Treatment information
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Doctors.tsx
│   ├── FAQ.tsx
│   ├── PatientStories.tsx
│   ├── BookAppointment.tsx
│   └── treatments/
└── index.css            # Global styles
```

## 🌐 Deployment

GitHub Pages deployment is automated with GitHub Actions. Push to the `master` branch and the workflow will build and publish the site.

Before the first deployment, open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**. The live site will be available at:

https://digontakarmakar.github.io/Dental-clinic/

For a manual deployment, run:

```bash
npm run deploy
```

The Vite base path is configured for the repository name, and the build creates a `404.html` fallback so direct links to React routes work on GitHub Pages.

## 📝 Customization

### Clinic Information

Edit `src/data/clinic-config.ts` to update:

- Clinic name
- Address
- Phone number
- Email
- WhatsApp number
- Social media links

### Doctors

Edit `src/data/doctors.ts` to add/modify doctor profiles.

### Treatments

Edit `src/data/treatments.ts` to update treatment information.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Digonta Karmakar**

- GitHub: [@digontakarmakar](https://github.com/digontakarmakar)
