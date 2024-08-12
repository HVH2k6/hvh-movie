import React from 'react';
import HeartIcon from '../icon/HeartIcon';
import "./style/button.scss"

const ButtonFavourite = ({className}) => {
    return (
        <button className={`button-favourite ${className}`}>
            <HeartIcon className={'heart-icon'}/>
        </button>
    );
};

export default ButtonFavourite;