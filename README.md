# Tour in Eye 3

A Progressive Web App for two 2026 journeys — an Umrah pilgrimage and a Malaysia family holiday — in one installable app.

## What's inside

- **Home** — both journeys + a combined timeline
- **Umrah** — day-by-day itinerary, flights, travelers, hotels, full cost breakdown, logistics, and an interactive packing checklist
- **Malaysia** — 9-day expandable itinerary, Affaan's daily schedule, full Langkawi/Penang/KL hotel comparisons, named halal restaurants, flight route, and a toddler packing checklist
- Checklists save your progress on your device
- Installs to your phone's home screen and works offline

---

## How to put it online (about 20 minutes, free)

You'll do two things: put the code on GitHub, then connect it to Vercel. No coding needed.

### Step 1 — Create a GitHub account & repository
1. Go to **github.com** and sign up (free) if you don't have an account.
2. Click the **+** (top right) → **New repository**.
3. Name it `tour-in-eye-3`, keep it **Public** or **Private**, click **Create repository**.

### Step 2 — Upload the code
1. On the new empty repository page, click **uploading an existing file**.
2. Unzip `tour-in-eye-3.zip` on your computer.
3. Drag **all the files and folders** from inside the unzipped folder into the browser upload area.
   - Important: upload the *contents* (index.html, package.json, the `src` folder, etc.), not the outer folder.
4. Click **Commit changes**.

### Step 3 — Deploy on Vercel
1. Go to **vercel.com** and sign up with your GitHub account (one click).
2. Click **Add New… → Project**.
3. Find `tour-in-eye-3` in the list and click **Import**.
4. Vercel auto-detects Vite — just click **Deploy**.
5. Wait ~1 minute. You'll get a live link like `tour-in-eye-3.vercel.app`.

### Step 4 — Install on your phone
1. Open your Vercel link on your phone's browser.
2. **iPhone (Safari):** tap Share → **Add to Home Screen**.
3. **Android (Chrome):** tap ⋮ menu → **Install app** / **Add to Home Screen**.
4. The app icon appears on your home screen — opens full-screen, works offline.

---

## Running it on your own computer first (optional)

If you'd like to preview before deploying, and you have Node.js installed:

```bash
npm install
npm run dev
```

Then open the local link it prints (usually http://localhost:5173).

---

## Updating content later

All the trip content lives in two plain files:
- `src/data/umrah.js`
- `src/data/malaysia.js`

Edit the text there (hotel picks, confirmed times, the KSA guide name when it arrives), commit the change on GitHub, and Vercel redeploys automatically within a minute.

---

Built for Rose's family journey, 2026.
