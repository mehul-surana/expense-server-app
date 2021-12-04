const express= require('express');
const dbConnect=require('./config/dbConnect');
const dotenv=require('dotenv')
const { registerUser } = require('./controllers/users/usersCtrl');
const { errorHandler,notFound } = require('./middlewares/errorMiddleware');
const usersRoute = require('./routes/users/usersRoute');

const app=express();
//env file
dotenv.config()
//dbConnect
dbConnect();

//middlewares
app.use(express.json())


//routes


app.use('/api/users',usersRoute);
 



//error
app.use(notFound)
app.use(errorHandler); 



module.exports=app;

 


