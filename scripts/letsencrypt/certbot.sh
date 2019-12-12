#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT warkphone.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE warkphone.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains warkphone.com,www.warkphone.com,beta.warkphone.com,merchant.warkphone.com \
  --email john@warkphone.com
