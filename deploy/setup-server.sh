#!/usr/bin/env bash
# Run on the Contabo VPS as root after the site files are in /var/www/ashcroft.london
set -euo pipefail

apt-get update -y
apt-get install -y nginx

mkdir -p /var/www/ashcroft.london
chown -R www-data:www-data /var/www/ashcroft.london

install -m 644 /root/ashcroft-nginx.conf /etc/nginx/sites-available/ashcroft.london
ln -sfn /etc/nginx/sites-available/ashcroft.london /etc/nginx/sites-enabled/ashcroft.london
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl enable nginx
systemctl reload nginx

if ! command -v certbot >/dev/null 2>&1; then
  apt-get install -y certbot python3-certbot-nginx
fi

if curl -fsS --max-time 10 http://127.0.0.1 >/dev/null; then
  certbot --nginx -d ashcroft.london -d www.ashcroft.london --non-interactive --agree-tos -m bubblelmass@gmail.com --redirect || true
fi

echo "Site is live on http://ashcroft.london"
