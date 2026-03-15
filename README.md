# Puriva Water — Corporate Website

**Brand:** Puriva Water
**Company:** Sarvorly Beverages Pvt. Ltd.
**Tagline:** The Essence of Pure Life
**Website:** www.purivawater.com

---

## Project Structure

```
puriva-water/
├── index.html          # Homepage (all sections)
├── products.html       # Products page (detailed)
├── distributor.html    # Distributor enquiry page
├── blog.html           # Blog / SEO content page
├── css/
│   └── style.css       # Custom styles, animations
├── js/
│   └── main.js         # All JavaScript (bubbles, counters, forms, etc.)
├── images/             # Add your images here (see below)
└── README.md           # This file
```

---

## Adding Your Images

Save the 4 provided Puriva Water photos to the `images/` folder with these exact filenames:

| File | Description |
|------|-------------|
| `images/gallery-1.jpg` | Two bottles on bridge (daytime, water reflection) |
| `images/gallery-2.jpg` | Two bottles at sunset/dusk by water |
| `images/gallery-3.jpg` | Hand holding bottle at sunset |
| `images/gallery-4.jpg` | Vendor stall with bottles displayed |
| `images/logo.png` | Puriva Water logo (optional — text logo shown if missing) |
| `images/hero-bg.jpg` | Optional hero background image |
| `images/og-image.jpg` | Social media share image (1200×630) |

---

## Features Included

- ✅ Loading screen with brand animation
- ✅ Sticky navbar with scroll effect
- ✅ Scroll progress indicator bar
- ✅ Hero with animated water bubbles (canvas-free CSS)
- ✅ Floating SVG water bottle hero illustration
- ✅ Stats counter animation (triggered on scroll)
- ✅ Animated sections on scroll (AOS library)
- ✅ 5 product cards with hover effects
- ✅ 5-step purification process
- ✅ 6 feature cards (Why Choose Puriva)
- ✅ Gallery with lightbox click-to-zoom
- ✅ Testimonials section
- ✅ Contact form with WhatsApp link
- ✅ Google Maps embed
- ✅ Distributor CTA section
- ✅ Newsletter signup form
- ✅ Floating WhatsApp button with pulse animation
- ✅ Back-to-top button
- ✅ Mobile-responsive hamburger menu
- ✅ Gallery image hover overlay
- ✅ SEO meta tags on all pages
- ✅ Active nav link highlighting on scroll
- ✅ Footer with all links, social icons, contact

**Extra Pages:**
- ✅ Products page (detailed per-product showcase)
- ✅ Distributor enquiry page with application form
- ✅ Blog page (6 articles + newsletter)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| Tailwind CSS (CDN Play) | Utility-first styling |
| Custom CSS (`css/style.css`) | Animations, effects, hover states |
| Vanilla JavaScript (`js/main.js`) | Interactivity |
| AOS (Animate on Scroll) | Scroll animations |
| Font Awesome 6 | Icons |
| Google Fonts (Poppins + Inter) | Typography |

---

## Deployment Options

### Option 1: Open Directly (Zero Setup)
Just double-click `index.html` in a file explorer. No server needed.

### Option 2: Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://localhost:5500`

### Option 3: Simple HTTP Server
```bash
# Python 3
cd puriva-water
python -m http.server 8080
# Open: http://localhost:8080

# Node.js (npx)
npx serve .
```

### Option 4: GitHub Pages (Free Hosting)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages → Source: `main` branch
4. Your site will be live at `https://yourusername.github.io/puriva-water/`

### Option 5: Netlify (Recommended Free Hosting)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `puriva-water` folder
3. Get a free URL instantly (e.g. `puriva-water.netlify.app`)
4. Connect a custom domain (`www.purivawater.com`)

### Option 6: Vercel
```bash
npm i -g vercel
cd puriva-water
vercel
```

---

## Custom Domain Setup (purivawater.com)

After deploying to Netlify or Vercel:
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Update DNS:
   - **A Record:** `@` → your host's IP
   - **CNAME:** `www` → your deployment URL
3. Enable HTTPS (free SSL via Let's Encrypt)

---

## SEO Checklist

- [x] Meta title & description on all pages
- [x] Open Graph tags (social sharing)
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Semantic HTML (h1, h2, section, nav, footer)
- [x] Alt text on all images
- [x] Mobile-responsive (Google Mobile-First)
- [ ] Add `sitemap.xml` (generate at xml-sitemaps.com)
- [ ] Add `robots.txt`
- [ ] Register on Google Search Console
- [ ] Add Google Analytics tracking code

---

## Contact

**Sarvorly Beverages Pvt. Ltd.**
Panchamukhi Vihar, Balianta, Khordha, Odisha, India

📞 +91 8339066472
📞 +91 9337324580
📧 purivawater@gmail.com
🌐 www.purivawater.com
📱 @purivawater (all social platforms)

---

© 2026 Puriva Water | Sarvorly Beverages Pvt. Ltd. All rights reserved.
