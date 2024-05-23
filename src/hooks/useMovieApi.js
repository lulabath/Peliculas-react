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
    return {
        movies,
        getMovies,
        totalPages
    };
}

export default useMovieApi;