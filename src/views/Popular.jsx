import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";

const Popular = () => {
    const { movies, getMovies } = useMovieApi();

    useEffect(() => {
        getMovies('https://api.themoviedb.org/3/movie/popular?api_key=f75090a7829322f57b831594af1564ba')
    }, []); // creería que la dependencia queda vecía para que se ejecute solo cuando de monta el componente. A chequear!
    console.log(movies);
    return (
        <div>
            polulares
            {/* acá retornaría las peliculas populares, con el mapeoooo(recordar key y movie.id)  */}
            <ContainCard movies={movies} />
        </div>
    );
};
export default Popular;
