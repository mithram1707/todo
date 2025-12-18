//will handle connectivity between express and mongodb
// for commmonjs => const mongoose = require('mongoose')
import mongoose from "mongoose";    // modules
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
    try {
        //'mongodb://127.0.0.1:27017/sece_todo'
        mongoose.connect(process.env.MONGODB_URL);
        console.log("db has been connected")
    } catch (err) { console.log(err) }

}


export default connectDB;