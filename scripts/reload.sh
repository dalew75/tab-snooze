#!/usr/bin/env bash
# Tell the unpacked extension (Brave/Chrome) to reload itself.
# The service worker polls dev-reload.txt every ~3s and calls chrome.runtime.reload() when it changes.
set -euo pipefail
cd "$(dirname "$0")/.."
date +%s%N > dev-reload.txt
echo "tab-snooze: reload requested (picked up within a few seconds)"
