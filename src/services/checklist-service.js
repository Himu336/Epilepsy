const ChecklistRepository = require('../repositories/checklist-repository');

class ChecklistService {
  async createChecklist(data) {
    try {
      // Add any preprocessing or validation here
      return { success: true, data: await ChecklistRepository.create(data) };
    } catch (error) {
      console.error("Error creating checklist:", error);
      return { success: false, message: error.message };
    }
  }

  async getChecklistsByPatient(patient_id) {
    return await ChecklistRepository.findAllByPatientId(patient_id);
  }

  async getChecklist(id) {
    return await ChecklistRepository.findById(id);
  }
}

module.exports = new ChecklistService();
