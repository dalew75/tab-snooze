#!/usr/bin/env bash
# Install a git post-commit hook so every commit auto-reloads the unpacked extension.
set -euo pipefail
cd "$(dirname "$0")/.."
hookdir="$(git rev-parse --git-path hooks)"
mkdir -p "$hookdir"
hook="$hookdir/post-commit"
cat > "$hook" <<'HOOK'
#!/usr/bin/env bash
"$(git rev-parse --show-toplevel)/scripts/reload.sh" >/dev/null 2>&1 || true
HOOK
chmod +x "$hook"
echo "Installed $hook"
