import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Pagination = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pagesPerGroup = 7;

    const currentGroup = Math.ceil(currentPage / pagesPerGroup);
    const startPage = (currentGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <ul className='pagination'>
            {startPage > 1 && (
                <li className='pagination-item'>
                    <button onClick={() => handlePageClick(startPage - pagesPerGroup)}>
                        &laquo; Previous
                    </button>
                </li>
            )}
            {pages.map(pageNumber => (
                <li key={pageNumber} className='pagination-item'>
                    <NavLink 
                        to={`?page=${pageNumber}`} 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={() => handlePageClick(pageNumber)}
                    >
                        {pageNumber}
                    </NavLink>
                </li>
            ))}
            {endPage < totalPages && (
                <li className='pagination-item'>
                    <button onClick={() => handlePageClick(startPage + pagesPerGroup)}>
                        Next &raquo;
                    </button>
                </li>
            )}
        </ul>
    );
};

export default Pagination;
