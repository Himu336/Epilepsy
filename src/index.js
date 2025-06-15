const express = require('express');
const { sequelize } = require('./config/server-config');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Detailed request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Incoming Request:`);
  console.log(`  Method: ${req.method}`);
  console.log(`  URL: ${req.url}`);
  console.log(`  Headers: ${JSON.stringify(req.headers, null, 2)}`);
  console.log(`  Body: ${JSON.stringify(req.body, null, 2)}`);
  next();
});


app.use('/api', routes);


const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log("✅ Connected to Railway MySQL!");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });