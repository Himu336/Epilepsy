'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patients', [
      {
        name: 'Ravi Verma',
        gender: 'Male',
        dob: '1990-04-12',
        phone: '9876543210',
        id_proof: 'Aadhar-1234-5678-9101',
        address: 'Village Kheda, District Betul, MP',
        gps_coordinates: '22.15,78.11',
        asha_id: 'ASHA_001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Priya Sharma',
        gender: 'Female',
        dob: '1985-08-23',
        phone: '8765432109',
        id_proof: 'Aadhar-2345-6789-0123',
        address: 'Village Chicholi, District Betul, MP',
        gps_coordinates: '22.18,78.15',
        asha_id: 'ASHA_002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rajesh Patel',
        gender: 'Male',
        dob: '1995-03-15',
        phone: '7654321098',
        id_proof: 'Aadhar-3456-7890-1234',
        address: 'Village Multai, District Betul, MP',
        gps_coordinates: '22.20,78.25',
        asha_id: 'ASHA_001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Meena Yadav',
        gender: 'Female',
        dob: '1988-11-30',
        phone: '6543210987',
        id_proof: 'Aadhar-4567-8901-2345',
        address: 'Village Bhainsdehi, District Betul, MP',
        gps_coordinates: '22.22,78.30',
        asha_id: 'ASHA_003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suresh Gupta',
        gender: 'Male',
        dob: '1992-07-18',
        phone: '5432109876',
        id_proof: 'Aadhar-5678-9012-3456',
        address: 'Village Amla, District Betul, MP',
        gps_coordinates: '22.25,78.35',
        asha_id: 'ASHA_002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anita Desai',
        gender: 'Female',
        dob: '1993-09-25',
        phone: '4321098765',
        id_proof: 'Aadhar-6789-0123-4567',
        address: 'Village Shahpur, District Betul, MP',
        gps_coordinates: '22.28,78.40',
        asha_id: 'ASHA_001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vikram Singh',
        gender: 'Male',
        dob: '1987-12-05',
        phone: '3210987654',
        id_proof: 'Aadhar-7890-1234-5678',
        address: 'Village Athner, District Betul, MP',
        gps_coordinates: '22.30,78.45',
        asha_id: 'ASHA_003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lakshmi Iyer',
        gender: 'Female',
        dob: '1991-06-20',
        phone: '2109876543',
        id_proof: 'Aadhar-8901-2345-6789',
        address: 'Village Chicholi, District Betul, MP',
        gps_coordinates: '22.32,78.50',
        asha_id: 'ASHA_002',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mohammed Khan',
        gender: 'Male',
        dob: '1994-02-14',
        phone: '1098765432',
        id_proof: 'Aadhar-9012-3456-7890',
        address: 'Village Multai, District Betul, MP',
        gps_coordinates: '22.35,78.55',
        asha_id: 'ASHA_001',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sunita Reddy',
        gender: 'Female',
        dob: '1989-05-28',
        phone: '0987654321',
        id_proof: 'Aadhar-0123-4567-8901',
        address: 'Village Bhainsdehi, District Betul, MP',
        gps_coordinates: '22.38,78.60',
        asha_id: 'ASHA_003',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patients', null, {});
  }
};
