import express from 'express';
import mongoose from 'mongoose';
import {Employee} from '../models/Employees.js'

const router = express.Router();
// Get all employees with filters
/*
router.get('/', (req, res) => {
    const filters = req.query;
    Employee.find(filters)
      .then(employees => res.json(employees))
      .catch(err => res.status(500).json(err));
  });
  */
  router.get("/get", async (req, res) => {
    try {
      const result = await Employee.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Create an employee
  router.post('/', (req, res) => {
    const employee = new Employee(req.body);
    employee.save()
      .then(() => res.json(employee))
      .catch(err => res.status(500).json(err));
  });
  
  // Update an employee
  router.put('/employees/:id', (req, res) => {
    const { id } = req.params;
    Employee.findByIdAndUpdate(id, req.body, { new: true })
      .then(employee => res.json(employee))
      .catch(err => res.status(500).json(err));
  });
  
  // Delete an employee
  router.delete('/employees/:id', (req, res) => {
    const { id } = req.params;
    Employee.findByIdAndDelete(id)
      .then(() => res.sendStatus(204))
      .catch(err => res.status(500).json(err));
  });
  
export {router as employeeRoute};