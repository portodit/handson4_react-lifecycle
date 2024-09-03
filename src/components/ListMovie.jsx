import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MovieItem from './MovieItem.jsx';
import './ListMovie.css';

export default class ListMovie extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      if (!this.props.search) {
        this.fetchMovies();
        return;
      }

      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d64465f835d027114fd469afd4e2de72&query=${this.props.search}`)
        .then((response) => {
          this.setState({
            movies: response.data.results,
          });
        });
    }
  }

  componentWillUnmount() {
    this.setState({
      movies: [],
    });
  }

  fetchMovies() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72')
      .then((response) => {
        this.setState({
          movies: response.data.results,
        });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

ListMovie.propTypes = {
  search: PropTypes.string,
};
