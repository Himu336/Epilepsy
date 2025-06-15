const patientRepository = require('../repositories/patient-repository');

class PatientService {
    async getAllPatients() {
        try {
            const patients = await patientRepository.findAll();
            return {
                success: true,
                data: patients
            };
        } catch (error) {
            throw new Error(`Error fetching patients: ${error.message}`);
        }
    }

    async getPatientById(id) {
        try {
            const patient = await patientRepository.findById(id);
            if (!patient) {
                return {
                    success: false,
                    message: 'Patient not found'
                };
            }
            return {
                success: true,
                data: patient
            };
        } catch (error) {
            throw new Error(`Error fetching patient: ${error.message}`);
        }
    }

    async createPatient(patientData) {
        try {
            const patient = await patientRepository.create(patientData);
            return {
                success: true,
                data: patient
            };
        } catch (error) {
            throw new Error(`Error creating patient: ${error.message}`);
        }
    }

    async updatePatient(id, patientData) {
        try {
            const patient = await patientRepository.update(id, patientData);
            if (!patient) {
                return {
                    success: false,
                    message: 'Patient not found'
                };
            }
            return {
                success: true,
                data: patient
            };
        } catch (error) {
            throw new Error(`Error updating patient: ${error.message}`);
        }
    }

    async deletePatient(id) {
        try {
            const result = await patientRepository.delete(id);
            if (!result) {
                return {
                    success: false,
                    message: 'Patient not found'
                };
            }
            return {
                success: true,
                message: 'Patient deleted successfully'
            };
        } catch (error) {
            throw new Error(`Error deleting patient: ${error.message}`);
        }
    }
}

module.exports = new PatientService(); 