const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const registerRoutes = require("./routes");
const handleError = require("./middleware/handleError.middleware");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

async function start() {
  try {
    await connectDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Register API routes
    registerRoutes(app);

    app.use(handleError);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Cannot start server, Error: ", error);
    process.exit(1);
  }
}

start();
