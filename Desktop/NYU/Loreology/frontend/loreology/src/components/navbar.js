import { Link } from "react-router-dom";
import Logo from '../loreology-logo.png';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }
    return (
        <div className="nav flex">
            <div className="navbar">
                <img className="Logo" src={Logo} alt='loreology logo'></img>
                <div className="nav-items flex">
                    <Link to ="/" className="nav-links">Home</Link>
                    <Link to ="/add-movie" className="nav-links">Add Movie</Link>
                    <Link to ="/saved-movies" className="nav-links">My Movies</Link>
                    {!cookies.access_token ? (<Link to ="/auth" className="nav-links">Login/Register</Link>) : (<button onClick={logout}>Logout</button>) }

                </div>
            </div>
        </div>
        
    );
};