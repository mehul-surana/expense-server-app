const express = require('express');
const { registerUser,fetchUserCtrl } = require('../../controllers/users/usersCtrl');


const usersRoute = express.Router()
usersRoute.post('/register', registerUser)
usersRoute.get("/",fetchUserCtrl)
module.exports=usersRoute;