
  # Sadece Varım

  Canlı site: https://sadecevarim.github.io/

  ## Yerel geliştirme

  Bağımlılıkları yüklemek için `npm i` çalıştırın.

  Geliştirme sunucusunu başlatmak için `npm run dev` çalıştırın.

  Önkoşullar: Node.js (v18+ önerilir).

  1. Bağımlılıkları yükle ve geliştirme sunucusunu başlat:

  ```bash
  npm install
  npm run dev
  ```

  Vite geliştirme sunucusu genellikle http://localhost:5173 adresinde çalışır.

  ## VS Code anlık önizleme (F5)

  Çalışma alanı `.vscode/launch.json` dosyasını içerir.

  - Klasörü VS Code'da açın.
  - `npm install` komutunu bir kez çalıştırın.
  - F5 tuşuna basın — VS Code geliştirme sunucusunu başlatıp `http://localhost:5173` adresini açar.

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
  