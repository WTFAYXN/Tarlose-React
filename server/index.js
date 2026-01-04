import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { SitemapStream } from 'sitemap';
import { streamToPromise } from '../server/node_modules/sitemap/dist/index.js';
import connectDB from './src/db.js';
import metaRoutes from './src/routes/meta.js';
import blogRoutes from './src/routes/blog.js';
import contactRoutes from './src/routes/contact.js';
import serviceRoutes from './src/routes/service.js';
import Blog from './src/models/blog.js';
import Service from './src/models/services.js';

// Load environment variables from .env file FIRST
dotenv.config({ path: '.env' });

// Debug: Check if email credentials are loaded
// console.log('Email User:', process.env.EMAIL_USER ? '✓ Loaded' : '✗ Missing');
// console.log('Email Pass:', process.env.EMAIL_PASS ? '✓ Loaded' : '✗ Missing');

const url = process.env.FRONTEND_URL;

connectDB();

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
    origin: [`${url}`, 'http://localhost:5173', 'https://www.tarlose.com', 'https://tarlose.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array of URLs to be included in the sitemap
// Note: Dynamic routes (blog detail, service slugs) will be fetched from DB
const staticUrls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  // { url: '/portfolio', changefreq: 'weekly', priority: 0.7 },
  { url: '/terms-of-service', changefreq: 'monthly', priority: 0.5 },
  { url: '/blogs', changefreq: 'daily', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  // { url: '/login', changefreq: 'monthly', priority: 0.2 },
];

// Route to serve the sitemap with dynamic content from DB
app.get('/sitemap.xml', async (req, res) => {
  try {
    // Use environment variable or default to production URL
    const baseUrl = process.env.SITE_URL || 'https://tarlose.com';
    console.log(`🌐 Generating sitemap for: ${baseUrl}`);
    
    // Create a writable stream
    const sitemap = new SitemapStream({ hostname: baseUrl });

    // Add static URLs
    staticUrls.forEach(url => sitemap.write(url));

    // Fetch and add blog posts dynamically
    try {
      // Try without filter first to see all blogs
      const allBlogs = await Blog.find().select('slug published updatedAt').lean();
      console.log(`📊 Total blogs in database: ${allBlogs.length}`);
      console.log(`📊 Published blogs: ${allBlogs.filter(b => b.published).length}`);
      
      // Get only published blogs
      const blogs = await Blog.find({ published: true }).select('slug updatedAt').lean();
      
      blogs.forEach(blog => {
        if (blog.slug) {
          sitemap.write({
            url: `/blog/${blog.slug}`,
            changefreq: 'weekly',
            priority: 0.6,
            lastmod: blog.updatedAt ? new Date(blog.updatedAt).toISOString() : undefined
          });
        }
      });
      console.log(`✅ Added ${blogs.length} blog posts to sitemap`);
    } catch (blogError) {
      console.error('⚠️ Error fetching blogs for sitemap:', blogError.message);
      console.error('Full error:', blogError);
    }

    // Fetch and add service pages dynamically
    try {
      const services = await Service.find().select('serviceSlug updatedAt').lean();
      services.forEach(service => {
        if (service.serviceSlug) {
          sitemap.write({
            url: `/services/${service.serviceSlug}`,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: service.updatedAt ? new Date(service.updatedAt).toISOString() : undefined
          });
        }
      });
      console.log(`✅ Added ${services.length} service pages to sitemap`);
    } catch (serviceError) {
      console.error('⚠️ Error fetching services for sitemap:', serviceError.message);
    }

    // End the stream and send the sitemap as response
    sitemap.end();
    const sitemapXML = await streamToPromise(sitemap);
    
    // Set proper headers for XML
    res.header('Content-Type', 'application/xml; charset=utf-8');
    res.header('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.send(sitemapXML.toString());
    
    console.log(`✅ Sitemap generated successfully with ${staticUrls.length} static URLs`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    console.error('Stack trace:', error.stack);
    res.status(500).set('Content-Type', 'text/plain').send('Error generating sitemap: ' + error.message);
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/meta', metaRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});