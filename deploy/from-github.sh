#!/usr/bin/env bash
# Run as root on the Contabo VPS after the repo is on GitHub:
#   bash deploy/from-github.sh
# or:
#   curl -fsSL https://raw.githubusercontent.com/sjadabd/ashcroft/main/deploy/from-github.sh | bash
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/sjadabd/ashcroft.git}"
if [[ -n "${GITHUB_TOKEN:-}" ]]; then
  REPO_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/sjadabd/ashcroft.git"
fi
APP_DIR="${APP_DIR:-/opt/ashcroft}"
WEB_ROOT="${WEB_ROOT:-/var/www/ashcroft.london}"
DOMAIN="${DOMAIN:-ashcroft.london}"
EMAIL="${EMAIL:-bubblelmass@gmail.com}"

export DEBIAN_FRONTEND=noninteractive

apt-get update -y
apt-get install -y git nginx curl ca-certificates gnupg certbot python3-certbot-nginx

if ! command -v node >/dev/null 2>&1 || ! node -v | grep -qE 'v(1[89]|2[0-9])'; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

if [[ -d "${APP_DIR}/.git" ]]; then
  git -C "${APP_DIR}" fetch origin
  git -C "${APP_DIR}" reset --hard origin/main
else
  rm -rf "${APP_DIR}"
  git clone --depth 1 "${REPO_URL}" "${APP_DIR}"
fi

cd "${APP_DIR}"
npm ci
npm run build

mkdir -p "${WEB_ROOT}"
find "${WEB_ROOT}" -mindepth 1 -delete
cp -a dist/. "${WEB_ROOT}/"
chown -R www-data:www-data "${WEB_ROOT}"

install -m 644 "${APP_DIR}/deploy/nginx.conf" /etc/nginx/sites-available/"${DOMAIN}"
ln -sfn /etc/nginx/sites-available/"${DOMAIN}" /etc/nginx/sites-enabled/"${DOMAIN}"
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl enable nginx
systemctl reload nginx

if certbot certificates 2>/dev/null | grep -q "${DOMAIN}"; then
  echo "TLS already issued for ${DOMAIN}"
else
  certbot --nginx -d "${DOMAIN}" -d "www.${DOMAIN}" --non-interactive --agree-tos -m "${EMAIL}" --redirect || true
fi

echo "Deployed ${DOMAIN} from ${REPO_URL}"
