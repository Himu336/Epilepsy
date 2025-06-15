'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SymptomChecklists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      submission_date: {
        type: Sequelize.DATE
      },
      first_seizure_date: {
        type: Sequelize.DATE
      },
      most_recent_seizure_date: {
        type: Sequelize.DATE
      },
      seizure_frequency: {
        type: Sequelize.STRING
      },
      seizure_duration: {
        type: Sequelize.STRING
      },
      time_of_day: {
        type: Sequelize.STRING
      },
      seizure_increased: {
        type: Sequelize.BOOLEAN
      },
      aura: {
        type: Sequelize.BOOLEAN
      },
      aura_description: {
        type: Sequelize.STRING
      },
      head_injury: {
        type: Sequelize.BOOLEAN
      },
      head_injury_details: {
        type: Sequelize.STRING
      },
      symptoms: {
        type: Sequelize.TEXT
      },
      family_history: {
        type: Sequelize.BOOLEAN
      },
      taking_medication: {
        type: Sequelize.BOOLEAN
      },
      medication_details: {
        type: Sequelize.STRING
      },
      past_conditions: {
        type: Sequelize.STRING
      },
      tests_done: {
        type: Sequelize.BOOLEAN
      },
      test_documents: {
        type: Sequelize.STRING
      },
      substance_use: {
        type: Sequelize.BOOLEAN
      },
      substance_details: {
        type: Sequelize.STRING
      },
      vaccine_history: {
        type: Sequelize.STRING
      },
      can_work: {
        type: Sequelize.STRING
      },
      injury_from_seizure: {
        type: Sequelize.BOOLEAN
      },
      injury_details: {
        type: Sequelize.STRING
      },
      social_challenges: {
        type: Sequelize.STRING
      },
      family_support: {
        type: Sequelize.BOOLEAN
      },
      stigma: {
        type: Sequelize.BOOLEAN
      },
      stigma_description: {
        type: Sequelize.STRING
      },
      visited_doctor_before: {
        type: Sequelize.BOOLEAN
      },
      doctor_details: {
        type: Sequelize.STRING
      },
      last_consultation_date: {
        type: Sequelize.DATE
      },
      medication_history: {
        type: Sequelize.STRING
      },
      missed_doses: {
        type: Sequelize.BOOLEAN
      },
      condition_trend: {
        type: Sequelize.STRING
      },
      hospitalized: {
        type: Sequelize.BOOLEAN
      },
      hospitalization_details: {
        type: Sequelize.STRING
      },
      video_url: {
        type: Sequelize.STRING
      },
      document_urls: {
        type: Sequelize.TEXT
      },
      timestamp_annotation: {
        type: Sequelize.STRING
      },
      consent_given: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SymptomChecklists');
  }
};