import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.tarlose.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/Logos/twitterImg.png`;

// Service data - keep this in sync with Navbar.jsx megaMenuItems
const MOCK_SERVICES = [
  { serviceSlug: 'ecommerce-development', header: { headline: 'Ecommerce Development - Tarlose', intro: 'Create powerful online stores with our expert ecommerce development services.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'lms-development', header: { headline: 'LMS Development - Tarlose', intro: 'Learning Management Systems for education and corporate training.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'coded-development', header: { headline: 'Custom Coded Development - Tarlose', intro: 'Fully coded custom development solutions tailored to your needs.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'no-code-development', header: { headline: 'No-Code Development - Tarlose', intro: 'Fast and efficient no-code website development solutions.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'social-posts', header: { headline: 'Social Media Post Design - Tarlose', intro: 'Eye-catching designs for social media platforms that drive engagement.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'posters-brochures', header: { headline: 'Posters & Brochures Design - Tarlose', intro: 'Print-ready designs for marketing materials that make an impact.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'illustrations', header: { headline: 'Custom Illustrations - Tarlose', intro: 'Unique custom illustration designs for your brand.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'pitch-decks', header: { headline: 'Professional Pitch Decks - Tarlose', intro: 'Investor-ready pitch deck designs that tell your story.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'search-engine-optimization', header: { headline: 'Search Engine Optimization (SEO) - Tarlose', intro: 'Improve search rankings and organic traffic with expert SEO services.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'social-media-management', header: { headline: 'Social Media Management - Tarlose', intro: 'Professional social media management to grow your online presence.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'search-engine-marketing', header: { headline: 'Search Engine Marketing (SEM) - Tarlose', intro: 'Run effective ads to boost search visibility and conversions.', image: DEFAULT_IMAGE } },
  { serviceSlug: 'social-media-marketing', header: { headline: 'Social Media Marketing - Tarlose', intro: 'Drive engagement and sales through targeted social media advertising.', image: DEFAULT_IMAGE } }
];

async function generateServiceHTML() {
  console.log('🚀 Generating service-specific HTML files for social sharing...\n');

  try {
    // Use hardcoded service data (sync with Navbar.jsx)
    const services = MOCK_SERVICES;
    console.log(`📋 Found ${services.length} services\n`);

    // 2. Read the base HTML template
    const distPath = path.join(__dirname, 'dist');
    const baseHtmlPath = path.join(distPath, 'index.html');
    
    if (!fs.existsSync(baseHtmlPath)) {
      throw new Error('dist/index.html not found. Run vite build first!');
    }

    let baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

    // 3. Generate HTML for each service
    for (const service of services) {
      if (!service.serviceSlug) {
        console.warn(`⚠️  Skipping service without slug: ${service._id}`);
        continue;
      }

      const serviceUrl = `${SITE_URL}/services/${service.serviceSlug}`;
      const serviceImage = service.header?.image || DEFAULT_IMAGE;
      const serviceTitle = service.header?.headline || `${service.serviceSlug} - Tarlose`;
      const serviceDescription = service.header?.intro || 'Expert digital services from Tarlose';

      // Create service-specific HTML
      let serviceHtml = baseHtml;

      // Remove existing meta tags (same pattern as main script)
      serviceHtml = serviceHtml.replace(
        /<!-- SEO Meta Tags -->[\s\S]*?(?=<title>)/g,
        ''
      );

      // Replace title
      serviceHtml = serviceHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${serviceTitle}</title>`
      );

      // Build new meta tags
      const metaTags = `
    <!-- SEO Meta Tags -->
    <meta name="description" content="${serviceDescription}" />
    <link rel="canonical" href="${serviceUrl}" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${serviceUrl}" />
    <meta property="og:title" content="${serviceTitle}" />
    <meta property="og:description" content="${serviceDescription}" />
    <meta property="og:image" content="${serviceImage}" />
    <meta property="og:site_name" content="Tarlose" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@tarlose" />
    <meta name="twitter:url" content="${serviceUrl}" />
    <meta name="twitter:title" content="${serviceTitle}" />
    <meta name="twitter:description" content="${serviceDescription}" />
    <meta name="twitter:image" content="${serviceImage}" />
    
    `;

      // Insert meta tags after viewport
      serviceHtml = serviceHtml.replace(
        /(<meta name="viewport"[^>]*>)/,
        `$1${metaTags}`
      );

      // Create folder structure: dist/services/{slug}/index.html
      const serviceFolderPath = path.join(distPath, 'services', service.serviceSlug);
      fs.mkdirSync(serviceFolderPath, { recursive: true });

      const serviceHtmlPath = path.join(serviceFolderPath, 'index.html');
      fs.writeFileSync(serviceHtmlPath, serviceHtml);

      console.log(`✅ Generated: /services/${service.serviceSlug}/index.html`);
    }

    console.log('\n✨ Done! All service-specific HTML files created with proper meta tags.');
    console.log('📤 Deploy the dist/ folder to your server.');
    console.log('✅ Social media bots will now see the correct meta tags for each service!\n');

  } catch (error) {
    // Fail-safe: do not crash the parent build. Log and continue.
    console.error('❌ Error generating service HTML files:', error.message);
    console.log('⚠️  Build will continue without service-specific meta tags.\n');
    return;
  }
}

generateServiceHTML();
