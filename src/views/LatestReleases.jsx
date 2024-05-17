import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";

const LatestReleases = () => {
    const { movies, getMovies } = useMovieApi();

    useEffect(() => {
        getMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=f75090a7829322f57b831594af1564ba')
    }, []); // creería que la dependencia queda vecía para que se ejecute solo cuando de monta el componente. A chequear!
    console.log(movies);
    return (
        <div>
            ultimos
            {/* acá retornaría los ultimos lanzamientos, mapeo y recordar key y id de cada peli */}
            <ContainCard movies={movies}/>
        </div>
    )
}
export default LatestReleases;
