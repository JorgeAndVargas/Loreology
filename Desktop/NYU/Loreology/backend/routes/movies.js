import express from 'express';
import { MovieModel } from '../models/Movies.js';
import mongoose from 'mongoose';

const router = express.Router();

// Middleware to parse request bodies as JSON
router.use(express.json());

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await MovieModel.find();
    res.json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch movies", error: error.message });
  }
});

// Get a specific movie
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid movie ID" });
  }

  try {
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch movie", error: error.message });
  }
});

// Create a new movie
router.post("/", async (req, res) => {
  const { name, imageUrl, year, rating, length, genre, synopsis, userOwner } = req.body;

  try {
    const newMovie = await MovieModel.create({
      name,
      imageUrl,
      year,
      rating,
      length,
      genre,
      synopsis,
      userOwner
    });

    res.status(201).json({ message: "Movie created successfully", movie: newMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create movie", error: error.message });
  }
});

// Update a movie
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, imageUrl, year, rating, length, genre, synopsis, userOwner } = req.body;

  try {
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    movie.name = name || movie.name;
    movie.imageUrl = imageUrl || movie.imageUrl;
    movie.year = year || movie.year;
    movie.rating = rating || movie.rating;
    movie.length = length || movie.length;
    movie.genre = genre || movie.genre;
    movie.synopsis = synopsis || movie.synopsis;
    movie.userOwner = userOwner || movie.userOwner;

    await movie.save();
    res.json({ message: "Movie updated successfully", movie: movie }); // Update the response property here
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update movie", error: error.message });
  }
});

// Delete a movie
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await MovieModel.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json({ message: "Movie deleted successfully", movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete movie", error: error.message });
  }
});

// Get saved movies by user ID
router.get("/savedMovies", async (req, res) => {
  const { userID } = req.query;

  try {
    const movies = await MovieModel.find({ userOwner: userID });
    res.json({ savedMovies: movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch saved movies", error: error.message });
  }
});


export { router as moviesRouter };
