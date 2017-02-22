var express = require('express')
var bodyParser = require('body-parser')
var user = require('./models/user.js')
var port = 4040;
var app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


