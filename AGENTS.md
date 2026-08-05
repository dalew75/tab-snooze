# Repository Guidelines

## Project Overview

Tab Snooze is a Chrome browser extension (Manifest V3, v12.0.1) that lets users "snooze" tabs, todos, and links so they automatically reopen at a chosen later time. The toolbar popup presents preset wake times; a background service worker reopens the tabs when the scheduled time arrives.

This repository is a **personal fork** maintained for bug fixes — the manifest `name`/`short_name` carry a `(MINE)` suffix, and the 5-commit `main` history consists of direct edits to built files (duplicate-tab, repeat-last-snooze, and race-condition fixes).

> ⚠️ **There is no source tree here.** This repo ships **only the built/compiled extension**: no `package.json`, no build configuration, no `.ts`/`.tsx`/`.jsx` source, no test suite, no README. The files under `static/js/` are minified webpack production bundles. The closest thing to readable source is the `sourcesContent` embedded inside the `*.js.map` files — treat those as the reference, not the `.js` bundles.

## Architecture & Data Flow

Three webpack entry points, declared in `manifest.json`:

1. **Service worker** — `static/js/background.js` (`background.service_worker`, `type: module`). Runs `runBackgroundScript()` on install/startup; owns alarms, storage rescheduling, wake-up, and command dispatch.
2. **UI bundle** — `static/js/index.js`, loaded by `index.html` into `<div id="root">`. A React SPA using a **HashRouter**, serving the popup, options, todo, and wake-up views from one shell.
3. **Offscreen document** — `static/js/offscreen.js`, loaded by `offscreen.html`. Exists solely to play audio from the service-worker context (MV3 workers have no DOM).

**Snooze lifecycle:**

1. User opens the popup (`index.html#popup`) → React `SnoozePanel` shows time presets.
2. User picks a time → shared `core/snooze.js` appends a snooze record to `chrome.storage.local["snoozedTabs"]` and calls `scheduleWakeupAlarm()`. The popup plays `sounds/snooze.m4a` directly via `window.Audio()`.
3. The worker keeps a **single** alarm named `WAKEUP_TABS_ALARM`. `chrome.alarms.onAlarm` fires → `handleScheduledWakeup()`.
4. `handleScheduledWakeup()` filters records whose `when <= now + 1min`, creates the Chrome tabs (`wakeupTabs`), deletes them from storage (`deleteSnoozedTabs`), and reschedules recurring tabs via `resnoozePeriodicTab` (records carrying a `period`). It then re-arms `WAKEUP_TABS_ALARM` for the next earliest `when`.
5. On wake: if `settings.showNotifications` → desktop notification; if `settings.playNotificationSound` → worker calls `ensureOffscreenDocument()` then sends `{action:'playAudio', sound:SOUND_WAKEUP}` to the offscreen doc, which plays `sounds/wakeup_notification.mp3`.

**Cross-context messaging:** minimal. The **only** `chrome.runtime` message is `{action:'playAudio', sound}` → offscreen. Snooze read/write is **not** RPC'd through the background — the popup/options call `core/storage.js` and `core/snooze.js` directly (those modules are duplicated into both `index.js` and `background.js`).

**Snooze record shape** (`core/storage.js` + `core/wakeup.js`): `{ url, title, favicon, type, sleepStart (ms timestamp), when (ms wake timestamp), period? (recurring) }`.

**`chrome.storage.local` keys:** `snoozedTabs` (the array), `tsVersion`, `tabsCount`, `serverConfig`, `backups`.

**Snooze-all (hand-added in this fork):** a fifth command `snooze_all_tabs` (`Ctrl+Shift+A`) opens a `/snooze-all` HashRouter route that reuses `SnoozePanel` in an "all tabs" mode (detected via `window.location.hash`; options filtered to the 7 fixed-time presets). Clicking a preset calls `snoozeAllTabsInWindow(config)` — a hand-added export of `core/snooze.js` (bundle key `snooze["d"]`) that queries `chrome.tabs.query({currentWindow:true})`, excludes the active/picker tab and `chrome://`-style URLs, appends one snooze record per tab, calls `scheduleWakeupAlarm('auto')`, and removes the snoozed tabs. The picker tab is deliberately left open so the window survives. The single-tab popup path (`delayedSnoozeActiveTab` → `snoozeActiveTab` / `snooze["c"]`) is unchanged.

## Key Directories

- `static/js/` — webpack bundles. `background.js` (service worker), `index.js` (UI), `offscreen.js` (audio), plus lazy chunks `3`–`10` (see below) and their `.map` files.
- `static/css/` — compiled CSS + maps (`index.*.css`, chunk CSS).
- `static/media/` — decorative SVGs (sofas, moons, suns, calendars) for onboarding/options backgrounds.
- `sounds/` — `snooze.m4a` (popup SFX), `wakeup_notification.mp3` (wake-up SFX via offscreen).
- `fonts/` — Roboto Regular/Medium/Bold (loaded via `GlobalStyles.js` `@font-face`).
- `images/` — extension icons (toolbar + 128px).
- `index.html` — SPA shell (`<div id="root">`, loads `index.js` + `offscreen.js`).
- `offscreen.html` — offscreen document shell (loads `offscreen.js`).
- `manifest.json` — MV3 manifest (entry points, permissions, commands).

