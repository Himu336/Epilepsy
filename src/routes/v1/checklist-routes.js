const express = require('express');
const router = express.Router();
const ChecklistController = require('../../controllers/checklist-controller');
const authenticateToken = require('../../middleware/auth-middleware');

router.post('/create', authenticateToken, ChecklistController.createChecklist);
router.get('/:id', authenticateToken, ChecklistController.getChecklist);
router.get('/patient/:patient_id', authenticateToken, ChecklistController.getChecklistsByPatient);

module.exports = router;
