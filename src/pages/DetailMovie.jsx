import React from 'react';
import './style/page.scss';
import Header from '@/components/layout/Header';

import './style/page.scss';

const DetailMovie = () => {
  return (
    <div className='content-page'>
      <div className='detail-page'>
        <div className='detail-image'>
          <img
            src='https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='detail-image-src'
          />
        </div>
        <div className='detail-info'>
          <h1 className='detail-info-title'>Avenger: Endgame</h1>
          <div className='detail-info-overview'>
            <span>2019</span>
            <span>HD</span>
            <span>7.4</span>
          </div>
          <p className='detail-info-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            officiis alias iusto accusantium nesciunt minus at doloremque soluta
            deleniti, eos labore repellat illo omnis quibusdam exercitationem,
            vitae non? Praesentium, vero?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
