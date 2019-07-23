#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT selfcarto.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE selfcarto.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains selfcarto.com,www.selfcarto.com,beta.selfcarto.com,merchant.selfcarto.com \
  --email john@selfcarto.com
