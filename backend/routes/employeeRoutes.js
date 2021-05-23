const express = require('express');
const Employee = require('../models/employeeModel');
const router = express.Router();

//This route gets all registered employees
router.get('/employee', async (req, res) => {
    try {
        let employees = await Employee.find({});
        return res.status(200).json(employees);
    } catch (error) {
        return res.status(400).send('server error please try again')
    }
})

//This route creates employees;
router.post('/employee', async (req, res) => {
    try {

        const { fullname, email, phone, position, employmentDate } = req.body

        if (!fullname || !email || !phone || !position)
            return res.status(400).send('Missing Credentials');

        //this checkes if emoloyee email has been used;
        let alreadyRegistered = await Employee.findOne({ email });
        if (alreadyRegistered)
            return res.status(401).send('Employee exists already')

        await Employee.create({
            fullname,
            email,
            phone,
            position,
            employmentDate,
        })

        return res.status(200).send('Employee created successfully')

    } catch (error) {
        console.log(error)
        return res.status(400).send('Server error please try again')
    }
})


//This route edits employees if needed;
router.put('/employee', async (req, res) => {
    try {
        const { employeeData } = req.body
        employee = await Employee.findOne({ email: employeeData.email });
        employee.fullname = employeeData.fullname;
        employee.phone = employeeData.phone;
        await employee.save()
        return res.status(200).send('updated successfully');
    } catch (error) {
        console.log(error)
    }
});

//This route deletes employees if needed;
router.delete('/employee', async (req, res) => {
    try {
        const { employeeData } = req.body;

        await Employee.deleteOne({ email: employeeData.email });

        let employees = await Employee.find({});

        return res.status(200).json(employees);

    } catch (error) {
        console.log(error)
    }
});
module.exports = router;