const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    employmentDate: {
        type: Date,
        required: true,
    },

});

const employeeModel = mongoose.model('Employees', employeeSchema);

module.exports = employeeModel;