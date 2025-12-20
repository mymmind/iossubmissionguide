# App Store Pass - Developer & Content Guide

Welcome! This guide is designed to help you understand, run, and maintain the App Store Pass project. Whether you are updating article content, fixing a bug, or adding a new feature, this document covers the essentials.

---

## 1. Tech Stack Overview

This project is built with a modern web stack:

*   **Frontend**: [Astro](https://astro.build/) (v5) + [Tailwind CSS](https://tailwindcss.com/)
    *   *Why?* Extremely fast static site generation (SSG) with dynamic capabilities.
*   **Backend**: [Fastify](https://fastify.io/) (Node.js)
    *   *Why?* High-performance API server.
*   **Database**: [PostgreSQL](https://www.postgresql.org/) + [Prisma ORM](https://www.prisma.io/)
    *   *Why?* robust relational database with a great developer experience (Prisma).
*   **Admin Panel**: [AdminJS](https://adminjs.co/)
    *   *Why?* Auto-generated admin interface for managing database records.

---

## 2. Prerequisites

Before you start, ensure you have the following installed:

1.  **Node.js**: v18 or higher (v20+ recommended).
2.  **npm**: Comes with Node.js.
3.  **PostgreSQL**: You can run this locally or use a cloud provider (e.g., Supabase, Neon).
4.  **Visual Studio Code** (Recommended): Great TypeScript support.

---

## 3. Project Structure

```bash
.
├── backend/                # The API server
│   ├── prisma/             # Database schema and migrations
│   ├── src/                # Server source code (routes, server.ts)
│   └── package.json
├── frontend/               # The Astro website
│   ├── public/             # Static assets (images, icons)
│   ├── src/
│   │   ├── components/     # Reusable UI parts (Sidebar, Header)
│   │   ├── layouts/        # Page wrappers (Layout.astro)
│   │   ├── pages/          # URL routes (index.astro, [slug].astro)
│   │   └── styles/         # Global CSS (Tailwind)
│   └── package.json
├── scripts/                # Utility scripts (e.g., content seeding)
└── package.json            # Root configuration
```

---

## 4. Quick Start: Running the Project

### 1. Install Dependencies
Open your terminal in the root folder and run:
```bash
npm install
# Then install backend/frontend specific deps
cd backend && npm install
cd ../frontend && npm install
```

### 2. Configure Environment Variables
You need a `.env.local` file in the **root** directory. It should look like this:

```env
# Database Connection (Postgres)
DATABASE_URL="postgresql://user:password@localhost:5432/appstore_guides"

# Stripe (for payments) - Test keys are fine for dev
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Frontend Config
FRONTEND_URL=http://localhost:3000

# Admin Panel Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password123
SESSION_SECRET=a-very-long-secret-at-least-32-chars
```

### 3. Setup the Database
```bash
# Push the schema to your database
npx prisma db push

# Generate the Prisma Client
npx prisma generate
```

### 4. Run the Servers
You typically need three terminal tabs:

**Tab 1: Backend**
```bash
cd backend
npm run dev
# Runs on localhost:3005
```

**Tab 2: Frontend**
```bash
cd frontend
npm run dev
# Runs on localhost:3000
```

---

## 5. Updating Website Content

The content (articles) lives in the database. There are two ways to update it:

### Method A: The "Seed" Script (Recommended for Big Updates)
We often write content in raw HTML files (like `content.html`) and then "seed" (import) it into the database. This is great for version controlling your content.

1.  **Edit the HTML**: Open `content.html` in the root folder.
2.  **Make Changes**: Edit the text, headings (`<h1>`, `<h2>`), or structure.
3.  **Run the Seed Script**:
    ```bash
    # This script reads content.html and updates the database
    npm run db:seed
    ```
4.  **Preview**: Restart your frontend or refresh the page to see changes.

**File to watch**: `scripts/seed-content.ts`. This file controls *how* the HTML is parsed. If you change the HTML structure drastically (e.g., move the sidebar), you might need to update the logic here.

### Method B: The Admin Panel (Quick Fixes)
For typos or small tweaks:

1.  Start the backend (`cd backend && npm run dev`).
2.  Go to `http://localhost:3005/admin`.
3.  Login with credentials from `.env.local`.
4.  Navigate to the `Articles` resource.
5.  Edit the content directly using the rich text editor.

---

## 6. Working on the Frontend

### Modifying Styles
We use Tailwind CSS.
*   **Global Styles**: `frontend/src/styles/globals.css`. Here you define custom colors (like `--color-apple-blue`) and component classes.
*   **Page Layout**: `frontend/src/layouts/Layout.astro`. This wraps every page (contains `<head>`, metadata, scripts).
*   **Sidebar**: `frontend/src/components/Sidebar.astro`. Controls the navigation menu.

### Adding a New Page
1.  **Static Page**: Create a file in `frontend/src/pages/newpage.astro`. It will be accessible at `/newpage`.
2.  **Dynamic Article**: Add a new article to the database (via Admin or Seed). The `[slug].astro` file handles rendering any article that exists in the DB.

### Troubleshooting "Missing Styles"
If you add a new CSS class but don't see it:
1.  Stop the frontend server.
2.  Run `npm run build` inside `frontend/` to force a rebuild.
3.  Restart `npm run dev`.

---

## 7. Troubleshooting

*   **Process 'prisma' is not recognized**: Make sure you ran `npm install`. Try using `npx prisma`.
*   **Database Error**: Check your `DATABASE_URL` in `.env.local`. Ensure your Postgres server is running.
*   **Frontend can't connect to Backend**: Ensure the backend is running on port 3005. Check the browser console network tab.
*   **Styles look broken**:
    *   Check if `tailwind.config.mjs` is correctly set up.
    *   Ensure your HTML files are being scanned by Tailwind (add any new paths to `content` in config).

---

## 8. Deployment Checklist

When you are ready to go live:
1.  **Database**: efficient Postgres hosting (e.g., Neon, Supabase).
2.  **Backend**: Deploy to a Node.js host (Render, Railway, Heroku). Set `NODE_ENV=production`.
3.  **Frontend**: Deploy to a static host (Vercel, Netlify). Connect it to your Git repo.
4.  **Environment Variables**: securely copy all variables from `.env.local` to your hosting provider's dashboard.

Happy Coding! 🚀
