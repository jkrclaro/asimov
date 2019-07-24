#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT storemecha.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE storemecha.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains storemecha.com,www.storemecha.com,beta.storemecha.com,merchant.storemecha.com \
  --email john@storemecha.com
