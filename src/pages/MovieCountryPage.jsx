import MovieCard from '@/components/movie/MovieCard';
import { API_URL } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import "./style/page.scss";
import LoadingSpin from '@/components/loading/LoadingSpin';
import Pagination from '@/components/pagination/Pagination';

const MovieCountryPage = () => {
    const paramsSlug = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true); // Start loading
            try {
                const response = await axios.get(`${API_URL.CATEGORY}`, {
                    params: {
                        country: paramsSlug?.slug,
                        page: currentPage,
                    }
                });
                
                setMovies(response.data?.items || []);
                setTotalPages(response.data?.pagination?.totalPages || 0);
            } catch (error) {
                console.error("Error fetching movies:", error);
                setMovies([]);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, [paramsSlug.slug, currentPage]);

    const handlePageChange = (page) => {
        setSearchParams({ page }); // Update the URL with the new page number
    };

    if (loading) return <LoadingSpin />;

    return (
        <div className="content-page">
            <h1 className="title-movie-page">
                Danh sách phim 
            </h1>
            <div className="list-movie-render">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))
                ) : (
                    <div>No movies found.</div>
                )}
            </div>
            <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage}/>
        </div>
    );
};

export default MovieCountryPage;
