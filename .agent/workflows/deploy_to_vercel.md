---
description: How to deploy this project to Vercel
---

There are two main ways to deploy your website to Vercel.

### Option 1: Via GitHub (Recommended for automatic updates)
This is the best method because every time you save changes (commit & push), Vercel will automatically update your live site.

1.  **Create a GitHub Repository**:
    *   Go to [GitHub.com](https://github.com/new) and create a new repository (e.g., `keys-bar-redesign`).
    *   Do **not** analyze/initialize with README/Gitignore (you already have them).

2.  **Push your code**:
    Open your terminal in the project folder and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/keys-bar-redesign.git
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` with your actual GitHub username)*

3.  **Deploy on Vercel**:
    *   Go to [Vercel.com](https://vercel.com/new).
    *   Select "Import Git Repository".
    *   Choose your `keys-bar-redesign` repo.
    *   Vercel detects Vite automatically. Click **Deploy**.

---

### Option 2: Via Vercel CLI (Manual Upload)
Good for a quick test without using GitHub.

1.  **Install Vercel CLI**:
    ```bash
    npm install -g vercel
    ```

2.  **Login**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run this command in your project folder:
    ```bash
    vercel
    ```
    *   Follow the prompts (say `y` to defaults).
    *   It will give you a "Production" URL when finished.

### Note on Build Settings
If asked manually:
*   **Framework Preset**: Vite
*   **Build Command**: `npm run build`
*   **Output Directory**: `dist`
