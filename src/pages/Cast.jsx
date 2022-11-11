import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../services/API';
import { CastItem, CastList } from 'styles/Cast.styled';

export default function MovieCast() {
  const [filmCast, setFilmCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const cast = await getMovieCast(movieId);
      setFilmCast(cast);
    }
    getCast();
  }, [movieId]);

  if (!filmCast) {
    return;
  }

  return (
    <main>
      <div>
        <CastList>
          {filmCast &&
            filmCast.map(({ id, profile_path, name, character }) => (
              <CastItem key={id}>
                <img
                  src={
                    profile_path &&
                    `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                  width="120"
                  height=""
                />
                <p>{name}</p>
                <p>Character:{character}</p>
              </CastItem>
            ))}
        </CastList>
      </div>
    </main>
  );
}
