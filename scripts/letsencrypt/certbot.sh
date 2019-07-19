#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT mugtab.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE mugtab.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains mugtab.com,www.mugtab.com,beta.mugtab.com,merchant.mugtab.com \
  --email john@mugtab.com
