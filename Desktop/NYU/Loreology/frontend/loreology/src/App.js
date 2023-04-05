import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { CreateMovie } from './pages/create-movie';
import { SavedMovies } from './pages/saved-movies';
import { Navbar } from './components/navbar'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/create-movie" element={<CreateMovie/>}></Route>
          <Route path="/saved-movies" element={<SavedMovies/>}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
