#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT trycamel.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE trycamel.com" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains trycamel.com,www.trycamel.com,beta.trycamel.com \
  --email john@trycamel.com
