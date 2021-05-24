const express = require('express');
const router = express.Router();
const userLogin = require('../data/userLogin');



//This route logs user in;
router.post('/login', async (req, res) => {
    try {

        const { username, password, } = req.body
        console.log({ username, password });
        console.log({ userLogin });
        if (!username || !password)
            return res.status(200).send('Missing Credentials');

        if (username !== userLogin.username)
            return res.status(200).send('Invalid user');

        if (password !== userLogin.password)
            return res.status(200).send('Incorrect password');

        return res.status(200).send('success')

    } catch (error) {
        console.log(error)
        return res.status(200).send('Server error please try again')
    }
})


module.exports = router;