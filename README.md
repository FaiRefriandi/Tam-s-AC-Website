# Tam's AC - Landing Page

Professional landing page for Tam's AC, an automotive air-conditioning workshop specializing in AC services for cars and buses in Bandung, Indonesia.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Mobile-first approach with optimized layouts for all devices
- **Complete Sections**:
  - Hero section with compelling headline and CTA
  - Services showcase with 6 key offerings
  - Why Choose Us credibility section with statistics
  - Pricing/service packages with transparent estimates
  - Customer testimonials with 5-star reviews
  - Photo gallery of workshop facilities
  - Contact form with API integration
  - Google Maps location integration
  - WhatsApp direct contact integration
- **Contact Form**: Functional form that stores submissions via API route
- **WhatsApp Integration**: Direct WhatsApp links for immediate communication


## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/contact/         # Contact form API endpoint
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Shadcn UI components
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero banner
│   ├── ServicesSection.tsx  # Services showcase
│   ├── WhyChooseUs.tsx      # Credibility section
│   ├── PricingSection.tsx   # Pricing packages
│   ├── TestimonialsSection.tsx  # Customer reviews
│   ├── GallerySection.tsx   # Photo gallery
│   ├── ContactSection.tsx   # Contact form & info
│   └── Footer.tsx           # Site footer
```

## Customization

### Update Contact Information

Edit the WhatsApp number in:
- `components/Header.tsx`
- `components/HeroSection.tsx`
- `components/ContactSection.tsx`

Replace `628123456789` with the actual WhatsApp number.

### Update Location

The Google Maps embed in `components/ContactSection.tsx` is currently set to Jl. Gatot Subroto, Bandung. Update the iframe `src` with the correct location coordinates.

### Images

All images are sourced from Pexels. Replace with actual workshop photos by updating the image URLs in:
- `components/HeroSection.tsx`
- `components/GallerySection.tsx`
- `components/TestimonialsSection.tsx`

## Build for Production

```bash
npm run build
npm run start
```

## License

All rights reserved © 2025 Tam's AC
