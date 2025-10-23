import express from 'express';
import ContactSubmission from '../models/contactSubmission.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// Lazy transporter creation - will be created on first use
let transporter = null;
let transporterInitialized = false;

// Configure nodemailer with more robust settings
const getTransporter = () => {
  if (transporterInitialized) {
    return transporter;
  }
  
  transporterInitialized = true;
  
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  // Debug logging
  // console.log('Creating email transporter...');
  // console.log('Email User:', emailUser ? `${emailUser.substring(0, 3)}***@gmail.com` : 'MISSING');
  // console.log('Email Pass length:', emailPass ? emailPass.length : 'MISSING');
  
  if (!emailUser || !emailPass) {
    console.error('⚠️ Email credentials are missing!');
    return null;
  }

  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: emailUser.trim(),
      pass: emailPass.trim()
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Verify transporter configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log('❌ Email configuration error:', error.message);
    } else {
      console.log('✅ Email server is ready to send messages');
    }
  });
  
  return transporter;
};

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;
    
    // STEP 1: Save to database FIRST
    const submission = new ContactSubmission({ firstName, lastName, email, subject, message });
    await submission.save();
    console.log('✅ Contact form saved to database');
    
    // STEP 2: Send response to user immediately
    res.status(200).json({ message: 'Submission received successfully!' });
    
    // STEP 3: Try to send email in background (after response sent)
    const emailTransporter = getTransporter();
    if (emailTransporter) {
      try {
        await emailTransporter.sendMail({
          from: process.env.EMAIL_USER,
          to: 'admin@tarlose.com',
          subject: `New Contact Submission: ${subject}`,
          text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        });
        console.log('✅ Contact form email sent successfully');
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError.message);
      }
    } else {
      console.log('⚠️ Email not configured - skipping email notification');
    }

  } catch (err) {
    console.error('❌ Contact form error:', err);
    res.status(500).json({ error: 'Failed to submit contact form.' });
  }
});

// Pricing inquiry route
router.post('/pricing-inquiry', async (req, res) => {
  try {
    const { name, phone, email, address, query, service, plan, price, priceType } = req.body;
    
    // STEP 1: Save to database FIRST
    const submission = new ContactSubmission({ 
      firstName: name.split(' ')[0] || name,
      lastName: name.split(' ').slice(1).join(' ') || '',
      email: email || 'Not provided',
      subject: `Pricing Inquiry - ${service} - ${plan}`,
      message: `Phone: ${phone}\nAddress: ${address || 'Not provided'}\nService: ${service}\nPlan: ${plan}\nPrice: ₹${price} ${priceType || ''}\n\nQuery: ${query || 'No additional query'}`
    });
    await submission.save();
    console.log('✅ Pricing inquiry saved to database');
    
    // STEP 2: Send response to user immediately
    res.status(200).json({ 
      success: true, 
      message: 'Pricing inquiry submitted successfully!' 
    });
    
    // STEP 3: Try to send email in background (after response sent)
    const emailTransporter = getTransporter();
    if (emailTransporter) {
      try {
        await emailTransporter.sendMail({
          from: process.env.EMAIL_USER,
          to: 'admin@tarlose.com',
          subject: `New Pricing Inquiry - ${service} - ${plan}`,
          html: `
            <h2>New Pricing Plan Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Address:</strong> ${address || 'Not provided'}</p>
            <hr>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Plan:</strong> ${plan}</p>
            <p><strong>Price:</strong> ₹${price} ${priceType || ''}</p>
            <hr>
            <p><strong>Query:</strong></p>
            <p>${query || 'No additional query'}</p>
          `
        });
        console.log('✅ Pricing inquiry email sent successfully');
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError.message);
      }
    } else {
      console.log('⚠️ Email not configured - skipping email notification');
    }

  } catch (err) {
    console.error('❌ Pricing inquiry error:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit pricing inquiry. Please try again.' 
    });
  }
});

export default router;
