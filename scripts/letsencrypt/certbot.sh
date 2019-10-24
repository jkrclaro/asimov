#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT customerable.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE customerable.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains customerable.com,www.customerable.com,beta.customerable.com,merchant.customerable.com \
  --email john@customerable.com
