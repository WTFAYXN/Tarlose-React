const mongoose = require('mongoose');

const blogViewSchema = new mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    user: {
        type: String,  // We'll use IP address as a unique identifier
        required: true
    },
    viewedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Create a compound index to ensure one view per user per blog
blogViewSchema.index({ blog: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('BlogView', blogViewSchema); 