const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const registerRoutes = require("./routes");
const handleError = require("./middleware/handleError.middleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

async function start() {
  try {
    await connectDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      }),
    );

    app.use(cookieParser());

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
