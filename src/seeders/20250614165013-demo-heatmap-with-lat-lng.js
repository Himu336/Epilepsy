'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // First, get some patient IDs to reference
    const patients = await queryInterface.sequelize.query(
      'SELECT id FROM Patients LIMIT 5;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    if (patients.length === 0) {
      console.log('No patients found. Skipping heatmap seeder.');
      return;
    }

    // Sample coordinates for different locations
    const locations = [
      { lat: 35.6762, lng: 139.6503 }, // Tokyo
      { lat: 35.6895, lng: 139.6917 }, // Shinjuku
      { lat: 35.6586, lng: 139.7454 }, // Shibuya
      { lat: 35.7100, lng: 139.8107 }, // Ueno
      { lat: 35.6812, lng: 139.7671 }  // Ginza
    ];

    const heatmapData = [];
    const now = new Date();

    // Create 20 sample heatmap entries
    for (let i = 0; i < 20; i++) {
      const patientId = patients[Math.floor(Math.random() * patients.length)].id;
      const location = locations[Math.floor(Math.random() * locations.length)];
      const timestamp = new Date(now - Math.random() * 7 * 24 * 60 * 60 * 1000); // Random time in last 7 days

      heatmapData.push({
        patientId,
        latitude: location.lat,
        longitude: location.lng,
        createdAt: timestamp,
        updatedAt: timestamp
      });
    }

    await queryInterface.bulkInsert('heatmaps', heatmapData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('heatmaps', null, {});
  }
};
