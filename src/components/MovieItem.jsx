import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MovieItem.css';

function MovieItem({ movie }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isMovieFavorite = favorites.some(fav => fav.id === movie.id);
    setIsFavorite(isMovieFavorite);
  }, [movie.id]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isMovieFavorite = favorites.some(fav => fav.id === movie.id);

    if (isMovieFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      console.log(`Removed ${movie.title} from favorites`);
    } else {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
      console.log(`Added ${movie.title} to favorites`);
    }
  };

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-item-movie" onClick={handleClick}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <FaHeart 
        className={`favorite-icon ${isFavorite ? 'favorited' : ''}`} 
        onClick={handleFavoriteClick} 
      />
      <div className="movie-info">
        <h5>{movie.title}</h5>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired
  }).isRequired
};

export default MovieItem;
