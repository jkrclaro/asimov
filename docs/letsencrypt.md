# LetsEncrypt

Best guide: https://hackernoon.com/easy-lets-encrypt-certificates-on-aws-79387767830b

# Guide

1) Modify `certbot.sh` to use right domain.

2) Create an AWS Route 53 with the domain.

3) Run `./certbot.sh`

4) Go to `AWS Certificate Manager` and `Import a Certificate`

5)  
- For `Certificate Body`, paste content of `scripts/letsencrypt/live/domain.com/cert.pem`
- For `Certificate private key`, paste content of `scripts/letsencrypt/live/domain.com/privkey.pem`
- For `Certificate chain`, paste content of `scripts/letsencrypt/live/domain.com/chain.pem`
