# Tab Snooze

> Save articles, videos and todos for later — they magically reopen when you need them.

Tab Snooze lets you snooze any browser tab (or a to-do / link) to a later time. When the time arrives, the tab reopens automatically — optionally with a desktop notification and sound. This is a **personal fork** of the upstream Tab Snooze (MV3, v12.0.1) carrying small bug fixes, so expectations are set for visitors landing on this repo.

<!-- TODO: drop a screenshot of the popup here, e.g. docs/popup.png -->

## Features

- Snooze the active tab to a preset time (next morning, tonight, weekend, "in 1 min," or a custom date/time)
- One-off or recurring (periodic) snoozes
- Snooze **all tabs in a window** at once — pick one time and every tab reopens then
- To-do items
- Sleeping-tabs list to review and manage what's pending
- Optional desktop notification and wake-up sound on reopen
- Keyboard shortcuts for everything

## Installation

This extension isn't on the Chrome Web Store, so you install it manually by **loading it unpacked** into any Chromium-based browser (Chrome, Edge, Brave, Opera, Vivaldi). There is nothing to compile or build — the repo already contains the finished extension files.

### First-time install

1. **Get the code onto your computer**, one of two ways:
   - **Download ZIP:** on this repo's page click the green **Code** button → **Download ZIP**, then unzip it.
   - **Clone** (preferred if you want easy updates later): `git clone` the repository.
2. Open your browser's extensions page:
   - Chrome / Brave / Vivaldi: `chrome://extensions`
   - Edge: `edge://extensions`
   - Opera: `opera://extensions`
3. Turn on **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the **repository root folder** — the one that contains `manifest.json` (pick the folder itself, not a subfolder inside it).
5. Tab Snooze is now installed. Click the puzzle-piece 🧩 in the toolbar and **pin** it for quick access.

> ℹ️ If the icon doesn't appear, confirm you selected the folder *containing* `manifest.json`, and that Developer mode is still on.

### Updating to a new version

Extensions loaded unpacked **do not auto-update** — when this repo gets new changes, you pull them and reload manually:

1. **Get the latest code** using the same method you installed with:
   - Cloned: run `git pull` inside the repo folder.
   - Downloaded ZIP: re-download the latest ZIP and unzip it over the old folder (keep the same path if you can).
2. Open `chrome://extensions` (or your browser's equivalent).
3. Find **Tab Snooze (MINE)** in the list and click the ↻ **Reload** arrow on its card.
4. That's it — the new version is now active.

> 💡 Your snoozed tabs and settings live in the browser's extension storage and **survive a reload**. They're only lost if you *Remove* the extension or clear browser data.
>
> ⚠️ If after reloading something looks broken, click **Remove** and repeat the *First-time install* steps above.

## Usage

### Snooze a tab

Click the icon → pick a time preset (or choose a custom date/time). The tab closes and reopens at the chosen time.

### Snooze all tabs in a window

Press **Ctrl+Shift+A** (reassignable at `chrome://extensions/shortcuts`). A picker opens with the same time presets — choose one and **every other tab in the current window** is snoozed to that time and closed. They all reopen together later. The picker tab itself stays open so the window doesn't close; internal `chrome://`/settings tabs are skipped.

### Snooze as to-do / link

Use the to-do entry in the panel to create a reminder that isn't tied to an open tab.

### Recurring snooze

Choose a periodic option to have a tab reopen on a schedule.

### Manage snoozed items

Click the icon and open the sleeping-tabs list to see, edit, or cancel pending snoozes.

### Settings

Open the options page (`chrome://extensions` → extension details → "Extension options", or via the in-panel settings) to toggle notifications and the wake-up sound.

## Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `Alt+S` | Snooze active tab |
| `Ctrl+Shift+1` | New todo tab |
| `Alt+J` | Open snoozed tabs list |
| `Alt+Shift+S` | Repeat last snooze action |
| `Ctrl+Shift+A` | Snooze all tabs in window |

Shortcuts can be reassigned at `chrome://extensions/shortcuts`.

## Permissions

Tab Snooze requests the following permissions so it can do its job:

- `tabs` / `activeTab` — snooze and reopen the current tab
- `alarms` — schedule the wake-up
- `storage` — remember your snoozed list
- `notifications` — optional desktop alert on wake
- `idle` — recover snoozes after the computer sleeps
- `offscreen` — play the wake-up sound from the background worker

## FAQ

**Where's the source code?** — This fork ships the **built** extension only (minified bundles under `static/js/`); there is no TypeScript/JSX source tree. The `.js.map` files contain the original sources if you want to inspect logic.

**Will it auto-update?** — No — extensions loaded unpacked don't auto-update. See **Updating to a new version** above.

**Is this on the Chrome Web Store?** — No; it's a personal fork loaded manually.

**Does it send my data anywhere?** — The original bundle contains analytics (mixpanel) and calls to `tabsnooze.com`; be aware these may still fire.

## For Contributors / Developers

If you want to understand the architecture, edit the bundles, or fix a bug, see **[AGENTS.md](./AGENTS.md)** for full repository guidelines (entry points, snooze lifecycle, source-map workflow). Note that changes are made by hand-editing the built bundles — there is no build step to run.

## License

MIT — see [LICENSE](./LICENSE).

## Acknowledgements

Based on [Tab Snooze](https://tabsnooze.com) by csandapp (original `author` in manifest). This is an independent personal fork.
