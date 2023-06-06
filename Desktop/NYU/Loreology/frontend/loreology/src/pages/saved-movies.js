import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";

export const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  const fetchSavedMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3001/movies/savedMovies", {
        params: {
          userID: userID,
        },
      });
      setSavedMovies(response.data.savedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="saved-movies">
      <h1>Saved Movies</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Length</th>
            <th>Genre</th>
            <th>Synopsis</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(savedMovies) &&
            savedMovies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.name}</td>
                <td>
                  <img src={movie.imageUrl} alt={movie.name} height="100" />
                </td>
                <td>{movie.year}</td>
                <td>{movie.rating}</td>
                <td>{movie.length}</td>
                <td>{movie.genre}</td>
                <td>{movie.synopsis}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
