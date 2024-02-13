const routes = require('express').Router();



const Usercontroller = require('../controller/user.controller');

routes.post('/registration',Usercontroller.register);

module.exports = routes;