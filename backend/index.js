import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(json()); // Parses JSON bodies

app.use("/sign-up", userRoutes); // Route for sign-up

const PORT = process.env.PORT || 5000;

connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
