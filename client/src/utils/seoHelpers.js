// SEO and Open Graph Helper Functions

/**
 * Get the full absolute URL for images
 * @param {string} imagePath - Relative or absolute image path
 * @returns {string} Full absolute URL
 */
export const getAbsoluteImageUrl = (imagePath) => {
  if (!imagePath) return 'https://www.tarlose.com/assets/Logos/twitterImg.png';
  
  // If already absolute URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If starts with /, it's a relative path from root
  if (imagePath.startsWith('/')) {
    return `https://www.tarlose.com${imagePath}`;
  }
  
  // If it's just a filename or relative path
  return `https://www.tarlose.com/${imagePath}`;
};

/**
 * Default Open Graph image
 */
export const DEFAULT_OG_IMAGE = 'https://www.tarlose.com/assets/Logos/twitterImg.png';

/**
 * Get page-specific metadata
 */
export const getPageMetadata = (pageName) => {
  const metadata = {
    home: {
      title: 'Tarlose - Digital Solutions for Modern Businesses',
      description: 'Transform your business with cutting-edge digital solutions from Tarlose. Expert design, development and strategic services tailored for modern enterprises.',
      url: 'https://www.tarlose.com',
      image: DEFAULT_OG_IMAGE
    },
    about: {
      title: 'About Tarlose - Your Digital Transformation Partner',
      description: 'Learn about Tarlose\'s mission to deliver innovative digital solutions. Meet our team and discover how we help businesses thrive in the digital age.',
      url: 'https://www.tarlose.com/about',
      image: DEFAULT_OG_IMAGE
    },
    services: {
      title: 'Our Services - Tarlose Digital Solutions',
      description: 'Explore Tarlose\'s comprehensive digital services including web development, app development, UI/UX design, and digital marketing solutions.',
      url: 'https://www.tarlose.com/services',
      image: DEFAULT_OG_IMAGE
    },
    portfolio: {
      title: 'Portfolio - Tarlose Projects & Case Studies',
      description: 'Discover our portfolio of successful digital projects and see how we\'ve helped businesses achieve their goals through innovative solutions.',
      url: 'https://www.tarlose.com/portfolio',
      image: DEFAULT_OG_IMAGE
    },
    contact: {
      title: 'Contact Us - Get in Touch with Tarlose',
      description: 'Ready to transform your business? Contact Tarlose today to discuss your digital project and discover how we can help you succeed.',
      url: 'https://www.tarlose.com/contact',
      image: DEFAULT_OG_IMAGE
    },
    careers: {
      title: 'Careers at Tarlose - Join Our Team',
      description: 'Explore career opportunities at Tarlose. Join our team of talented professionals and help shape the future of digital innovation.',
      url: 'https://www.tarlose.com/careers',
      image: DEFAULT_OG_IMAGE
    },
    blog: {
      title: 'Tarlose Blog - Digital Insights & Technology Trends',
      description: 'Stay updated with the latest digital trends, technology insights, and industry best practices from Tarlose experts.',
      url: 'https://www.tarlose.com/blog',
      image: DEFAULT_OG_IMAGE
    }
  };
  
  return metadata[pageName] || metadata.home;
};
