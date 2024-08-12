import React, { useEffect } from 'react';
import './style/movie.scss';
import MovieCard from './MovieCard';
import axios from 'axios';
import { API_URL } from '@/utils/constant';

const NewMoiveList = () => {
  const [movie, setMovie] = React.useState([]);
useEffect(() => {
  async function fetchMovie() {
    const response = await axios.get(`${API_URL.ALL_MOVIES}`)
    setMovie(response.data?.items)
    
  }

  fetchMovie()
},[])
if (!movie) return <div>Loading</div>
  return (
    <div className="list-new-movie">
      <h1 className="title-movie-page">Danh sách phim mới</h1>
      <div className="list-movie-render">
      {movie.slice(0, 10).map((movie, index) => (
        <MovieCard key={index} movie={movie}/>
      ))}
       
      </div>
    </div>
  );
};

export default NewMoiveList;
