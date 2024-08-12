import { API_URL } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryCategory = () => {
    const [country, setCountry] = React.useState([]);
    
    useEffect(() => {
        async function fetchCountryCategory() {
            const response = await axios.get(`${API_URL.COUNTRY}`);
            setCountry(response.data);
        } 

        fetchCountryCategory();
    },[]);
      
    if (!country) return <>Loading</>;

    return (
        <ul className='header-menu-dropdown'>
            {country?.map((item, index) => (
                <li className='header-menu-dropdown-item' key={index}>
                    
                    <Link to={`/list/${item.slug}`} className='header-menu-dropdown-link' state={item.name}>
                        
                        {item.name}
                        
                    </Link>
                    
                </li>
            ))}
        </ul>
    );
};

export default CountryCategory;
