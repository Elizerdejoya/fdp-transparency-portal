# Images Directory Structure

This folder contains all images used in the FDP Transparency Portal. Organize images by category to keep the project clean and maintainable.

## Directory Organization

### `/heroes`
Banner/hero images for page headers
- `home-hero.png` - Homepage banner
- `about-hero.png` - About FDP banner
- `study-hero.png` - Study Findings banner
- `best-practices-hero.png` - Best Practices banner
- `framework-hero.png` - Framework banner
- `recommendations-hero.png` - Recommendations banner
- `resources-hero.png` - Resources banner
- `feedback-hero.png` - Feedback banner

### `/lgu-profiles`
Local Government Unit profile and showcase images
- `calaca-city.png` - Calaca City profile image
- `batangas-city.png` - Batangas City profile image
- `tanauan-city.png` - Tanauan City profile image
- `other-lgu-*.png` - Additional LGU images

### `/icons`
Small icons and graphics (SVG or PNG)
- `transparency-icon.svg` - Transparency/disclosure icon
- `revenue-icon.svg` - Revenue indicator icon
- `spending-icon.svg` - Spending/expenditure icon
- `compliance-icon.svg` - Compliance/checklist icon
- `trust-icon.svg` - Public trust icon

### `/charts`
Chart images or infographics
- `revenue-trend.png` - Revenue trend visualization
- `compliance-chart.png` - Compliance rate chart
- `performance-chart.png` - Performance metrics chart
- `framework-flow.png` - Framework flow diagram

### `/logos`
Official logos and branding
- `fdp-logo.png` - FDP Transparency Portal logo
- `batangas-logo.png` - Batangas province logo
- `dilg-logo.png` - DILG official logo

## Image Guidelines

- **Format**: PNG (preferred for transparency), JPG (for photographs), SVG (for icons)
- **Size**: Keep file sizes optimized (<500KB per image)
  - Heroes: ~1200x400px (web optimized)
  - Profile images: ~300x300px
  - Icons: 64x64px or 128x128px
  - Logos: 150x150px minimum
- **Naming**: Use lowercase, hyphens for spaces (e.g., `calaca-city.png`)
- **Accessibility**: Always provide alt text in code

## Usage in Components

Import and use images in your React components:

```jsx
import Image from 'next/image';

export default function MyComponent() {
  return (
    <Image
      src="/images/heroes/home-hero.png"
      alt="Home page hero banner"
      width={1200}
      height={400}
    />
  );
}
```

For simple img tags:
```jsx
<img src="/images/logos/fdp-logo.png" alt="FDP Portal Logo" />
```

## Current Status

- [ ] Home hero image
- [ ] About FDP hero image
- [ ] Study Findings hero image
- [ ] Best Practices hero image
- [ ] Framework hero image
- [ ] Recommendations hero image
- [ ] Resources hero image
- [ ] Feedback hero image
- [ ] Calaca City profile image
- [ ] Batangas City profile image
- [ ] Tanauan City profile image
- [ ] Icons (transparency, revenue, spending, compliance, trust)
- [ ] Charts/infographics
- [ ] FDP Portal logo
- [ ] Batangas province logo
- [ ] DILG logo

---

Add images to their respective folders and update components to use them. All paths are relative to the `/public` folder.
