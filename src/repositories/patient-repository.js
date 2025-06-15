const { Patient } = require('../models');

class PatientRepository {
    async findAll() {
        return await Patient.findAll();
    }

    async findById(id) {
        return await Patient.findByPk(id);
    }

    async create(patientData) {
        return await Patient.create(patientData);
    }

    async update(id, patientData) {
        const patient = await Patient.findByPk(id);
        if (!patient) return null;
        return await patient.update(patientData);
    }

    async delete(id) {
        const patient = await Patient.findByPk(id);
        if (!patient) return false;
        await patient.destroy();
        return true;
    }
}

module.exports = new PatientRepository(); 