const { SymptomChecklist } = require('../models');

class ChecklistRepository {
  async create(data) {
    return await SymptomChecklist.create(data);
  }

  async findAllByPatientId(patient_id) {
    return await SymptomChecklist.findAll({ where: { patient_id } });
  }

  async findById(id) {
    return await SymptomChecklist.findByPk(id);
  }
}

module.exports = new ChecklistRepository();
