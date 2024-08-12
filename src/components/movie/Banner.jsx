import React, { useEffect } from 'react';
import ButtonWatchNow from '../button/ButtonWatchNow';
import ButtonFavourite from '../button/ButtonFavourite';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './style/movie.scss';
import axios from 'axios';
import { API_URL } from '@/utils/constant';
const Banner = () => {
  const [movie, setMovie] = React.useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(`${API_URL.ALL_MOVIES}`);
      setMovie(response.data?.items);
    }

    fetchMovie();
  }, []);
  if (!movie) return <div>Loading</div>;
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 5000 }}
    >
      {movie.slice(0, 5).map((movie, index) => (
        <SwiperSlide key={index}>
          <div className='banner'>
            <img
              src={`${API_URL.IMAGE_PATH + movie.thumb_url}`}
              alt=''
              className='banner-image'
              loading='lazy'
            />
            <div className='banner-info'>
              <h2 className='banner-title'>{movie.name}</h2>
              <div className='banner-overview'>
                <span>{movie.year}</span>
                <span>{movie.lang}</span>
                <span>{movie.quality}</span>
              </div>
              <div className='banner-action'>
                <ButtonWatchNow path={`/movie/${movie.slug}`} title='Xem ngay' />
                <ButtonFavourite />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
