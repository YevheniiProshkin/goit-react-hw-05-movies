import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from '../services/API';
import MovieDescription from '../components/MovieInfo';
import {
  AdditonalInfoItem,
  AdditonalInfoList,
  Link,
} from '../styles/MovieList.styled';
import '../styles/styled.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = location.state?.from ?? '/goit-react-hw-05-movies';

  useEffect(() => {
    async function getFilmDetails() {
      const film = await getMovieById(movieId);
      setMovieDetails(film);
    }
    getFilmDetails();
  }, [movieId]);

  if (movieDetails === null) {
    return;
  }

  return (
    <main>
      <div>
        <NavLink className="backLink" to={backLink}>
          Go Back
        </NavLink>
        <MovieDescription
          movieDetails={movieDetails}
          location={location}
          movieId={movieId}
        />
        <h2 className="article">Additonal Information</h2>
        <AdditonalInfoList>
          <AdditonalInfoItem>
            <Link to="cast" state={{ ...location.state, movieId: movieId }}>
              Cast
            </Link>
          </AdditonalInfoItem>
          <AdditonalInfoItem>
            <Link to="reviews" state={{ ...location.state, movieId: movieId }}>
              Reviews
            </Link>
          </AdditonalInfoItem>
        </AdditonalInfoList>
        <Outlet />
      </div>
    </main>
  );
}
