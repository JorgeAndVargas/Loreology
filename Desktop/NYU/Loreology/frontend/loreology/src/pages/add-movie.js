import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const userID = useGetUserID();
  const [movie, setMovie] = useState({
    name: "",
    imageUrl: "",
    year: 0,
    rating: "",
    length: "",
    genre: "",
    synopsis: "",
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/movies", movie);

      alert("Movie Added");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-movie">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="imageUrl">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange} />

        <label htmlFor="year">Year:</label>
        <input type="number" id="year" name="year" onChange={handleChange} />

        <label htmlFor="rating">Rating:</label>
        <input type="text" id="rating" name="rating" onChange={handleChange} />

        <label htmlFor="length">Length:</label>
        <input type="text" id="length" name="length" onChange={handleChange} />

        <label htmlFor="genre">Genre:</label>
        <input type="text" id="genre" name="genre" onChange={handleChange} />

        <label htmlFor="synopsis">Synopsis:</label>
        <textarea id="synopsis" name="synopsis" onChange={handleChange} />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
