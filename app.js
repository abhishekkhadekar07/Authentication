var express = require("express")
var app = express()
const { auth } = require('express-openid-connect');
require('dotenv').config()
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'tJmoS2EuEijgfmR8ufCyxaLElQfyGg4m',
    issuerBaseURL: 'https://devabhishek707.us.auth0.com',
    clientSecret: 'twFQQyFwleRv0vCTwcNcVWOrXxmgJFJ3TyEkbPZg5WHsOZaXEIhBXU28w6DIMHLV',

};

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
var router = require('./routes')
app.use(auth(config));
app.use('/', router)
//auth 

app.listen(3000, () => {
    console.log("server is running on port 3000");
});