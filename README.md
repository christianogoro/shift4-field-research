# Shift4 Field Research — Restaurant POS Discovery

Quick mobile field-research PWA for the Shift4 Solution Specialist interview.
Clone of the Bumble Bee kiosk app, retuned for POS discovery calls.

## What it captures (per Shift4's 4 required questions + bonus sales intel)
1. Restaurant name
2. Type / cuisine
3. Year established (how long in business)
4. Current POS system + satisfaction rating (1-5 stars)
5. Pain points, integrations, monthly volume, wish list
6. Manager/owner contact + your rep notes

Writes both to local phone storage AND a Google Sheet.

---

## One-time setup (5 min)

### 1. Create the Google Sheet
- Go to sheets.new
- Name it **"Shift4 Field Research"**
- Leave row 1 empty — the script will auto-write headers on the first submission.

### 2. Deploy the Apps Script
- In the sheet: **Extensions → Apps Script**
- Delete the default `myFunction()` code
- Paste the contents of `apps-script.js` (in this folder)
- Click **Deploy → New deployment**
- Gear icon → **Web app**
- Execute as: **Me**
- Who has access: **Anyone** (the URL itself is the secret; no sensitive data is exposed)
- Click **Deploy**, authorize with your Google account, copy the **Web App URL**

### 3. Open the app on your phone
- Option A (local): open `index.html` in Safari, tap Share → Add to Home Screen
- Option B (hosted): push the folder to GitHub Pages (see bumble-bee-kiosk repo pattern)
- Tap the gear icon (⚙️) top-right → **Sheet URL** → paste the Web App URL → Save

### 4. Test
- Log a fake restaurant ("Test Diner", Toast, 3 stars)
- Check the Google Sheet — a new row should appear within ~2 seconds
- Delete the test row from the sheet (the local "Clear" button won't touch the sheet)

---

## Using it in the field

**Best times to visit restaurants**
- 2:30–4:00 PM (between lunch & dinner rush — manager is free, not stressed)
- Avoid: 11:30–1:30, 5:00–8:30
- Saturday/Sunday lunch is brutal — weekday afternoons only

**What to say at the door** (30-second opener)
> "Hi, I'm Christian — I'm doing field research for an interview with Shift4 Payments. Is the manager or an owner around? I just need 3 minutes to ask about your POS system for a school-style assignment. No sales pitch today."

**Lead with Shift4's 4 questions, then probe:**
1. Restaurant name & type ✅
2. How long have you been open? ✅
3. What POS are you using? ✅
4. On a scale of 1-5, how happy are you with it? ← the opening
5. "What's the one thing you wish it did better?" (bonus gold)

**Ask for the manager's card.** Mark follow-up time. Thank them by name. Leave.

---

## Files
- `index.html` — the PWA (single file, no build step)
- `apps-script.js` — Google Sheets receiver, paste into Apps Script editor
- `manifest.json` — PWA install metadata
- `icon.png` — home-screen icon
- `restaurant-route.md` — numbered Sarasota independent restaurants, grouped by geographic leg

## Admin features (tap gear icon ⚙️)
- **CSV** — download all visits as CSV (backup in case Sheets sync fails)
- **Sheet URL** — paste the Apps Script web app URL (one-time)
- **History** — view & delete individual local visits
- **Clear** — wipe all local visits (does NOT affect the Google Sheet)

## Notes
- Data is stored in `localStorage` — survives browser close, but wiping browser data clears it
- `no-cors` fetch means we can't read the response; if you're unsure whether a row synced, check the Sheet
- CSV export is the safety net — always download it at the end of the day
