import React from 'react';
import { Link } from 'react-router-dom';
import "./style/button.scss"


const ButtonWatchNow = ({title,path,className}) => {
    return (
        <button className={`button-watch-now ${className}`}>
            <Link to={path}>{title}</Link>
        </button>
    );
};

export default ButtonWatchNow;