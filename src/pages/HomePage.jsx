import React from 'react';
import './style/page.scss';
import Banner from '@/components/movie/Banner';
import "./style/page.scss"
import NewMoiveList from '@/components/movie/NewMoiveList';

const HomePage = () => {
  return (
    <div className='content-page'>
      <Banner></Banner>
      <div className="home-page-content">
        <NewMoiveList></NewMoiveList>
      </div>
    </div>
  );
};

export default HomePage;
