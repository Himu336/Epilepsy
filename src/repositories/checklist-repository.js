const { SymptomChecklist, Patient } = require('../models');

class ChecklistRepository {
  async create(data) {
    const checklist = await SymptomChecklist.create(data);
    return await SymptomChecklist.findByPk(checklist.id, {
      include: [{
        model: Patient,
        attributes: ['id', 'name']
      }]
    });
  }

  async findAllByPatientId(patient_id) {
    return await SymptomChecklist.findAll({
      where: { patient_id },
      include: [{
        model: Patient,
        attributes: ['id', 'name']
      }]
    });
  }

  async findById(id) {
    return await SymptomChecklist.findByPk(id, {
      include: [{
        model: Patient,
        attributes: ['id', 'name']
      }]
    });
  }
}

module.exports = new ChecklistRepository();
