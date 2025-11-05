import express from 'express';
import Service from '../models/services.js';

const router = express.Router();

// GET /api/service - Get all services (for build-time HTML generation)
router.get('/', async (req, res) => {
	try {
		const services = await Service.find().select('serviceSlug header').lean();
		res.json(services);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
});

// GET /api/service/:serviceSlug
router.get('/:serviceSlug', async (req, res) => {
	try {
		const { serviceSlug } = req.params;
        // console.log(serviceSlug)
		// console.log("Fetching service for serviceSlug:", serviceSlug);
		// Find by serviceSlug field
		const service = await Service.findOne({ serviceSlug });
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json(service);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
});

export default router;
