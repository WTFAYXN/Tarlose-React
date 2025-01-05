const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { SitemapStream } = require('sitemap');
const { streamToPromise } = require('./node_modules/sitemap/dist/index');
const connectDB = require('./src/db'); // Import the connectDB function

// Load environment variables from .env file
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});