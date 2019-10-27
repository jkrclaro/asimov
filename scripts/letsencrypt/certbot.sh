#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT staticfile.io" \
  --manual-cleanup-hook "./auth-hook.sh DELETE staticfile.io" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains staticfile.io,www.staticfile.io,beta.staticfile.io,merchant.staticfile.io \
  --email john@staticfile.io
