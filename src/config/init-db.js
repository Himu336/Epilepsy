const { Sequelize } = require('sequelize');
require('dotenv').config();

// Debug environment variables
console.log('Initializing Database with:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  // Don't log password for security
  hasPassword: !!process.env.DB_PASS
});

const initDatabase = async () => {
  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS) {
    console.error('❌ Missing required environment variables. Please check your .env file.');
    process.exit(1);
  }

  // Create a connection without database name
  const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'mysql',
    logging: console.log
  });

  try {
    // Connect to MySQL server
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL server');

    // Create database if it doesn't exist
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`);
    console.log(`✅ Database '${process.env.DB_NAME}' created or already exists`);

    // Close the connection
    await sequelize.close();
    console.log('✅ Initialization completed');
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message);
    if (error.original) {
      console.error('Original error:', error.original.message);
    }
    process.exit(1);
  }
};

// Run the initialization
initDatabase(); 