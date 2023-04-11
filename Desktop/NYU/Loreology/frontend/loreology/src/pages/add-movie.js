import { useState } from "react";
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

    const handelChange = (event) => {
        const {name, value} = event.target
        setMovie({...movie, [name]: value});

    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/movies", movie);
            alert("Movie Added");
            navigate("/");
        } catch (err) {
            console.error(err);
        }


    };

    return (
    <div className="add-movie">
        <h2> Add Movie</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Title:</label>
            <input type="text" id="name" name="name" onChange={handelChange} />

            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" onChange={handelChange} />

            <label htmlFor="year">Year:</label>
            <input type="number" id="year" name="year" onChange={handelChange}/>

            <label htmlFor="rating">Rating:</label>
            <input type="text" id="rating" name="rating" onChange={handelChange}/>

            <label htmlFor="length">Length:</label>
            <input type="text" id="length" name="length" onChange={handelChange}/>

            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" onChange={handelChange}/>

            <label htmlFor="synopsis">Synopsis:</label>
            <input textarea id="synopsis" name="synopsis" onChange={handelChange}/>

            <button type="submit">Add Movie</button>

        </form>
        </div>
)};
