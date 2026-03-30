#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# IDEAutomate — One-time server setup
#
# Adds the site to the existing Caddy config on the SewTech server.
# Run as root:
#   ssh root@178.156.230.211 'bash -s' < deploy/setup-site.sh
#
# Prerequisites: Docker, Caddy, and deploy user already exist (from SewTech).
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

DOMAIN="${1:-ideautomate.com}"
APP_DIR="/opt/ideautomate"
DEPLOY_USER="deploy"
REPO="git@github.com:trjames74/IDEAutomate.git"

echo "=== IDEAutomate Site Setup ==="
echo "Domain: $DOMAIN"

# ── 1. Clone repository ──────────────────────────────────────────────────────

if [ ! -d "$APP_DIR/.git" ]; then
  mkdir -p "$APP_DIR"
  chown $DEPLOY_USER:$DEPLOY_USER "$APP_DIR"
  sudo -u $DEPLOY_USER git clone "$REPO" "$APP_DIR"
  echo "Repository cloned to $APP_DIR."
else
  echo "Repository already exists at $APP_DIR."
fi

# ── 2. Add Caddy site block ──────────────────────────────────────────────────

if grep -q "$DOMAIN" /etc/caddy/Caddyfile 2>/dev/null; then
  echo "Caddy already configured for $DOMAIN — skipping."
else
  cat >> /etc/caddy/Caddyfile <<CADDYEOF

$DOMAIN {
    reverse_proxy localhost:3090

    header {
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        Referrer-Policy strict-origin-when-cross-origin
        -Server
    }

    log {
        output file /var/log/caddy/ideautomate-access.log {
            roll_size 50mb
            roll_keep 5
        }
    }
}
CADDYEOF

  systemctl reload caddy
  echo "Caddy configured for $DOMAIN → localhost:3090."
fi

echo ""
echo "=== Setup complete! ==="
echo ""
echo "Next steps:"
echo "  1. Point DNS: A record for $DOMAIN → $(curl -s4 ifconfig.me)"
echo "  2. Deploy: sudo -u $DEPLOY_USER bash $APP_DIR/deploy/deploy.sh"
echo ""
