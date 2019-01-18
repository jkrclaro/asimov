# humblepage
Repository for my freelance clients.

# Usage
```
cd humblepage && npm run start
```

# Deploy
```
make deploy
git add . && git commit -m 'Latest build' && git push
rm precache*
```

# Set proper GitHub credentials on new *.github.io
```
git remote set-url origin https://<username>:<password>@github.com/humblepage/humblepage.github.io.git
```