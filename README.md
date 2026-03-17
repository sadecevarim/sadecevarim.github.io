
  # Wireframe Moodboard Completion

  This is a code bundle for Wireframe Moodboard Completion. The original project is available at https://www.figma.com/design/kgYOzuzjD2hfPAbjuy7kj6/Wireframe-Moodboard-Completion.

  ## Run locally

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  Prerequisites: Node.js (v18+ recommended).

  1. Install dependencies and start dev server:

  ```bash
  cd "c:\Users\Umut\Desktop\github page"
  npm install
  npm run dev
  ```

  Vite dev server usually runs at http://localhost:5173 — open that in a browser.

  ## VS Code instant preview (F5)

  Workspace already includes `.vscode/launch.json` and a task to run the Vite dev server.

  - Open this folder in VS Code (`c:\Users\Umut\Desktop`).
  - Run `npm install` once.
  - Press F5 — VS Code will run the dev server and open Chrome at `http://localhost:5173`.

  Alternative in-IDE preview:

  - Install the `Browser Preview` extension (auchenberg.vscode-browser-preview).
  - Open Command Palette (Ctrl+Shift+P) → `Browser Preview: Open Preview` and enter `http://localhost:5173`.

  ## Production build

  ```bash
  npm run build
  npx serve -s dist -l 5000
  ```

  ## GitHub Pages

  Live: https://sadecevarim.github.io/

  This project is configured for a user/org site at `/` via `vite.config.ts`.
  Push to `main` to trigger the deploy workflow which will publish to GitHub Pages.

  Manual deploy (optional):

  ```bash
  npm run build
  npm run deploy
  ```
  