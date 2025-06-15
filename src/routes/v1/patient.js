const express = require('express');
const router = express.Router();
const { 
    getPatients, 
    getPatientById, 
    createPatient, 
    updatePatient, 
    deletePatient 
} = require('../../controllers/patient-controller');
const authenticateToken = require('../../middleware/auth-middleware');
// const authorizeRoles = require('../../middleware/authorize-roles'); // Comment out or remove if not needed elsewhere

// Get all patients
router.get('/', authenticateToken, getPatients);

// Get patient by ID
router.get('/:id', authenticateToken, getPatientById);

// Create new patient
router.post('/', authenticateToken, createPatient);

// Update patient
router.put('/:id', authenticateToken, updatePatient);

// Delete patient
router.delete('/:id', authenticateToken, deletePatient);

module.exports = router; 