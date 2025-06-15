const { HeatmapService } = require('../services');

const getHeatmapData = async (req, res) => {
  try {
    const { patientId, startDate, endDate } = req.query; // Severity filter removed as it's not in the new model
    let data;

    if (patientId) {
      data = await HeatmapService.getPatientHeatmapData(patientId);
    } else if (startDate && endDate) {
      data = await HeatmapService.getDateRangeHeatmapData(new Date(startDate), new Date(endDate));
    } else { // Removed severity filter
      data = await HeatmapService.getAggregatedData();
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error in getHeatmapData:', error, error?.stack);
    res.status(500).json({ success: false, error: error.message });
  }
};

const addHeatmapData = async (req, res) => {
  try {
    const { patientId, latitude, longitude } = req.body; // Removed severity from body

    // Validate required fields
    if (!patientId || !latitude || !longitude) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: patientId, latitude, longitude'
      });
    }

    // Validate coordinates
    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
      return res.status(400).json({
        success: false,
        error: 'Invalid coordinates'
      });
    }

    const data = await HeatmapService.addHeatmapData({
      patientId,
      latitude,
      longitude
    });

    res.status(201).json({ success: true, data });
  } catch (error) {
    console.error('Error in addHeatmapData:', error, error?.stack);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getHeatmapData,
  addHeatmapData
}; 