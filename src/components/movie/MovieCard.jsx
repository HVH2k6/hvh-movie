import React from 'react';
import './style/movie.scss';

import ButtonFavourite from '../button/ButtonFavourite';
import { Link } from 'react-router-dom';
import { API_URL } from '@/utils/constant';


const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
    <Link to={`/movie/${movie.slug}`} className='movie-card-link'>
    <img
        className='movie-card-image'
        src={`${API_URL.IMAGE_PATH + movie.thumb_url}`}
        alt='thumb movie'
        loading='lazy'
      />
      <ButtonFavourite className={'button-favourite-card'} />
      <div className='movie-card-info'>
        <h3>
          {movie.name}
        </h3>
        <div className='movie-card-overview'>
          <span>
            {movie.year}
          </span>
          <span>
            {movie.lang}
          </span>
          <span>
            {movie.quality}
          </span>
        </div>
        
      </div>
    </Link>
    </div>
  );
};

export default MovieCard;
