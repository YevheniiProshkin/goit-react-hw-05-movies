import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/API';
import { Info } from 'styles/MovieInfo.styled';
import '../styles/styled.css';

export default function Reviews() {
  const [reviewInfo, setReviewInfo] = useState([]);
  // const location = useLocation();
  // const movieId = location.state.movieId;
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewInfo() {
      const review = await getMovieReviews(movieId);
      setReviewInfo(review);
    }
    getReviewInfo();
  }, [movieId]);
  return (
    <section>
      <div>
        {reviewInfo.length !== 0 ? (
          <ul>
            {reviewInfo.map(({ id, author, content }) => (
              <li key={id}>
                <Info>
                  <b>{author}</b>
                </Info>
                <Info>{content}</Info>
                <br />
              </li>
            ))}
          </ul>
        ) : (
          <p className="reviews">Not yet reviews</p>
        )}
      </div>
    </section>
  );
}
