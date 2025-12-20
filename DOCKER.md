# Deployment Guide (Docker)

This guide explains how to deploy the **iOS Submission Guide** platform using Docker.

## Prerequisites

- A VPS (Ubuntu recommended) with **Docker** and **Docker Compose** installed.
- A domain name (e.g., `appstorepass.com`).

## 1. Setup Environment Variables

Create a `.env` file in the root directory:

```env
# Database
POSTGRES_USER=appstore
POSTGRES_PASSWORD=your_secure_password
POSTGRES_DB=appstore_guides

# Admin Auth
ADMIN_EMAIL=hi@sieggg.com
ADMIN_PASSWORD=your_secure_password
SESSION_SECRET=a_very_long_random_string_here

# URLs
SITE_URL=https://appstorepass.com
NEXT_PUBLIC_API_URL=https://api.appstorepass.com
```

## 2. Launch the Stack

Run the following command to build and start the containers:

```bash
docker-compose up -d --build
```

This will launch:
- **Web (Astro)**: Port 3000
- **API (Fastify)**: Port 3005
- **Database (Postgres)**: Internal Port 5432

## 3. Reverse Proxy Configuration

You should use Nginx or Caddy to proxy traffic to the containers.

### Example Nginx Config:

```nginx
# Frontend
server {
    server_name appstorepass.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}

# Backend / API / Admin
server {
    server_name api.appstorepass.com;
    location / {
        proxy_pass http://localhost:3005;
    }
}
```

## 4. Managing Content

1. Access the CMS at `https://api.appstorepass.com/admin`.
2. After making changes, you may need to rebuild the `web` container to update the static pages:
   ```bash
   docker-compose restart web
   ```
   *(Note: For real-time updates without rebuilding, we can switch Astro to "Server" mode in the config.)*

## 5. Backups

Database volumes are stored in `postgres_data`. To backup:
```bash
docker exec -t appstore_db pg_dumpall -c -U appstore > dump_$(date +%Y-%m-%d).sql
```