**Lazy chunk → view mapping** (recovered from source maps):
- `3.1da4141c.chunk.js` → `AsyncOptionsPage`: `OptionsPage`, `SettingsPage`, `SleepingTabsPage`.
- `4.dc6fd5d4.chunk.js` → `AsyncTodoPage`: `TodoPage`.
- `9.1752bf96.chunk.js` → `AsyncPeriodSelector`: `PeriodSelector`, `periodOptions`.
- `10.61c82118.chunk.js` → `AsyncDateSelector`: `DateSelector` + `react-day-picker`.
- (Chunks `5`, `6`, `7`, `8` hold further async-split UI; inspect their `.map` `sources` to identify.)

## Development Commands

**There is no build/test/lint toolchain.** Nothing runs from a terminal. The entire dev loop is:

1. Edit the built file(s) in place (typically `static/js/index.js`, `static/js/background.js`, or a `*.chunk.js`).
2. Open `chrome://extensions` in Chrome, enable **Developer mode**.
3. **Load unpacked** (or click ↻ Reload on the existing entry) pointing at the repo root.
4. Exercise the change via the toolbar popup, keyboard shortcuts, or `chrome://extensions → Inspect views: service worker`.

To read logic before editing, open the matching `*.js.map` (its `sourcesContent` holds the pre-minification code with real names like `handleScheduledWakeup`, `WAKEUP_TABS_ALARM_NAME`, `core/snooze.js`).

## Code Conventions & Common Patterns

- **Source organization (from maps):** app logic lives under `core/` (`utils.js`, `storage.js`, `settings.js`, `snooze.js`, `wakeup.js`, `commands.js`, `backgroundMain.js`, `audio.js`, `offscreen.js`), with `paths.js`, `Router.js`, and `SnoozePanel` at the UI root. New edits should respect these existing boundaries.
- **Async:** original code uses `async`/`await`; the bundle compiles each to a babel `asyncToGenerator` + `regenerator` wrapper. When patching, mirror the surrounding wrapper style rather than introducing raw `Promise` chains.
- **State management:** no Redux. `chrome.storage.local` is the source of truth; UI reads it directly. `settings.*` booleans (e.g. `showNotifications`, `playNotificationSound`) gate side effects.
- **Styling:** Material-UI v4 + styled-components, plus `sanitize.css`. Roboto via `GlobalStyles.js`. Compiled CSS lives in `static/css/`.
- **Routing:** react-router-dom `HashRouter`. The two manifest-pinned entry hashes are `index.html#popup` (toolbar action) and `index.html#options/settings` (options page); views are code-split into the numbered chunks.
- **Chrome APIs in use:** `tabs`, `activeTab`, `alarms`, `storage.local`, `notifications`, `idle`, `offscreen`, `commands`, `runtime.sendMessage`/`onMessage`.
- **Maintenance convention:** keep hand-edits minimal and localized; the duplicate-tab / race-condition fixes in git history are the model. Prefer editing the smallest bundle that contains the target logic.

## Important Files

- `manifest.json` — MV3 entry points, permissions (`offscreen,tabs,activeTab,alarms,storage,notifications,idle`), the 5 keyboard commands, pinned extension `key`, Web Store `update_url`.
- `static/js/background.js` — service worker: `runBackgroundScript`, `registerEventListeners`, `handleScheduledWakeup`, `scheduleWakeupAlarm`, `ensureOffscreenDocument`, idle-based reschedule.
- `static/js/index.js` — React UI bundle: `SnoozePanel`, `Router`, snooze-option presets, `core/storage` + `core/snooze` calls, in-popup `window.Audio()` snooze sound.
- `static/js/offscreen.js` — `chrome.runtime.onMessage` handler for `playAudio`; delegates to `core/audio.js` (`playAudio`/`loadAudio`).
- `*.js.map` — the only readable source form; consult before any edit.

## Runtime / Tooling Preferences

- **Runtime:** Google Chrome (MV3). No Node/Bun/npm required to run or test the extension.
- **Source reference:** the `*.js.map` files (webpack source maps with embedded `sourcesContent`). The minified `.js` is not human-meaningful.
- **Original toolchain (historical, not present):** Create React App (`babel-preset-react-app`) + webpack; deps included React 16.7.0, react-router-dom, Material-UI v4, styled-components, sanitize.css, moment, react-helmet, react-day-picker, mixpanel, query-string. The original project was `working_tab_snooze_extension_continued`.
- **Analytics:** the bundle calls into mixpanel and `tabsnooze.com` (e.g. `addTrackingIdToUrl`); be aware these fire in the built code.

## Testing & QA

- **No automated tests exist.** There is no test runner, no fixtures, no coverage.
- **Manual verification is the only QA:**
  - Load unpacked in Chrome (`chrome://extensions`, Developer mode on).
  - Inspect the service worker via `chrome://extensions → Inspect views: service worker` for `console.log`/`console.error` output (the code logs e.g. `'Playing sound in background script'`, `'Found null in snoozedTabs'`).
  - Inspect the popup via right-click → Inspect.
  - Exercise wake-up by snoozing a tab to "1 minute", then watching the alarm fire, tab reopen, notification, and (if enabled) the offscreen sound.
  - Test the keyboard commands: `Alt+S` (snooze active tab), `Ctrl+Shift+1` (new todo), `Alt+J` (snoozed list), `Alt+Shift+S` (repeat last snooze), `Ctrl+Shift+A` (snooze all tabs in window).
- **Known race/dedup guards already in the code** (relevant when touching wake-up): `wakeupThreshold` is advanced to `now+1min` immediately after the check to prevent double-wake; `handleScheduledWakeup` filters out `null` records defensively ("Found null in snoozedTabs").
