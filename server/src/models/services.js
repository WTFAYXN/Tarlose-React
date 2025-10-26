import mongoose from 'mongoose';
const { Schema } = mongoose;

// Sub-schema for repeatable key-value pairs like value propositions
const DetailItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { _id: false }); // _id: false prevents MongoDB from creating an _id for sub-documents

// Sub-schema for individual pricing plans
const PricingPlanSchema = new Schema({
  name: { type: String, required: true, enum: ['Starter', 'Growing Businesses', 'Established Brand'] },
  price: { type: String, required: true },
  priceType: { type: String, default: 'One-time' },
  description: { type: String, required: true },
  features: [{ type: String }],
}, { _id: false });

// Sub-schema for the "How It Works" steps
const HowItWorksStepSchema = new Schema({
  stepNumber: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { _id: false });

// Sub-schema for FAQ items
const FaqItemSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
}, { _id: false });


// ## Main Schema for the Ecommerce Development Page

const ServiceSchema = new Schema({
  pageTitle: { type: String, default: 'Ecommerce Development' },
  serviceSlug: { type: String, unique: true, required: true }, // e.g., 'ecommerce-development'
  metaTitle: { type: String },
  metaDescription: { type: String },
  metaKeywords: [{ type: String }],
  
  
  // Section: Headline & Intro
  header: {
    headline: { type: String, required: true },
    intro: { type: String, required: true },
  },

  // Section: Value Proposition
  valueProposition: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    points: [DetailItemSchema],
  },
  
  // Section: Additional Services ("Everything You Need")
  additionalServices: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    services: [DetailItemSchema],
  },

  // Section: Core Features & Benefits
  coreFeatures: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: [DetailItemSchema],
  },

  // Section: Pricing Plans
  pricing: {
    noCode: [PricingPlanSchema],
    code: [PricingPlanSchema],
    terms: [{ type: String }],
  },

  // Section: How It Works
  howItWorks: {
    title: { type: String, required: true },
    steps: [HowItWorksStepSchema],
  },
  
  // Section: FAQs
  faqs: [FaqItemSchema],

}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Service = mongoose.model('Service', ServiceSchema);
export default Service;