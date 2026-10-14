TASK Skill Centre redesign

1. Back up your existing src/App.js and src/styles/global.css.
2. Copy these files into the same paths in your existing project.
3. Check that src/App.js imports ./styles/global.css and main.jsx imports App.js.
4. Run npm run dev, then npm run build.
5. Commit and push to GitHub to trigger a Vercel deployment.

Important: The registration form currently saves data only to localStorage in the visitor's browser. It does not notify the training centre. Connect a backend or form service before using this for real registrations. The Register button is a demo form link; real authentication is not included.
