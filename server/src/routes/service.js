const express = require('express');
const router = express.Router();
const services = require('../models/services').default || require('../models/services');

// GET /api/service/:serviceSlug
router.get('/:serviceSlug', async (req, res) => {
	try {
		const { serviceSlug } = req.params;
        console.log(serviceSlug)
		console.log("Fetching service for serviceSlug:", serviceSlug);
		// Find by serviceSlug field
		const service = await services.findOne({ serviceSlug });
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json(service);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
});

module.exports = router;
