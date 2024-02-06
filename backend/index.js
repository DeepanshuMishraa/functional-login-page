const express = require("express");
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const cors = require("cors");

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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use('/api/auth',authRoute);


app.listen(port,()=>{
    connectDb();
    console.log(`Server is running on port ${port}`);
})