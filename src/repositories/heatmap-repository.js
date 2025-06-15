const { Heatmap, Patient } = require('../models');
const { Op } = require('sequelize');
// Removed: const sequelize = require('sequelize'); as it's not strictly needed for basic finds now

class HeatmapRepository {
  async findAll() {
    return await Heatmap.findAll({
      attributes: [
        'id',
        'patientId',
        'latitude',
        'longitude',
        'createdAt',
        'updatedAt'
        // Removed COUNT aggregation from here, will handle in service if needed
      ],
      include: [{
        model: Patient,
        as: 'patient',
        attributes: ['id', 'name']
      }],
      order: [['createdAt', 'DESC']], // Order by createdAt instead of timestamp as it's the default timestamp
      limit: 1000
    });
  }

  async create(data) {
    const { patientId, latitude, longitude, severity } = data;
    
    return await Heatmap.create({
      patientId,
      latitude,
      longitude,
      // If severity is still needed, uncomment this and ensure it's in model/migration
      // severity,
      timestamp: new Date() // Still use timestamp if that's what you prefer to record the event time
    });
  }

  async findByPatientId(patientId) {
    return await Heatmap.findAll({
      where: { patientId },
      include: [{
        model: Patient,
        as: 'patient',
        attributes: ['id', 'name']
      }],
      order: [['createdAt', 'DESC']]
    });
  }

  async findByDateRange(startDate, endDate) {
    return await Heatmap.findAll({
      where: {
        createdAt: { // Use createdAt as the timestamp field
          [Op.between]: [startDate, endDate]
        }
      },
      include: [{
        model: Patient,
        as: 'patient',
        attributes: ['id', 'name']
      }],
      order: [['createdAt', 'DESC']]
    });
  }

  async findBySeverity(severity) {
    // If severity is still needed in the model/table
    // return await Heatmap.findAll({
    //   where: { severity },
    //   include: [{
    //     model: Patient,
    //     as: 'patient',
    //     attributes: ['id', 'name']
    //   }],
    //   order: [['createdAt', 'DESC']]
    // });
    console.warn("Severity querying not implemented as 'severity' is not in the new model/migration.");
    return [];
  }
}

module.exports = new HeatmapRepository(); 