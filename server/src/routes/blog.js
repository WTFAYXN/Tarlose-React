const router = express.Router();
import express from 'express';
import multer from 'multer';
import path from 'path';
import Blog from '../models/blog.js';
import BlogView from '../models/blogView.js';
import { fileURLToPath } from 'url';

const API_URL = process.env.API_URL || 'http://localhost:5000';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads/'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Helper function to get user identifier
const getUserIdentifier = (req) => {
    const forwardedFor = req.headers['x-forwarded-for'];
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }
    return req.ip || req.connection.remoteAddress;
};

// Create a new blog post
router.post('/', upload.single('featuredImage'), async (req, res) => {
    try {
        const blogData = {
            ...req.body,
            featuredImage: req.file ? {
                url: `/uploads/${req.file.filename}`,
                altText: req.body.title
            } : undefined,
            categories: req.body.categories ? req.body.categories.split(',') : [],
            tags: req.body.tags ? req.body.tags.split(',') : [],
            metaKeywords: req.body.metaKeywords ? req.body.metaKeywords.split(',') : []
        };

        const blog = new Blog(blogData);
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all blog posts
router.get('/', async (req, res) => {
    try {
        const { search } = req.query;
        let query = { published: true }; // Only return published blogs
        
        // If search parameter exists, create a search query
        if (search) {
            query = {
                published: true,
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { content: { $regex: search, $options: 'i' } },
                    { excerpt: { $regex: search, $options: 'i' } },
                    { metaDescription: { $regex: search, $options: 'i' } },
                    { categories: { $regex: search, $options: 'i' } }
                ]
            };
        }
        
        const blogs = await Blog.find(query).sort({ publishedAt: -1 });
        // Transform image URLs to include full path
        const blogsWithFullImageUrls = blogs.map(blog => {
            if (blog.featuredImage) {
                return {
                    ...blog.toObject(),
                    featuredImage: {
                        ...blog.featuredImage,
                        url: `${API_URL}${blog.featuredImage.url}`
                    }
                };
            }
            return blog.toObject();
        });
        res.json(blogsWithFullImageUrls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single blog post by slug
router.get('/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Get user identifier
        const userIdentifier = getUserIdentifier(req);

        try {
            // Try to create a new view record
            await BlogView.create({
                blog: blog._id,
                user: userIdentifier
            });

            // If successful (no duplicate), increment the view count
            blog.views += 1;
            await blog.save();
        } catch (error) {
            // If error is due to duplicate view, ignore it
            if (error.code !== 11000) {
                console.error('Error recording view:', error);
            }
        }
        
        // Transform image URL to include full path
        const blogWithFullImageUrl = blog.toObject();
        if (blogWithFullImageUrl.featuredImage) {
            blogWithFullImageUrl.featuredImage.url = `${API_URL}${blogWithFullImageUrl.featuredImage.url}`;
        }
        
        res.json(blogWithFullImageUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Like a blog post
router.put('/:id/like', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Toggle like status
        blog.isLiked = !blog.isLiked;
        blog.likes = blog.isLiked ? (blog.likes || 0) + 1 : Math.max((blog.likes || 0) - 1, 0);
        
        await blog.save();
        
        // Transform image URL to include full path
        const blogWithFullImageUrl = blog.toObject();
        if (blogWithFullImageUrl.featuredImage) {
            blogWithFullImageUrl.featuredImage.url = `${API_URL}${blogWithFullImageUrl.featuredImage.url}`;
        }
        
        res.json(blogWithFullImageUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a comment to a blog post
router.post('/:id/comment', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const comment = {
            comment: req.body.comment,
            user: req.body.user || { name: 'Anonymous' },
            createdAt: new Date()
        };

        blog.comments = blog.comments || [];
        blog.comments.push(comment);
        await blog.save();
        
        // Transform image URL to include full path
        const blogWithFullImageUrl = blog.toObject();
        if (blogWithFullImageUrl.featuredImage) {
            blogWithFullImageUrl.featuredImage.url = `${API_URL}${blogWithFullImageUrl.featuredImage.url}`;
        }
        
        res.json(blogWithFullImageUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a blog post
router.put('/:id', upload.single('featuredImage'), async (req, res) => {
    try {
        const blogData = {
            ...req.body,
            categories: req.body.categories ? req.body.categories.split(',') : [],
            tags: req.body.tags ? req.body.tags.split(',') : [],
            metaKeywords: req.body.metaKeywords ? req.body.metaKeywords.split(',') : []
        };

        if (req.file) {
            blogData.featuredImage = {
                url: `/uploads/${req.file.filename}`,
                altText: req.body.title
            };
        }

        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            blogData,
            { new: true }
        );
        
        // Transform image URL to include full path
        const blogWithFullImageUrl = blog.toObject();
        if (blogWithFullImageUrl.featuredImage) {
            blogWithFullImageUrl.featuredImage.url = `${API_URL}${blogWithFullImageUrl.featuredImage.url}`;
        }
        
        res.json(blogWithFullImageUrl);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a blog post
router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        // Also delete all associated views
        await BlogView.deleteMany({ blog: req.params.id });
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;