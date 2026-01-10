import Employee from "../models/Employee.js";

const createEmployee = async (req, res) => {
  try {
    const { name, email, city } = req.body;
    const newEmployee = new Employee({
      name,
      email,
      city,
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

//single employee

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

//update employee

const updateEmployee = async (req, res) => {
  try {
    const { name, email, city } = req.body;
    const employee = await Employee.findByIdAndUpdate(req.params.id, {
      name,
      email,
      city,
    });

    if (!employee) {
      res.status(404).json({ message: "Employee not found" });
    }
    res.status(201).json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

//delete employee

const deleteEmpolyee = async (req, res) => {
  try {
    const deleteEmp = await Employee.findByIdAndDelete(req.params.id);
    if (!deleteEmp) {
      res.status(404).json({ message: "Employee not found" });
    }
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export {
  createEmployee,
  getEmployee,
  singleEmployee,
  updateEmployee,
  deleteEmpolyee,
};
