import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home.js";
import { Auth } from "./pages/auth.js";
import { AddMovie } from './pages/add-movie.js';
import { SavedMovies } from './pages/saved-movies.js';
import { Navbar } from './components/navbar.js'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/add-movie" element={<AddMovie/>}></Route>
          <Route path="/saved-movies" element={<SavedMovies/>}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
