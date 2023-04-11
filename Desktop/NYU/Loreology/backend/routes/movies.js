import express from 'express';
import mongoose from 'mongoose';
import { MovieModel } from "../models/movies.js";
import { UserModel } from '../models/Users.js';
import axios from 'axios';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await MovieModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    const movie = new MovieModel(req.body);
    try {
        const response = await movie.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.put("/", async (req, res) => {
    try {
        const movie = await MovieModel.findById(req.body.movieID);
        const user = await UserModel.findById(req.body.userID);
        user.savedMovies.push(movie);
        await user.save();
        res.json({savedMovies: user.savedMovies});
    } catch (err) {
        res.json(err);
    }
});






export {router as moviesRouter };