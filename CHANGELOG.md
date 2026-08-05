# Changelog

> This fork ships only built bundles; version numbers reflect the upstream MV3 base (12.0.1). Changes below are reconstructed from commit history.

## [Unreleased]

- Added **"Snooze all tabs in window"** command (`Ctrl+Shift+A`): opens a picker that snoozes every tab in the current window to a chosen time. New `snooze_all_tabs` manifest command, `/snooze-all` route reusing `SnoozePanel`, and `snoozeAllTabsInWindow` in `core/snooze.js`.

## [12.0.1] - fork

- Initial fork of upstream Tab Snooze (MV3) for bug fixes and enhancements.
- Renamed the extension (adds `(MINE)` suffix).
- Fixed a duplicate-tab bug.
- Fixed a race condition that could still duplicate tabs.
- Fixed a duplicate when using "repeat last snooze" — now disallowed.
