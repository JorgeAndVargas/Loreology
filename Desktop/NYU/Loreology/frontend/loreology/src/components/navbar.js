import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to ="/">Home</Link>
            <Link to ="/create-movie">Add Movie</Link>
            <Link to ="/saved-movies">My Movies</Link>
            <Link to ="/auth">Login/Register</Link>
        </div>
    );
};