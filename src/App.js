import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import "./movieApp.css";
import SearchIcon from "./movieSearch.svg";
import MovieCard from "./MovieCard";
//3e37e2eb
//Trying to learn Git

const API_URL = "http://www.omdbapi.com?apikey=3e37e2eb";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const movie1 = {
    Title: "Spider-Man Title Reveal",
    Year: "2021",
    imdbID: "tt14122734",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg",
  };
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon} 
        alt="Search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found </h2>
        </div>
      )}
    </div>
  );
};

export default App;
