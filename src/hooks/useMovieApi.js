import { useState } from "react";
import axios from 'axios';

const useMovieApi = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const apiKey = import.meta.env.VITE_API_KEY;

    async function getMovies(url) {
        try{
            const { data } = await axios(url);
            console.log(data);
            setMovies(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.log('error en fetch', error);
        }
    
    }
    async function searchMovies(query, page=1) {
        try {
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