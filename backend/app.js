const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');
const employeeRoute = require('./routes/employeeRoutes');
const userRoute = require('./routes/userRoutes');
const app = express();


app.use(bodyParser.json());
app.use('/employee_api', employeeRoute);
app.use('/user_api', userRoute);
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`);
})