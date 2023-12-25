const express = require('express');
const app = express()
const bcrypt = require('bcrypt')

const { auth } = require('express-oauth2-jwt-bearer');
app.use(express.json())
// const users = []
// app.get('/users', (req, res) => {
//     res.json(users);
// })
const jwtCheck = auth({
    audience: 'http://localhost:5000',
    issuerBaseURL: 'https://devabhishek707.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

app.get('/public', (req, res) => {
    res.json({
        type: 'public'
    });
})
app.get('/private', jwtCheck, (req, res) => {
    res.json({
        type: 'private'
    });
})

// app.post('/users', async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt();
//         const hashPassword = await bcrypt.hash(req.body.password, salt)
//         console.log(salt);
//         console.log(hashPassword);
//         const user = { name: req.body.name, password: hashPassword }
//         users.push(user)
//         res.status(201).send()
//     }
//     catch (err) {
//         res.status(500).send()
//     }


// })
// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name == req.body.name);
//     if (user == null) {
//         res.status(500).send('cannot find user')
//     }
//     try {
//         if (await bcrypt.compare(req.body.password, user.password)) {
//             res.send("sucess")
//         }
//         else {
//             res.send("Not allowed")
//         }

//     }
//     catch (err) {
//         res.status(500).send()
//     }
// })

app.listen(5000, () => {
    console.log("server is started");
})