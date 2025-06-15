const express = require('express');
const router = express.Router();
const HeatmapController = require('../../controllers/heatmap-controller');

router.get('/', HeatmapController.getHeatmapData);

module.exports = router; 