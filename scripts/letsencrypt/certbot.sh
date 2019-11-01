#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
  --manual-auth-hook "./auth-hook.sh UPSERT cloudfile.dev" \
  --manual-cleanup-hook "./auth-hook.sh DELETE cloudfile.dev" \
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
  --domains cloudfile.dev,www.cloudfile.dev,beta.cloudfile.dev,merchant.cloudfile.dev \
  --email john@cloudfile.dev
