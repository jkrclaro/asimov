#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT scrapebug.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE scrapebug.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains scrapebug.com,www.scrapebug.com,beta.scrapebug.com,merchant.scrapebug.com \
  --email john@scrapebug.com
