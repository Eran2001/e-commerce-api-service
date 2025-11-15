import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: [
        "admin",
        "owner",
        "tester",
        "frontend-developer",
        "backend-developer",
        "business-analyst",
        "database-manager",
      ],
      required: true,
    },
    organizationName: { type: String, required: true },
    projectName: { type: String, required: true },
    numberOfEmployees: { type: Number },
    departmentName: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
