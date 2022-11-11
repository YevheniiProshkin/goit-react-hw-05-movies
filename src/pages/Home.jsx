import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/API';
import MainFilmList from 'components/MovieList';
import '../styles/styled.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <>
      <h1 className="article">Tranding today</h1>
      <MainFilmList movieList={movies} />
    </>
  );
}
