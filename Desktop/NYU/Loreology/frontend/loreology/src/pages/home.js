import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                const response = await axios.get("http://localhost:3000/movies");
                setMovies(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMovie();


    }, []);
    return <div>
        <h1>Movies</h1>
        <ul>
            {movies.map((movie) => (
                <li key={movie._id}>
                    <div>
                        <h2>{movie.name}</h2>
                    </div>
                    <div>
                        <img src={movie.imageUrl} alt={movie.name} />
                    </div>
                    <div className="year">
                        <p>{movie.year}</p>
                    </div>
                    <div className="rating">
                        <p>{movie.rating}</p>
                    </div>
                    <div className="length">
                        <p>{movie.length}</p>
                    </div>
                    <div className="genre">
                        <p>{movie.genre}</p>
                    </div>
                    <div className="synopsis">
                        <p>{movie.synopsis}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
};