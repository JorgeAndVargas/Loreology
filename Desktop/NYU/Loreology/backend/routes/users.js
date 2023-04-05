import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    //a user with this username exists
    const user = await UserModel.findOne({ username });
    //if there's a user with the same name already in the database, it will return with this message.
    if (user) {
        return res.json({message: "User already exists"})
    }
    //this hashes the passwords on the database
    const hashedPassword = await bcrypt.hash(password, 10)
    //creating a new user with the hashed password
    const newUser = UserModel({ username, password: hashedPassword })
    await newUser.save()

    res.json({message: "User Successfully Registered!"});
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    //if the user logs in with a username that doesn't exist in the database, the it will return that message.
    if (!user) {
        return res.json({message: "User doesn't exist"});
    }
    //using bcrypt compare: compares the password we put in with the original password in the database with "user.password".
    const isPasswordValid = await bcrypt.compare(password, user.password)
    //if password is not valid then it will send this message.
    if(!isPasswordValid) {
        return res.json({message: "Username or Password are incorrect!"});
    }
    //if password is valid, we log in with the correct information.
    //Create a token using jwt. Will be used to verify if the user is authentic.
    const token = jwt.sign({id: user._id }, "secret");
    //ending this request and sending back the token and the userID
    res.json({token, userID: user._id })
});

export { router as userRouter };