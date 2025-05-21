import jwt from "jsonwebtoken";
import mongoose, { Schema, model } from "mongoose";
import joi from "joi";
import passwordComplexity from "joi-password-complexity";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Password complexity options
const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4,
};

// Joi validation function
const validateClient = (data) => {
  const schema = joi.object({
    firstName: joi.string().required().label("First Name"),
    lastName: joi.string().required().label("Last Name"),
    email: joi.string().email().required().label("Email"),
    contacts: joi.string().required().label("Contacts"),
    password: passwordComplexity(complexityOptions).required().label("Password"),
  });
  return schema.validate(data, { abortEarly: false }); // Return all validation errors
};

// Mongoose schema
const clientSchema = new Schema(
  {
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
    email: { 
      type: String, 
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true
    },
    contacts: { type: String, required: [true, "Contacts are required"] },
    password: { type: String, required: [true, "Password is required"] },
  },
  { 
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password; // Remove password when sending JSON response
        return ret;
      }
    }
  }
);

// Method for generating JWT
clientSchema.methods.generateAuthToken = function () {
  if (!process.env.JWTPRIVATEKEY) {
    throw new Error("JWTPRIVATEKEY environment variable is not set");
  }
  
  return jwt.sign(
    { id: this._id }, 
    process.env.JWTPRIVATEKEY, 
    { expiresIn: "7d" }
  );
};


clientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});


// Model export
const Client = mongoose.models.Client || model("Client", clientSchema);

export { Client, validateClient as validate };