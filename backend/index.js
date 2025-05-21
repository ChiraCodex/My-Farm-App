import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import connection from "./db.js"; // Use import instead of require
import usersRoutes from './routes/userRoutes.js'
import authRoutes from './routes/auth.js'

config();

const app = express();

// Database connection
connection();

// Middleware
app.use(cors());
app.use(json());

//routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
