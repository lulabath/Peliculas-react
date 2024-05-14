import { useState } from "react";
import axios from 'axios';

export default function useMovieApi() {
    const [movies, setMovies] = useState([]);

    async function getMovies(url) {
        try {
            const { data } = await axios(url);
            setMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        movies,
        getMovies,
    };
}