// Vite plugin to pre-render meta tags for social media crawlers
import { readFileSync } from 'fs';
import { join } from 'path';

export default function htmlMetaTagsPlugin() {
  return {
    name: 'html-meta-tags',
    transformIndexHtml: {
      order: 'pre',
      handler(html, { path }) {
        // Clean up path - remove /index.html, ensure it starts with /
        let cleanPath = path.replace('/index.html', '').replace('index.html', '');
        if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
        if (cleanPath === '//') cleanPath = '/';
        
        // Skip blog routes - they will use SSI for dynamic meta tags
        if (cleanPath.startsWith('/blog/') || cleanPath === '/blog') {
          return html; // Don't inject meta tags for blog pages
        }
        
        // Default meta tags for all pages
        let metaTags = `
    <!-- SEO Meta Tags -->
    <meta name="description" content="Tarlose delivers innovative digital solutions through expert design, development and strategic services. Transform your business with our cutting-edge technology and creative expertise." />
    <link rel="canonical" href="https://www.tarlose.com${cleanPath}" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tarlose.com${cleanPath}" />
    <meta property="og:title" content="Tarlose - Digital Solutions for Modern Businesses" />
    <meta property="og:description" content="Transform your business with cutting-edge digital solutions from Tarlose. Expert design, development and strategic services tailored for modern enterprises." />
    <meta property="og:image" content="https://www.tarlose.com/assets/Logos/twitterImg.png" />
    <meta property="og:site_name" content="Tarlose" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@tarlose" />
    <meta name="twitter:url" content="https://www.tarlose.com${cleanPath}" />
    <meta name="twitter:title" content="Tarlose - Digital Solutions for Modern Businesses" />
    <meta name="twitter:description" content="Transform your business with cutting-edge digital solutions from Tarlose. Expert design, development and strategic services tailored for modern enterprises." />
    <meta name="twitter:image" content="https://www.tarlose.com/assets/Logos/twitterImg.png" />`;

        // Page-specific meta tags
        const pageMetadata = {
          '/about': {
            title: 'About Tarlose - Your Digital Transformation Partner',
            description: "Learn about Tarlose's mission to deliver innovative digital solutions. Meet our team and discover how we help businesses thrive in the digital age.",
          },
          '/services': {
            title: 'Our Services - Tarlose Digital Solutions',
            description: "Explore Tarlose's comprehensive digital services including web development, app development, UI/UX design, and digital marketing solutions.",
          },
          '/portfolio': {
            title: 'Portfolio - Tarlose Projects & Case Studies',
            description: "Discover our portfolio of successful digital projects and see how we've helped businesses achieve their goals through innovative solutions.",
          },
          '/contact': {
            title: 'Contact Us - Get in Touch with Tarlose',
            description: 'Ready to transform your business? Contact Tarlose today to discuss your digital project and discover how we can help you succeed.',
          },
          '/careers': {
            title: 'Careers at Tarlose - Join Our Team',
            description: 'Explore career opportunities at Tarlose. Join our team of talented professionals and help shape the future of digital innovation.',
          },
          '/blog': {
            title: 'Tarlose Blog - Digital Insights & Technology Trends',
            description: 'Stay updated with the latest digital trends, technology insights, and industry best practices from Tarlose experts.',
          },
        };

        // Check if current path has custom metadata
        const matchedPath = Object.keys(pageMetadata).find(key => cleanPath.startsWith(key));
        
        if (matchedPath) {
          const meta = pageMetadata[matchedPath];
          metaTags = `
    <!-- SEO Meta Tags -->
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="https://www.tarlose.com${cleanPath}" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tarlose.com${cleanPath}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="https://www.tarlose.com/assets/Logos/twitterImg.png" />
    <meta property="og:site_name" content="Tarlose" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@tarlose" />
    <meta name="twitter:url" content="https://www.tarlose.com${cleanPath}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="https://www.tarlose.com/assets/Logos/twitterImg.png" />`;
        }

        // Inject meta tags into <head>
        return html.replace(
          '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
          `<meta name="viewport" content="width=device-width, initial-scale=1.0" />${metaTags}`
        );
      },
    },
  };
}
