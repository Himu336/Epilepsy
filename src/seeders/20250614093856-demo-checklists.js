'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SymptomChecklists', [
      {
        patient_id: 1, // Assuming this is Ravi Verma's ID
        submission_date: new Date(),
        first_seizure_date: '2023-01-01',
        most_recent_seizure_date: '2024-06-10',
        seizure_frequency: 'Weekly',
        seizure_duration: '1 minute',
        time_of_day: 'Night',
        seizure_increased: true,
        aura: true,
        aura_description: 'Weird smell before seizure',
        head_injury: false,
        symptoms: 'frothing,jerking,blank stare',
        family_history: true,
        taking_medication: true,
        medication_details: 'Carbamazepine 200mg',
        past_conditions: 'Diabetes',
        tests_done: true,
        test_documents: 'S3_URL_EEG_Report',
        substance_use: false,
        vaccine_history: 'Complete',
        can_work: 'Partially',
        injury_from_seizure: true,
        injury_details: 'Cut on forehead during fall',
        social_challenges: 'Schooling stopped',
        family_support: true,
        stigma: false,
        visited_doctor_before: true,
        doctor_details: 'CHC Betul, Dr. Mehta',
        last_consultation_date: '2024-06-05',
        medication_history: 'Levetiracetam earlier',
        missed_doses: false,
        condition_trend: 'Stable',
        hospitalized: false,
        video_url: 'https://s3.link/video.mp4',
        document_urls: 'https://s3.link/doc1.pdf, https://s3.link/doc2.pdf',
        timestamp_annotation: '2024-06-11 09:13:00 | 22.15, 78.11',
        consent_given: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SymptomChecklists', null, {});
  }
};
