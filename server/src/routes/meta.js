import express from 'express';
import Blog from '../models/blog.js';

const router = express.Router();

// Helper function to escape HTML
const escapeHtml = (text) => {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
};

// Get meta tags for blog share/preview
router.get('/blog/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    
    if (!blog || !blog.published) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const imageUrl = blog.featuredImage?.url || 
      'https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1fdaLBuBELIc9AbULUzoDH%2Ffddea4af5e3d31715ddeeac25e3410f6%2FHow_AI_Can_Help_You_Scale_Multilingual_Support__1_.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1678&h=942&s=96b2356ac8953ce9c6b50439f9e94ce7';

    const metaTags = {
      title: escapeHtml(blog.metaTitle || blog.title),
      description: escapeHtml(blog.metaDescription || blog.excerpt),
      keywords: blog.metaKeywords?.join(", ") || '',
      image: imageUrl,
      url: `https://www.tarlose.com/blog/${blog.slug}`,
      author: escapeHtml(blog.author || "Tarlose"),
      publishedTime: blog.publishedAt || blog.createdAt,
      type: 'article'
    };

    res.json(metaTags);
  } catch (error) {
    console.error('Meta tags error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get HTML snippet with meta tags for nginx SSI
router.get('/blog-html/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    
    if (!blog || !blog.published) {
      return res.status(404).send('');
    }

    const imageUrl = blog.featuredImage?.url || 
      'https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1fdaLBuBELIc9AbULUzoDH%2Ffddea4af5e3d31715ddeeac25e3410f6%2FHow_AI_Can_Help_You_Scale_Multilingual_Support__1_.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1678&h=942&s=96b2356ac8953ce9c6b50439f9e94ce7';

    const htmlSnippet = `<meta property="og:type" content="article" />
<meta property="og:url" content="https://www.tarlose.com/blog/${blog.slug}" />
<meta property="og:title" content="${escapeHtml(blog.metaTitle || blog.title)}" />
<meta property="og:description" content="${escapeHtml(blog.metaDescription || blog.excerpt)}" />
<meta property="og:image" content="${imageUrl}" />
<meta property="og:site_name" content="Tarlose" />
<meta property="article:published_time" content="${blog.publishedAt || blog.createdAt}" />
<meta property="article:author" content="${escapeHtml(blog.author || 'Tarlose')}" />
${blog.categories?.map(cat => `<meta property="article:tag" content="${escapeHtml(cat)}" />`).join('\n') || ''}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.tarlose.com/blog/${blog.slug}" />
<meta name="twitter:title" content="${escapeHtml(blog.metaTitle || blog.title)}" />
<meta name="twitter:description" content="${escapeHtml(blog.metaDescription || blog.excerpt)}" />
<meta name="twitter:image" content="${imageUrl}" />
<meta name="description" content="${escapeHtml(blog.metaDescription || blog.excerpt)}" />
<meta name="keywords" content="${blog.metaKeywords?.join(", ") || ''}" />
<link rel="canonical" href="https://www.tarlose.com/blog/${blog.slug}" />`;

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(htmlSnippet);
  } catch (error) {
    console.error('Meta tags HTML error:', error);
    res.status(500).send('');
  }
});

export default router;
