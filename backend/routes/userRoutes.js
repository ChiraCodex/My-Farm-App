import express from "express";
import { Client, validate } from "./models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    // Validate request body
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details.map(d => d.message).join(", ")
      });
    }

    // Check for existing user
    const existingUser = await Client.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create new user
    const user = new Client(req.body);
    await user.save();

    // Generate token
    const token = user.generateAuthToken();

    // Return response (password automatically removed by toJSON transform)
    return res.status(201).json({ user, token });
    
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;