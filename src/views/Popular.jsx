import { useEffect, useState } from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";
import CustomPagination from "../components/CustomPagination";
import { Box, Typography } from "@mui/material";

const Popular = () => {
    const { movies, getMovies, totalPages } = useMovieApi();
    const [currentPage, setCurrentPage] = useState(1);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`;
        getMovies(url);
    }, [currentPage]);
    console.log(movies);

    return (
        <Box sx={{ margin: '20px', paddingTop: 8, justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Populares</Typography>
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
