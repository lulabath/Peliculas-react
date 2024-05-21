import { useEffect, useState} from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";
import CustomPagination from "../components/CustomPagination";
import { Box } from "@mui/material";

const Home = () => {
    const { movies, getMovies, totalPages } = useMovieApi();
    const [ currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const url = (`https://api.themoviedb.org/3/discover/movie?api_key=f75090a7829322f57b831594af1564ba&page=${currentPage}`);
        getMovies(url);
    }, [currentPage]);

    return (
        <Box>
            {/*acá retornaría el total de las peliculas. Iría el map acá */}
            <ContainCard movies={movies} />
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
        </Box>
    );
};

export default Home;
