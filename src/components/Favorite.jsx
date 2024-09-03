import { useEffect, useState } from 'react';
import './Favorite.css';
import { FaTrash } from 'react-icons/fa';

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      {favorites.length > 0 ? (
        favorites.map(movie => (
          <div className="movie-item" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h5>{movie.title}</h5>
              <FaTrash 
                className="remove-icon" 
                onClick={() => handleRemoveFavorite(movie.id)} 
                title="Remove from favorites"
              />
            </div>
          </div>
        ))
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
  );
}

export default Favorite;
