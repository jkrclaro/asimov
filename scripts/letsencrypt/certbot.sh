#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT homelantis.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE homelantis.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains homelantis.com,www.homelantis.com,beta.homelantis.com,merchant.homelantis.com \
  --email john@homelantis.com
