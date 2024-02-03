const express = require("express");
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

const connectDb = async()=>{
    try{
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Database Is succesfully connected");
    }catch(err){
        console.log(err)
    }

}

//MiddleWares
dotenv.config();
app.use(express.json());
app.use('/api/auth',authRoute);

app.listen(port,()=>{
    connectDb();
    console.log(`Server is running on port ${port}`);
})