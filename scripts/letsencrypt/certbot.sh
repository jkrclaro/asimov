#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT healthstruct.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE healthstruct.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains healthstruct.com,www.healthstruct.com,beta.healthstruct.com,merchant.healthstruct.com \
  --email john@healthstruct.com
