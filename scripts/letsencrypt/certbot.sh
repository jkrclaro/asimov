#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT oslerkit.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE oslerkit.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains oslerkit.com,www.oslerkit.com,beta.oslerkit.com,merchant.oslerkit.com \
  --email john@oslerkit.com
