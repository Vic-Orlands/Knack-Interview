const express = require('express');
const router = express.Router();
const employees = require('../data/emolyees');

//This route gets all registered employees
router.get('/employee', async (req, res) => {
    try {
        return res.status(200).json(employees);
    } catch (error) {
        return res.status(400).send('server error please try again')
    }
})

module.exports = router;