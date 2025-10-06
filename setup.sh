#!/usr/bin/env bash
set -euo pipefail

# Create virtual environment
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -U pip wheel
# Install requirements if a requirements.txt exists
if [ -f "requirements.txt" ]; then
  pip install -r requirements.txt
fi
# Copy .env if not present
if [ ! -f ".env" ]; then
  cp .env.sample .env
fi
# Initialize agent workspace marker
python - <<'PY'
from pathlib import Path
Path(".agent_ready").write_text("ok")
print("Agent workspace initialized.")
PY
# Run post-install tests
pytest -q tests/post_install_test.py || { echo "Self-test failed"; exit 1; }
echo "Bootstrap complete."
