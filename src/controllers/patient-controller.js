const patientService = require('../services/patient-service');

const getPatients = async (req, res) => {
    try {
        const result = await patientService.getAllPatients();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching patients',
            error: error.message
        });
    }
};

const getPatientById = async (req, res) => {
    try {
        const result = await patientService.getPatientById(req.params.id);
        if (!result.success) {
            return res.status(404).json(result);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching patient',
            error: error.message
        });
    }
};

const createPatient = async (req, res) => {
    try {
        const result = await patientService.createPatient(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating patient',
            error: error.message
        });
    }
};

const updatePatient = async (req, res) => {
    try {
        const result = await patientService.updatePatient(req.params.id, req.body);
        if (!result.success) {
            return res.status(404).json(result);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating patient',
            error: error.message
        });
    }
};

const deletePatient = async (req, res) => {
    try {
        const result = await patientService.deletePatient(req.params.id);
        if (!result.success) {
            return res.status(404).json(result);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting patient',
            error: error.message
        });
    }
};

module.exports = {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
}; 