// src/routes/contactRoutes.ts
import { Router } from 'express';
import { contactController } from '../controllers/contactController';

const router = Router();

// POST /api/contact - Handle contact form submission
router.post('/', contactController.handleContactForm);

export default router;