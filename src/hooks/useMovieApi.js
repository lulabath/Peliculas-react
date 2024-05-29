import { useState } from "react";
import axios from 'axios';

const useMovieApi = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    async function getMovies(url) {
        try{
            const { data } = await axios(url);
            setMovies(data.results);
            setTotalPages(data.total_pages);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    
    }
    async function searchMovies(query, page=1) {
        try {
            const apiKey = 'f75090a7829322f57b831594af1564ba';
            const { data } = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
            setMovies(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error(error);
        }
    }


    return {
        movies,
        getMovies,
        searchMovies,
        totalPages,
    };
}

export default useMovieApi;