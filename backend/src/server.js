const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

async function start() {
  try {
    await connectDB();

    app.use(express.json());
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));
    app.use(expressLayouts);
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Cannot start server, Error: ", error);
    process.exit(1);
  }
}

start();
