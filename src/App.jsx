import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ListMovie from './components/ListMovie.jsx';
import Favorite from './components/Favorite.jsx';
import MovieDetail from './components/MovieDetail.jsx'; 
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  return (
    <Router>
      <Navbar />
      <div className="hero-container">
        <h1 className="headline">Kepoin Movie Kesukaan Kamu Hanya di MOVIPY</h1>
        <p className="description">
          MOVIPY adalah platform untuk mencari dan menyimpan film favoritmu. Fitur-fitur: katalog, pencarian, dan favorit.
        </p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Ketik film yang dicari..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/" element={<ListMovie search={search} />} />
      </Routes>
    </Router>
  );
}

export default App;
