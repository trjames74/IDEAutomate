#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# IDEAutomate Deployment Script
#
# Run on the server as the deploy user:
#   bash /opt/ideautomate/deploy/deploy.sh
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

APP_DIR="/opt/ideautomate"

cd "$APP_DIR"

echo "=== IDEAutomate Deploy ==="
echo "Time: $(date)"

# ── Fix permissions (docker may create .git objects as root) ──────────────────

sudo chown -R deploy:deploy "$APP_DIR/.git" 2>/dev/null || true

# ── Pull latest code ──────────────────────────────────────────────────────────

echo "Pulling latest code..."
git pull origin main

# ── Stop existing containers ─────────────────────────────────────────────────

echo "Stopping existing containers..."
docker compose -f docker-compose.prod.yml down --remove-orphans 2>/dev/null || true

# ── Build and deploy ─────────────────────────────────────────────────────────

echo "Building and deploying..."
docker compose -f docker-compose.prod.yml up -d --build --remove-orphans

# ── Wait for health check ────────────────────────────────────────────────────

echo "Waiting for service to be healthy..."
sleep 10

STATUS=$(docker compose -f docker-compose.prod.yml ps --format json web 2>/dev/null | python3 -c "import sys,json; print(json.load(sys.stdin).get('Health','unknown'))" 2>/dev/null || echo "unknown")
echo "  web: $STATUS"

if [ "$STATUS" = "healthy" ]; then
  echo ""
  echo "=== Deploy successful ==="
else
  echo ""
  echo "=== Deploy complete (service may still be starting) ==="
  echo "Check status: docker compose -f docker-compose.prod.yml ps"
  echo "Check logs:   docker compose -f docker-compose.prod.yml logs -f web"
fi

# ── Cleanup old images ────────────────────────────────────────────────────────

docker image prune -f --filter "until=72h" > /dev/null 2>&1 || true

echo "Done: $(date)"
