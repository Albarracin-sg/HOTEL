"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/contactRoutes.ts
const express_1 = require("express");
const contactController_1 = require("../controllers/contactController");
const router = (0, express_1.Router)();
// POST /api/contact - Handle contact form submission
router.post('/', contactController_1.contactController.handleContactForm);
exports.default = router;
