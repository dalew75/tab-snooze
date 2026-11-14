# Changelog

> This fork ships only built bundles; version numbers reflect the upstream MV3 base (12.0.1). Changes below are reconstructed from commit history.

## [Unreleased]

- Added a **woken-tabs list**: when 3 or more snoozed tabs wake at the same time, Tab Snooze opens one list tab (in the background) instead of every tab. Click a title to open that tab in the background, or tick some or all tabs and choose **Open selected**, **Snooze selected…** (the full 9-option snooze panel, including quick times, pick-a-date and repeat) or **Remove**. Anything you leave on the list stays saved: the popup shows "N woken tabs waiting" to reopen it, and later batches join the same list. The number is set in Settings → **Smart wakeup**, which replaces upstream's locked Pro placeholder. Set it to 0 to turn the list off.
- Added **snooze selected tabs**: shift/ctrl-click several tabs, open the popup, and any snooze option (presets, quick times, pick-a-date, repeat) applies to all of them. The popup shows "Snoozing N selected tabs". Alt-click still snoozes without closing. `snoozeSelectedTabs` in `core/snooze.js` (bundle key `snooze["e"]`). With one tab selected, behavior is unchanged.
- Added **weekend times** to the This/Next Weekend tile: 9 slots spread across the weekend so items don't all wake at once on Saturday morning. Slots are every 3h from the workday start: 5 on the first weekend day and 4 on the second (e.g. Sat 9a–9p, Sun 9a–6p). `W`/Enter still use the weekend start.
- Quick-time cells are color-coded by time of day: light yellow for morning, sky blue for afternoon, red for evening. Multi-choice tile headers now show as a pill in the theme color.
- Added **quick times** to the Later Today tile: a 3×3 grid of small buttons showing the actual clock time the tab will reopen. Each slot is now plus 15m, 30m, 1h, 2h, 3h, 4h, 6h, 8h or 12h. A slot that lands within the next hour rounds up to a quarter hour (:15/:30/:45). Slots further out snap to the nearest whole hour (e.g. at 10:07: 10:30, 10:45, 11:00, 12:00, 1:00, 2:00, 4:00, 6:00, 10:00). `L`/Enter still use the Later Today setting.
- Dev: an unpacked install now reloads itself when `dev-reload.txt` changes. `scripts/reload.sh` writes it, and `scripts/install-hooks.sh` adds a post-commit hook that runs it on every commit.
- Added **"Snooze all tabs in window"** command (`Ctrl+Shift+A`): opens a picker that snoozes every tab in the current window to a chosen time. New `snooze_all_tabs` manifest command, `/snooze-all` route reusing `SnoozePanel`, and `snoozeAllTabsInWindow` in `core/snooze.js`.
- Fixed: the pick-a-date time now defaults to the next half-hour when today is selected (it used to default to the workday start).
- Removed: the `Alt+J` "Open snoozed tabs list" keyboard shortcut (`open_snoozed_list` command). The list is still available from the popup.
- Docs: added `CLAUDE.md` (points to `AGENTS.md`) and `NOTICE`; scoped the MIT license to fork changes only.

## [12.0.1] - fork

- Initial fork of upstream Tab Snooze (MV3) for bug fixes and enhancements.
- Renamed the extension (adds `(MINE)` suffix).
- Fixed a duplicate-tab bug.
- Fixed a race condition that could still duplicate tabs.
- Fixed a duplicate when using "repeat last snooze" — now disallowed.
