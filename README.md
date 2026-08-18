# Ashcroft Dental House

Cinematic site for [ashcroft.london](https://ashcroft.london).

## Local

```bash
npm install
npm run dev
```

## Production (Contabo)

On the VPS as root, after Node/nginx are installed by the script:

```bash
git clone https://github.com/sjadabd/ashcroft.git /opt/ashcroft
bash /opt/ashcroft/deploy/from-github.sh
```

If the repo is private, clone with a GitHub token:

```bash
git clone https://x-access-token:YOUR_TOKEN@github.com/sjadabd/ashcroft.git /opt/ashcroft
bash /opt/ashcroft/deploy/from-github.sh
```

Later updates:

```bash
bash /opt/ashcroft/deploy/from-github.sh
```
