import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your backend API URL - use production API for build time
const API_URL = 'https://api.tarlose.com';
const SITE_URL = 'https://www.tarlose.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/Logos/twitterImg.png`;

async function generateServiceHTML() {
  console.log('🚀 Generating service-specific HTML files for social sharing...\n');

  try {
    // 1. Fetch all services from your API
    const response = await fetch(`${API_URL}/api/service`);
    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.statusText}`);
    }
    
    const services = await response.json();
    console.log(`📋 Found ${services.length} services in database\n`);

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
    console.error('❌ Error generating service HTML:', error.message);
    process.exit(1);
  }
}

generateServiceHTML();
