import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    name: "",
    imageUrl: "",
    year: "",
    rating: "",
    length: "",
    genre: "",
    synopsis: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = async (movieData) => {
    try {
      await axios.post("http://localhost:3001/movies", movieData);
      alert("Movie created successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create movie");
    }
  };

  const handleMovieChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddMovie(newMovie);
  };

  return (
    <div className="add-movie">
      <h2>Add a Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newMovie.name}
          onChange={handleChange}
        />
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={newMovie.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          value={newMovie.year}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
        />
        <label htmlFor="length">Length</label>
        <input
          type="text"
          id="length"
          name="length"
          value={newMovie.length}
          onChange={handleChange}
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={newMovie.genre}
          onChange={handleChange}
        />
        <label htmlFor="synopsis">Synopsis</label>
        <textarea
          id="synopsis"
          name="synopsis"
          value={newMovie.synopsis}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
