#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual \
  --manual-auth-hook "./auth-hook.sh UPSERT spidxr.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE spidxr.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains spidxr.com,www.spidxr.com \
  --email john@spidxr.com
