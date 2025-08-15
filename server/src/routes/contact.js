const express = require('express');
const router = express.Router();
const ContactSubmission = require('../models/contactSubmission');
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // set in .env
    pass: process.env.EMAIL_PASS  // set in .env
  }
});

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;
    // Save to DB
    const submission = new ContactSubmission({ firstName, lastName, email, subject, message });
    await submission.save();

    res.status(200).json({ message: 'Submission received and email sent.' });
    
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'admin@tarlose.com',
      subject: `New Contact Submission: ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    });

  } catch (err) {
    res.status(500).json({ error: 'Failed to submit contact form.' });
  }
});

module.exports = router;
