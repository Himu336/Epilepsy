const { ChecklistService } = require('../services');

const createChecklist = async (req, res) => {
  try {
    const result = await ChecklistService.createChecklist(req.body);
    if (result.success) {
      return res.status(201).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

const getChecklist = async (req, res) => {
  try {
    const checklist = await ChecklistService.getChecklist(req.params.id);
    if (!checklist) return res.status(404).json({ error: "Not found" });
    return res.status(200).json({ success: true, data: checklist });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

const getChecklistsByPatient = async (req, res) => {
  try {
    const checklists = await ChecklistService.getChecklistsByPatient(req.params.patient_id);
    return res.status(200).json({ success: true, data: checklists });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  createChecklist,
  getChecklist,
  getChecklistsByPatient
};
