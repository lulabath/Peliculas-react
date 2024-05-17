import { useEffect } from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";
import '../App.css';

const Home = () => {
    const { movies, getMovies } = useMovieApi();

    useEffect(() => {
        getMovies('https://api.themoviedb.org/3/discover/movie?api_key=f75090a7829322f57b831594af1564ba');
    }, []); // creería que la dependencia queda vecía para que se ejecute solo cuando de monta el componente. A chequear!
    console.log(movies)
   

    return (
        <div>
            {/*acá retornaría el total de las peliculas. Iría el map acá */}
            <ContainCard movies={movies}/>
        </div>
    )
};

export default Home;
//por ahora retorno el h2 para ver que se muestre. Queda hacer la estructutra de las cards/carrusel/grid para renderizarlas.
