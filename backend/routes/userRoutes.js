import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { firstName, lastName, email, contacts, password } = req.body;
  console.log("Received user:", req.body);

  // Simulate saving to DB
  res.status(201).json({ message: "User created" });
});

export default router;
