import { useState } from "react";
import axios from 'axios';

export default function useMovieApi() {
    const [movies, setMovies] = useState([]);
    const [url, setUrl] = useState('');

    async function getMovies(url) {
        try{
            const { data } = await axios(url);
            setMovies(data.results);
            setUrl(url);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        movies,
        getMovies,
        url
    };
}