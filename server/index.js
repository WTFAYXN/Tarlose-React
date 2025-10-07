import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { SitemapStream } from 'sitemap';
import { fileURLToPath } from 'url';
import { streamToPromise } from '../server/node_modules/sitemap/dist/index.js';
import connectDB from './src/db.js';
import blogRoutes from './src/routes/blog.js';
import contactRoutes from './src/routes/contact.js';
import serviceRoutes from './src/routes/service.js';
const url = process.env.FRONTEND_URL;

// Load environment variables from .env file
dotenv.config({ path: '.env' });
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
    origin: [`${url}`, 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from uploads directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Array of URLs to be included in the sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/career', changefreq: 'weekly', priority: 0.7 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.7 },
  { url: '/terms', changefreq: 'monthly', priority: 0.5 },
  { url: '/blogs', changefreq: 'daily', priority: 0.8 },
  { url: '/privacy', changefreq: 'monthly', priority: 0.5 }
];

// Route to serve the sitemap
app.get('/sitemap.xml', async (req, res) => {
  try {
    // Create a writable stream
    const sitemap = new SitemapStream({ hostname: 'https://tarlose.com' });

    // Push the URLs into the sitemap
    urls.forEach(url => sitemap.write(url));

    // End the stream and send the sitemap as response
    sitemap.end();
    const sitemapXML = await streamToPromise(sitemap);
    res.header('Content-Type', 'application/xml');
    res.send(sitemapXML.toString());
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/service', serviceRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});