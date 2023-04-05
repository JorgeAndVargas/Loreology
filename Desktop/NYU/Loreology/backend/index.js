//Modules and Globals

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { userRouter } from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

//connecting mongoose
mongoose.connect("mongodb+srv://jorgeandvargasluz:260899@loreology.txnayp7.mongodb.net/loreology?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });


app.listen(3000, () => console.log("SERVER IS ON!"));


