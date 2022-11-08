import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';

const MovieAddictionalInfo = ({ location, movieId }) => {
  return (
    <>
      <h2>Additonal Information</h2>
      <ul>
        <li>
          <NavLink to="cast" state={{ ...location.state, movieId: movieId }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ ...location.state, movieId: movieId }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

MovieAddictionalInfo.propTypes = {
  location: PropTypes.object.isRequired,
  movieId: PropTypes.string.isRequired,
};

export default MovieAddictionalInfo;
