
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3001/movies");
      setMovies(response.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditMovie = (movie) => {
    setEditingMovie(movie);
  };

  const handleUpdateMovie = async (updatedMovie) => {
    try {
      await axios.put(`http://localhost:3001/movies/${updatedMovie._id}`, updatedMovie);
      setEditingMovie(null);
      fetchMovies();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setEditingMovie(null);
  };

  const handleDeleteMovie = async (movieId) => {
    try {
      await axios.delete(`http://localhost:3001/movies/${movieId}`);
      fetchMovies();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(movies) &&
            movies.map((movie) => (
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
                <td>
                  <button onClick={() => handleEditMovie(movie)}>Edit</button>
                  <button onClick={() => handleDeleteMovie(movie._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {editingMovie && (
        <div>
          <h2>Edit Movie</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleUpdateMovie(editingMovie);
            }}
          >
            <label>
              Name:
              <input
                type="text"
                value={editingMovie.name}
                onChange={(event) =>
                  setEditingMovie({
                    ...editingMovie,
                    name: event.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="text"
                value={editingMovie.imageUrl}
                onChange={(event) =>
                  setEditingMovie({
                    ...editingMovie,
                    imageUrl: event.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Synopsis:
              <textarea
                value={editingMovie.synopsis}
                onChange={(event) =>
                  setEditingMovie({
                    ...editingMovie,
                    synopsis: event.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Year:
              <input
                type="text"
                value={editingMovie.year}
                onChange={(event) =>
                  setEditingMovie({
                    ...editingMovie,
                    year: event.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Rating:
              <input
                type="text"
                value={editingMovie.rating}
                onChange={(event) =>
                  setEditingMovie({
                    ...editingMovie,
                    rating: event.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Length:
              <input
                type="text"
                value={editingMovie.length}
                onChange={(event) =>
                  setEditingMovie({
                    ...editingMovie,
                    length: event.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Genre:
              <input
                type="text"
                value={editingMovie.genre}
                onChange={(event) =>
                  setEditingMovie({
                    ...editingMovie,
                    genre: event.target.value,
                  })
                }
              />
            </label>
            <br />
            <button onClick={() => handleUpdateMovie(editingMovie)}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};



