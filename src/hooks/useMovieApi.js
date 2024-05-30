import { useState } from "react";
import axios from 'axios';

const useMovieApi = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);


    async function getMovies(url) {
        try{
            const { data } = await axios(url);
            console.log(data);
            setMovies(data.results);
            setTotalPages(data.total_pages);
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    
    }
    async function searchMovies(query, page=1) {
        const apiKey = import.meta.env.VITE_API_KEY;
        if(!apiKey) {
            console.error('apkiKey', error);
            return
        }
        try {
            const { data } = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}&page=${page}`);
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