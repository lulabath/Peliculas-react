import { useEffect, useState } from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";
import CustomPagination from "../components/CustomPagination";
import { Box } from "@mui/material";

const Popular = () => {
    const { movies, getMovies, totalPages } = useMovieApi();
    const [ currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const url = (`https://api.themoviedb.org/3/movie/popular?api_key=f75090a7829322f57b831594af1564ba&page=${currentPage}`)
        getMovies(url);
    }, [currentPage]); // creería que la dependencia queda vecía para que se ejecute solo cuando de monta el componente. A chequear!


    console.log(movies);
    return (
        <Box>
            polulares
            {/* acá retornaría las peliculas populares, con el mapeoooo(recordar key y movie.id)  */}
            <ContainCard movies={movies} />
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
        </Box>
    );
};
export default Popular;
