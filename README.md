# TASK Skill Centre Website (React)

An English-only responsive React website inspired by the provided skill-centre poster. It uses React, Vite, and separate components/CSS.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open a terminal in that folder.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```

## Project structure
```text
task-skill-centre-react/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Courses.jsx
    │   ├── Benefits.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        └── global.css
```

## Important before publishing
- The contact form currently demonstrates client-side validation only; it does not send or store enquiries. Connect it to a backend or email service.
- Verify the centre's official name, affiliation, phone numbers, address, courses, fees, certificates, and placement claims before publishing.
- The design uses emoji in place of official logos. Do not use official government/TASK logos unless you have permission and have confirmed affiliation.
