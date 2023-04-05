import { Link } from "react-router-dom";
import Logo from '../loreology-logo.png'

export const Navbar = () => {
    return (
        <div className="nav flex">
            <div className="navbar">
                <img className="Logo" src={Logo} alt='loreology logo'></img>
                <div className="nav-items flex">
                    <Link to ="/" className="nav-links">Home</Link>
                    <Link to ="/create-movie" className="nav-links">Add Movie</Link>
                    <Link to ="/saved-movies" className="nav-links">My Movies</Link>
                    <Link to ="/auth" className="nav-links">Login/Register</Link>
                </div>
            </div>
        </div>
        
    );
};