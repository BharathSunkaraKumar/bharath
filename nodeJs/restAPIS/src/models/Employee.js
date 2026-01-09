import mongoose from "mongoose";

const empolyeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
});

const Employee = mongoose.model("Employee", empolyeeSchema);
export default Employee;
