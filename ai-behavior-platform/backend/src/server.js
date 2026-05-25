require("dotenv").config();

const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Test database connection
    const result = await pool.query("SELECT NOW()");

    console.log("✅ Database Connected Successfully");
    console.log("🕒 DB Time:", result.rows[0].now);

    // Start express server only after DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);

    process.exit(1);
  }
};

startServer();