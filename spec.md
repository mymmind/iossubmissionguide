# **Technical Brief: iOS App Store Review Guide Platform**

## **1\. Project Overview**

**Objective:** Convert a set of static HTML reference guides (The "App Store Review Guide" ecosystem) into a dynamic, full-stack web application. The platform will serve as a hub for iOS developers to find information on submission, rejection, and compliance.

**Core Philosophy:**

1. **High Performance:** The site must load instantly.  
2. **SEO First:** Search Engine Optimization is the primary traffic driver.  
3. **Maintainability:** Content must be managed via a database, not hardcoded HTML.  
4. **Self-Hosted:** The system will be deployed on a private VPS (Virtual Private Server).

## **2\. Technology Stack**

### **Backend (API & Logic)**

* **Runtime:** Node.js  
* **Framework:** **Fastify** (Selected for low overhead and high performance).  
* **Validation:** zod or fluent-json-schema.

### **Database**

* **System:** **PostgreSQL** (Recommended for structured content) OR **SQLite** (if traffic is low/moderate and simplicity is preferred).  
* **ORM:** **Prisma** or **Drizzle ORM** (for type-safe database interactions).

### **Frontend (SEO-Focused)**

* **Framework:** **Astro** (Recommended for content-heavy sites) OR **Next.js**.  
  * *Note:* The frontend must support **Server-Side Rendering (SSR)** or **Static Site Generation (SSG)**. Client-side rendering (SPA) is **not** acceptable due to SEO requirements.  
* **Styling:** **Tailwind CSS** (Match the existing "Apple Human Interface" aesthetic provided in the prototypes).

### **Infrastructure**

* **Containerization:** **Docker** & **Docker Compose**.  
* **Reverse Proxy:** Nginx (for SSL termination and serving static assets).

## **3\. Database Schema (Draft)**

We need a flexible schema to handle the "Hub and Spoke" structure of the guides.

### **Table: articles**

| Column | Type | Description |
| :---- | :---- | :---- |
| id | UUID/Int | Primary Key |
| slug | String | URL-friendly ID (e.g., app-store-connect-guide). Unique. |
| title | String | H1 Title (e.g., "Mastering App Store Connect"). |
| description | Text | Short summary for SEO meta tags and cards. |
| content | Text/JSON | The body content (Markdown or Rich Text). |
| category | String | Grouping (e.g., "Technical", "Legal", "Overview"). |
| published\_at | Timestamp | For sorting and sitemap generation. |
| meta\_keywords | String\[\] | Array of SEO keywords. |

### **Table: related\_articles (Self-Referential)**

* To manage the "Deep Dive" links at the bottom of pages dynamically.  
* source\_article\_id \-\> target\_article\_id

## **4\. Functional Requirements**

### **A. Backend API (Fastify)**

The backend should expose RESTful endpoints for the frontend to consume (or serve templates directly if building a monolith).

* GET /api/articles: List all articles (lightweight, for menus/sitemaps).  
* GET /api/articles/:slug: Retrieve full content \+ metadata for a specific guide.  
* GET /api/sitemap: Return XML data for search engines.

### **B. Frontend Implementation**

The developer must migrate the existing HTML/Tailwind prototypes into components.

1. **Global Layout:**  
   * **Sidebar:** Dynamic navigation based on the database content.  
   * **Mobile Menu:** Responsive hamburger menu (already designed in prototype).  
   * **Footer:** Standard copyright and links.  
2. **Article Renderer:**  
   * Must render the "content" from the DB as semantic HTML.  
   * Must support code blocks, alert boxes (blue/red/yellow tips), and tables as seen in the prototypes.  
3. **SEO Engine (Critical):**  
   * **Dynamic Meta Tags:** Title, Description, and Keywords must pull from the DB.  
   * **Open Graph / Twitter Cards:** Auto-generate meta tags for social sharing.  
   * **Structured Data (JSON-LD):** Automatically inject TechArticle schema into the \<head\> of every article.  
   * **Canonical URLs:** Ensure no duplicate content penalties.

## **5\. Design & Experience Guidelines**

* **Aesthetics:** Strictly adhere to the "Apple Developer" visual style provided in the HTML files (Clean whites, San Francisco/Inter font, extensive whitespace, subtle gray borders).  
* **Responsiveness:** The sidebar must collapse on mobile; the main content must be legible on all viewports.  
* **Performance:**  
  * Target a Google Lighthouse Performance score of 95+.  
  * Use fastify-compress for Gzip/Brotli compression.  
  * Cache static assets aggressively via Nginx.

## **6\. Self-Hosting Deployment Strategy**

Since this is hosted on a private server, the deliverable must include a docker-compose.yml file.

**Sample Docker Structure:**

version: '3.8'  
services:  
  app:  
    build: .  
    ports:  
      \- "3000:3000"  
    environment:  
      \- DATABASE\_URL=postgresql://user:pass@db:5432/guides  
    depends\_on:  
      \- db  
    
  db:  
    image: postgres:15-alpine  
    volumes:  
      \- postgres\_data:/var/lib/postgresql/data

**Developer Handover Checklist:**

1. Source code repository.  
2. Database migration scripts (SQL).  
3. docker-compose.yml for 1-click deployment.  
4. .env.example file with configuration variables.  
5. Basic README instructions for running the server.

## **7\. SEO Content Migration Plan**

* **Hub Page:** / (The main checklist).  
* **Spoke 1:** /connect-guide (App Store Connect).  
* **Spoke 2:** /rejection-guide (Troubleshooting).  
* **Spoke 3:** /legal-compliance (Legal/Privacy).