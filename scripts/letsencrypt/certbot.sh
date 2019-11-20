#!/bin/bash

# Use Let's Encrypt certbot to order a free certificate
certbot certonly --non-interactive --manual --expand \
<<<<<<< HEAD
  --manual-auth-hook "./auth-hook.sh UPSERT warkphone.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE warkphone.com" \
=======
  --manual-auth-hook "./auth-hook.sh UPSERT sidefone.com" \
  --manual-cleanup-hook "./auth-hook.sh DELETE sidefone.com" \
>>>>>>> Add speech-bubble CSS
  --preferred-challenge dns \
  --config-dir "./letsencrypt" \
  --work-dir "./letsencrypt" \
  --logs-dir "./letsencrypt" \
  --agree-tos \
  --manual-public-ip-logging-ok \
<<<<<<< HEAD
  --domains warkphone.com,www.warkphone.com,beta.warkphone.com,merchant.warkphone.com \
  --email john@warkphone.com
=======
  --domains sidefone.com,www.sidefone.com,beta.sidefone.com,merchant.sidefone.com \
  --email john@sidefone.com
>>>>>>> Add speech-bubble CSS
