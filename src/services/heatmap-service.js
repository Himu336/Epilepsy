const HeatmapRepository = require('../repositories/heatmap-repository');

class HeatmapService {
  async getAggregatedData() {
    try {
      const data = await HeatmapRepository.findAll();
      
      // Re-implement aggregation if needed, or just return all points
      const aggregation = {};
      data.forEach(item => {
        const key = `${item.latitude},${item.longitude}`;
        aggregation[key] = (aggregation[key] || 0) + 1;
      });

      return Object.entries(aggregation).map(([coords, count]) => {
        const [lat, lng] = coords.split(',').map(s => parseFloat(s.trim()));
        return {
          lat,
          lng,
          count,
          // timestamp: item.timestamp, // timestamp may not be consistent in aggregated data
          // patientId: item.patient?.id,
          // patientName: item.patient?.name
        };
      });

    } catch (error) {
      console.error('Error fetching aggregated heatmap data:', error, error?.stack);
      throw new Error('Failed to fetch aggregated heatmap data');
    }
  }

  async addHeatmapData(data) {
    try {
      // The severity field is no longer in the model/migration
      const { patientId, latitude, longitude } = data; 
      return await HeatmapRepository.create({ patientId, latitude, longitude });
    } catch (error) {
      console.error('Error adding heatmap data:', error, error?.stack);
      throw new Error('Failed to add heatmap data');
    }
  }

  async getPatientHeatmapData(patientId) {
    try {
      const data = await HeatmapRepository.findByPatientId(patientId);
      return this.formatHeatmapData(data);
    } catch (error) {
      console.error('Error fetching patient heatmap data:', error, error?.stack);
      throw new Error('Failed to fetch patient heatmap data');
    }
  }

  async getDateRangeHeatmapData(startDate, endDate) {
    try {
      const data = await HeatmapRepository.findByDateRange(startDate, endDate);
      return this.formatHeatmapData(data);
    } catch (error) {
      console.error('Error fetching date range heatmap data:', error, error?.stack);
      throw new Error('Failed to fetch date range heatmap data');
    }
  }

  async getSeverityHeatmapData(severity) {
    // This method is no longer applicable as 'severity' is not in the new model
    console.warn("getSeverityHeatmapData called, but 'severity' is not in the new Heatmap model.");
    return [];
  }

  // Helper method to format heatmap data for individual points
  formatHeatmapData(data) {
    return data.map(item => {
      return {
        id: item.id,
        patientId: item.patientId,
        latitude: item.latitude,
        longitude: item.longitude,
        // severity: item.severity, // Severity is no longer in the model
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        patientName: item.patient?.name
      };
    });
  }
}

module.exports = new HeatmapService(); 