// Post-build script to generate route-specific HTML files with proper meta tags
// This creates proper HTML files for each route that social media bots can read
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, 'dist');
const indexPath = join(distPath, 'index.html');

// Read the base index.html
let baseHtml = readFileSync(indexPath, 'utf-8');

// Define meta tags for each route
const routes = {
  'about': {
    title: 'About Tarlose - Your Digital Transformation Partner',
    description: "Learn about Tarlose's mission to deliver innovative digital solutions. Meet our team and discover how we help businesses thrive in the digital age.",
    url: 'https://www.tarlose.com/about',
  },
  'services': {
    title: 'Our Services - Tarlose Digital Solutions',
    description: "Explore Tarlose's comprehensive digital services including web development, app development, UI/UX design, and digital marketing solutions.",
    url: 'https://www.tarlose.com/services',
  },
  'portfolio': {
    title: 'Portfolio - Tarlose Projects & Case Studies',
    description: "Discover our portfolio of successful digital projects and see how we've helped businesses achieve their goals through innovative solutions.",
    url: 'https://www.tarlose.com/portfolio',
  },
  'contact': {
    title: 'Contact Us - Get in Touch with Tarlose',
    description: 'Ready to transform your business? Contact Tarlose today to discuss your digital project and discover how we can help you succeed.',
    url: 'https://www.tarlose.com/contact',
  },
  'careers': {
    title: 'Careers at Tarlose - Join Our Team',
    description: 'Explore career opportunities at Tarlose. Join our team of talented professionals and help shape the future of digital innovation.',
    url: 'https://www.tarlose.com/careers',
  },
  'blog': {
    title: 'Tarlose Blog - Digital Insights & Technology Trends',
    description: 'Stay updated with the latest digital trends, technology insights, and industry best practices from Tarlose experts.',
    url: 'https://www.tarlose.com/blog',
  },
};

// Generate HTML with custom meta tags
function generateHtmlWithMeta(route, metadata) {
  const metaTags = `
    <!-- SEO Meta Tags -->
    <meta name="description" content="${metadata.description}" />
    <link rel="canonical" href="${metadata.url}" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${metadata.url}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:image" content="https://www.tarlose.com/assets/Logos/twitterImg.png" />
    <meta property="og:site_name" content="Tarlose" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@tarlose" />
    <meta name="twitter:url" content="${metadata.url}" />
    <meta name="twitter:title" content="${metadata.title}" />
    <meta name="twitter:description" content="${metadata.description}" />
    <meta name="twitter:image" content="https://www.tarlose.com/assets/Logos/twitterImg.png" />`;

  let html = baseHtml;

  // Replace existing meta tags (from Vite plugin) with route-specific ones
  // Remove old meta tags first
  html = html.replace(/<!-- SEO Meta Tags -->[\s\S]*?(?=<!-- Twitter Card Meta Tags -->)<!-- Twitter Card Meta Tags -->[\s\S]*?(?=<title>)/g, '');
  
  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${metadata.title}</title>`
  );

  // Insert new meta tags after viewport
  html = html.replace(
    /<meta name="viewport"[^>]*>/,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />${metaTags}\n    `
  );

  return html;
}

// Generate HTML files for each route
console.log('🚀 Generating route-specific HTML files for social sharing...\n');

Object.entries(routes).forEach(([route, metadata]) => {
  const html = generateHtmlWithMeta(route, metadata);
  
  // Create folder for each route
  const routePath = join(distPath, route);
  if (!existsSync(routePath)) {
    mkdirSync(routePath, { recursive: true });
  }
  
  // Write index.html in the route folder
  const outputPath = join(routePath, 'index.html');
  writeFileSync(outputPath, html, 'utf-8');
  console.log(`✅ Generated: /${route}/index.html`);
});

console.log('\n✨ Done! All route-specific HTML files created with proper meta tags.');
console.log('\n📤 Deploy the dist/ folder to your server.');
console.log('✅ Social media bots will now see the correct meta tags for each page!\n');
