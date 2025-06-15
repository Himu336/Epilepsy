'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.hasMany(models.SymptomChecklist, {
        foreignKey: 'patient_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Patient.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    id_proof: DataTypes.STRING,
    address: DataTypes.STRING,
    gps_coordinates: DataTypes.STRING,
    asha_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};