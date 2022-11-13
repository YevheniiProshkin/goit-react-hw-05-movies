import { useEffect, useState } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
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
  // const backLink = location.state?.from ?? '/goit-react-hw-05-movies';
  const backLink = location.state?.from ?? '/';

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
        <Link className="backLink" to={backLink}>
          Go Back
        </Link>
        <MovieDescription
          movieDetails={movieDetails}
          location={location}
          movieId={movieId}
        />
        <h2 className="article">Additonal Information</h2>
        <AdditonalInfoList>
          <AdditonalInfoItem>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </AdditonalInfoItem>
          <AdditonalInfoItem>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </AdditonalInfoItem>
        </AdditonalInfoList>
        <Outlet />
      </div>
    </main>
  );
}
