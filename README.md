# VitallSkills — Vite + React starter for Azure Static Web Apps

## Quick start
```bash
npm install
npm run dev
```
Replace `src/vital_skills_website_initial_build.jsx` with your actual file contents.

## Build
```bash
npm run build   # outputs to /dist
```

## Deploy to Azure Static Web Apps
- In the Azure Portal → Static Web Apps → Create
  - Build preset: **Custom**
  - App location: `/`
  - Output location: `dist`
- Or connect GitHub and let the workflow auto-deploy.

## Custom domain
Use `www.vitallskills.life` via SWA → Custom domains (add CNAME at your registrar or host DNS in Azure DNS).
