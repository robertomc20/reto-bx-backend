require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB(); // 👈 AQUÍ se conecta Mongo

    app.listen(PORT, () => {
      console.log(`🚀 Backend running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server");
    process.exit(1);
  }
};

startServer();
