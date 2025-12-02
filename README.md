# FDP Transparency Portal for Batangas LGUs (2019–2023)

A modern, interactive web application showcasing fiscal transparency research and financial performance analysis for Local Government Units in Batangas.

## 🎯 Project Overview

This portal is an evidence-based digital platform designed to help LGUs strengthen fiscal transparency, accountability, and financial management through interactive dashboards, performance profiles, and key findings from a comprehensive five-year study.

**Research Focus**: Full Disclosure Policy (FDP) compliance and its impact on financial performance across Batangas LGUs from 2019 to 2023.

## ✨ Features

- **📊 Interactive Dashboards**: Visualize financial performance indicators using Recharts
- **📈 Study Findings**: Analyze trends in revenue, expenditure, debt management, and compliance
- **🏅 Best Practices**: Learn from high-performing LGUs (Calaca City, Batangas City, Tanauan City)
- **🔍 Transparency Framework**: Understand how transparency drives fiscal performance
- **📌 Recommendations**: Evidence-based strategies for improving FDP compliance
- **📥 Resources**: Download research documents, guides, and tools
- **📩 Feedback Form**: Direct communication with research team
- **📱 Responsive Design**: Mobile-friendly interface optimized for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📋 Project Structure

```
fdp-transparency-portal/
├── app/
│   ├── layout.tsx              # Root layout with header and footer
│   ├── page.tsx                # Homepage
│   ├── about-fdp/page.tsx      # FDP explanation
│   ├── study-findings/page.tsx # Interactive charts
│   ├── best-practices/page.tsx # High-performing LGUs
│   ├── framework/page.tsx      # Transparency framework
│   ├── recommendations/page.tsx # Strategic recommendations
│   ├── resources/page.tsx      # Downloadable resources
│   ├── feedback/page.tsx       # Feedback form
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Navigation
│   └── Footer.tsx              # Footer with links
├── .github/workflows/deploy.yml # GitHub Actions
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd fdp-transparency-portal
npm install
npm run dev
```

Visit `http://localhost:3000`

## 📖 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with featured LGUs |
| About FDP | `/about-fdp` | FDP explanation and legal basis |
| Study Findings | `/study-findings` | Financial performance analysis |
| Best Practices | `/best-practices` | High-performing LGU profiles |
| Framework | `/framework` | Transparency-to-performance framework |
| Recommendations | `/recommendations` | Strategic improvement recommendations |
| Resources | `/resources` | Downloadable research documents |
| Feedback | `/feedback` | Contact form and research team |

## 🚀 Deploying to GitHub Pages

### Setup

1. Create a new GitHub repository named `fdp-transparency-portal`

2. Clone the repository and navigate to the project:
```bash
cd fdp-transparency-portal
```

3. Initialize Git and push:
```bash
git add .
git commit -m "Initial commit: FDP Transparency Portal"
git branch -M main
git push -u origin main
```

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
1. Install dependencies
2. Build the project with static export
3. Deploy to GitHub Pages

Your site will be available at: `https://yourusername.github.io/fdp-transparency-portal/`

### Custom Domain

To use a custom domain, update the `cname` in `.github/workflows/deploy.yml`:
```yaml
cname: yourdomain.com
```

## 📊 Data Visualization

Interactive charts for:
- Locally Sourced Revenue per Capita (LSRPC)
- Total Expenditure per Capita (TEPC)
- Debt Service Ratio (DSR)
- Social Expenditure Ratio (SER)
- Economic Expenditure Ratio (EER)
- FDP Compliance comparison across LGUs

## 🎨 Design Highlights

- **Modern UI**: Clean, professional design with gradient accents
- **Responsive**: Mobile-first approach for all devices
- **Interactive**: Hover effects, smooth transitions, expandable sections
- **Accessible**: Semantic HTML, proper contrast, keyboard navigation
- **Consistent Branding**: Blue, green, orange color scheme

## 👥 Research Team

- **Ashley Gwyneth Pananana** - panapanaanashleygwyneth@gmail.com
- **Noreen Lee Sulabo** - noreleesulabo09@gmail.com
- **Landichoanna Kathrina** - landichoannakathrina@gmail.com

## 📞 Contact & Feedback

Submit feedback through the Feedback Form on the `/feedback` page.

Types of feedback we welcome:
- Suggestions for improvement
- Data corrections
- Additional information
- Technical issues
- Success stories

## 📚 Resources Included

- Full Study Report (2019-2023)
- FDP Compliance Checklist
- Data Analysis Spreadsheet
- Best Practices Manual
- Training Materials Package
- Digital Tools Implementation Guide

## 🎓 Research Details

- **Research Period**: 2019-2023
- **Geographic Focus**: Batangas Province, Philippines
- **Study Subject**: FDP Compliance & Financial Performance
- **Legal Basis**: DILG Memorandum Circulars 2010-083, 2019-149, 2024-021

## 📝 License

This project is provided for educational and compliance purposes. Resources may be redistributed with proper attribution to the original research team.

## 🔒 Privacy

All feedback submitted through the portal is treated confidentially. Personal information is not shared with third parties without consent.

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build and exports it as static HTML files in the `out/` directory.

## 🤝 Contributing

To contribute improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 Disclaimer

While efforts have been made to ensure accuracy, users are encouraged to verify critical data with official sources. The research team is not liable for decisions made based solely on information from this portal.

## 🎯 Key Objectives

This portal aims to:
1. Showcase the importance of fiscal transparency
2. Demonstrate FDP impact on financial performance
3. Share best practices across LGUs
4. Provide tools for improving transparency
5. Engage citizens in fiscal governance
6. Support evidence-based policy making

## 📈 Key Findings

The research demonstrates:
- Higher FDP compliance correlates with stronger revenue generation
- Transparent LGUs show more responsible debt management
- Expenditure patterns are more strategic in transparent LGUs
- Component cities outperform municipalities but high-compliance municipalities compete effectively
- Digital tools (FDPP v2, v3) improved compliance significantly

---

**Version**: 1.0.0  
**Status**: Production Ready  
**Last Updated**: December 2024  
**Deployment**: GitHub Pages Ready
