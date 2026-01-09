import Employee from "../models/Employee.js";

const createEmployee = async (req, res) => {
  try {
    const { name, email, passowrd } = req.body;
    const newEmployee = new Employee({
      name,
      email,
      passowrd,
    });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

//get employees

const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(201).json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

//single empolyee

const singleEmployee = async (req, res) => {
  try {
    const singleEmployee = await Employee.findById(req.params.id);
    if (!singleEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(201).json(singleEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { createEmployee, getEmployee, singleEmployee };
