# Hetzner Server Guide

Server documentation for deploying web projects.

## Server Details

| Property | Value |
|----------|-------|
| Provider | Hetzner Cloud |
| IP Address | `<SERVER_IP>` |
| OS | Ubuntu 22.04 LTS |
| Web Server | Nginx |
| SSL | Let's Encrypt (auto-renewal via certbot) |

## SSH Access

```bash
# Connect to server
ssh <USERNAME>@<SERVER_IP>

# With specific key
ssh -i ~/.ssh/your_key <USERNAME>@<SERVER_IP>
```

## Directory Structure

```
/var/www/
├── yourproject.com/          # Website files
│   ├── index.html
│   ├── styles.css
│   └── ...
└── anotherproject.com/       # Another site (if applicable)
```

## Deployment

### Option 1: rsync (recommended)

```bash
# From your local project's website directory
rsync -avz --progress ./ <USERNAME>@<SERVER_IP>:/var/www/yourproject.com/
```

### Option 2: SCP

```bash
# Copy all files
scp -r * <USERNAME>@<SERVER_IP>:/var/www/yourproject.com/
```

### Option 3: Git-based deployment

```bash
# On server
cd /var/www/yourproject.com
git pull origin main
```

## Nginx Configuration

Config files are located at `/etc/nginx/sites-available/`

### Example site config

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourproject.com www.yourproject.com;

    root /var/www/yourproject.com;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1000;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache static assets
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Clean URLs (serve .html without extension)
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
}
```

### Enable a new site

```bash
# Create config
sudo nano /etc/nginx/sites-available/yourproject.com

# Enable it
sudo ln -s /etc/nginx/sites-available/yourproject.com /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## SSL Setup (Let's Encrypt)

```bash
# Install certbot if not present
sudo apt install certbot python3-certbot-nginx

# Get certificate (auto-configures nginx)
sudo certbot --nginx -d yourproject.com -d www.yourproject.com

# Test auto-renewal
sudo certbot renew --dry-run
```

Certificates auto-renew via systemd timer.

## Common Commands

```bash
# Nginx
sudo systemctl status nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo nginx -t                    # Test config

# View logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Disk usage
df -h
du -sh /var/www/*

# Server resources
htop
free -h
```

## Firewall (UFW)

```bash
# Check status
sudo ufw status

# Allow HTTP/HTTPS (should already be enabled)
sudo ufw allow 'Nginx Full'
```

## Adding a New Project

1. Create directory: `sudo mkdir -p /var/www/newproject.com`
2. Set permissions: `sudo chown -R $USER:$USER /var/www/newproject.com`
3. Create nginx config (copy from existing)
4. Enable site and reload nginx
5. Setup SSL with certbot
6. Deploy files via rsync

## Troubleshooting

### Permission denied on deploy
```bash
sudo chown -R <USERNAME>:<USERNAME> /var/www/yourproject.com
```

### Nginx won't start
```bash
sudo nginx -t    # Check for config errors
sudo journalctl -xe | grep nginx
```

### SSL certificate issues
```bash
sudo certbot certificates    # List all certs
sudo certbot renew --force-renewal -d yourproject.com
```

---

**Note:** Replace `<SERVER_IP>` and `<USERNAME>` with actual values. Store credentials securely (not in git).
