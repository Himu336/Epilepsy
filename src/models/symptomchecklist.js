'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SymptomChecklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SymptomChecklist.belongsTo(models.Patient, {
        foreignKey: 'patient_id',
        onDelete: 'CASCADE'
      });
    }
  }
  SymptomChecklist.init({
    patient_id: DataTypes.INTEGER,
    submission_date: DataTypes.DATE,
    first_seizure_date: DataTypes.DATE,
    most_recent_seizure_date: DataTypes.DATE,
    seizure_frequency: DataTypes.STRING,
    seizure_duration: DataTypes.STRING,
    time_of_day: DataTypes.STRING,
    seizure_increased: DataTypes.BOOLEAN,
    aura: DataTypes.BOOLEAN,
    aura_description: DataTypes.STRING,
    head_injury: DataTypes.BOOLEAN,
    head_injury_details: DataTypes.STRING,
    symptoms: DataTypes.TEXT,
    family_history: DataTypes.BOOLEAN,
    taking_medication: DataTypes.BOOLEAN,
    medication_details: DataTypes.STRING,
    past_conditions: DataTypes.STRING,
    tests_done: DataTypes.BOOLEAN,
    test_documents: DataTypes.STRING,
    substance_use: DataTypes.BOOLEAN,
    substance_details: DataTypes.STRING,
    vaccine_history: DataTypes.STRING,
    can_work: DataTypes.STRING,
    injury_from_seizure: DataTypes.BOOLEAN,
    injury_details: DataTypes.STRING,
    social_challenges: DataTypes.STRING,
    family_support: DataTypes.BOOLEAN,
    stigma: DataTypes.BOOLEAN,
    stigma_description: DataTypes.STRING,
    visited_doctor_before: DataTypes.BOOLEAN,
    doctor_details: DataTypes.STRING,
    last_consultation_date: DataTypes.DATE,
    medication_history: DataTypes.STRING,
    missed_doses: DataTypes.BOOLEAN,
    condition_trend: DataTypes.STRING,
    hospitalized: DataTypes.BOOLEAN,
    hospitalization_details: DataTypes.STRING,
    video_url: DataTypes.STRING,
    document_urls: DataTypes.TEXT,
    timestamp_annotation: DataTypes.STRING,
    consent_given: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SymptomChecklist',
  });
  return SymptomChecklist;
};