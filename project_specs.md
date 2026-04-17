---
tags: [project, moc]
---

# Shift4 Field Research — Project Specs

## What this is
A mobile PWA data-gathering tool for Christian's Shift4 Payments Solution Specialist interview field assignment. Visit 3+ independent Sarasota restaurants, capture POS info, present findings in a 10-min 2nd-interview presentation with Lonnie Ladwig.

## Who uses it
Christian, in the field, on his phone, standing outside a restaurant after talking to a manager.

## Tech stack
- Single-file HTML PWA (no build step)
- Vanilla JS, CSS, localStorage
- Google Apps Script + Google Sheet (receiver endpoint)
- Same pattern as `my-project/condo-hoa-expo/index.html` (bumblebee kiosk)

## Form flow
Welcome → Basics (name, type, year, address) → POS (system, stars, years, contract) → Pain & Wish (pain chips, integrations, volume, wish) → Contact (manager, phone, email, notes) → Success.

## Data captured per visit
20 fields — Shift4's required 4 + bonus sales intel (pain points, integrations used, monthly volume, wish list, manager contact, rep notes).

## Third-party services
- Google Sheets (via Apps Script web app URL)
- Nothing else

## Done criteria
- [x] App builds & opens in browser
- [x] All 4 form screens navigate cleanly
- [x] Submission writes to localStorage
- [x] Sheets sync endpoint works (after user pastes URL)
- [x] Admin panel works (CSV, history, clear)
- [x] Sarasota restaurant list delivered, 3+ independents per leg, geographically ordered
- [ ] User tests app on phone (Safari → Add to Home Screen)
- [ ] User deploys Apps Script, pastes URL, does test submission
- [ ] User visits 3+ restaurants and submits real data
- [ ] User books 2nd interview with Lonnie after field work complete

## Out of scope
- Server-side auth (the Sheet URL is the secret)
- Photo uploads (can add later if Lonnie wants storefront pics)
- Route optimization via Google Maps API (manual route in `restaurant-route.md` is enough)
