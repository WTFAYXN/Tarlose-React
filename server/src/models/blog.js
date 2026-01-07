import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    content: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        trim: true
    },
    featuredImage: {
        url: String,
        altText: String
    },
    author: {
        type: String,
        required: true
    },
    categories: [{
        type: String,
        trim: true
    }],
    tags: [{
        type: String,
        trim: true
    }],
    metaTitle: {
        type: String,
        trim: true
    },
    metaDescription: {
        type: String,
        trim: true
    },
    metaKeywords: [{
        type: String,
        trim: true
    }],
    published: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    },
    comments: [{
        comment: {
            type: String,
            required: true
        },
        user: {
            name: String,
            email: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

// Create slug from title before saving (only if slug not provided)
blogSchema.pre('save', function(next) {
    if (!this.slug || (this.isModified('title') && !this.isModified('slug'))) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
    next();
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
  