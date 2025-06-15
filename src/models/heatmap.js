'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Heatmap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here if needed, e.g., with Patient model
      Heatmap.belongsTo(models.Patient, {
        foreignKey: 'patientId',
        as: 'patient'
      });
    }
  }
  Heatmap.init({
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Patients', // Assuming your patient table is named 'Patients'
        key: 'id'
      }
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -90,
        max: 90
      }
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -180,
        max: 180
      }
    }
  }, {
    sequelize,
    modelName: 'Heatmap',
    tableName: 'heatmaps',
    timestamps: true // This will automatically add createdAt and updatedAt
  });
  return Heatmap;
};