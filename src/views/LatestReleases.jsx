import { useEffect, useState } from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";
import CustomPagination from "../components/CustomPagination";
import { Box, Typography } from "@mui/material";

const LatestReleases = () => {
    const { movies, getMovies, totalPages } = useMovieApi();
    const [ currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
        const url = (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`)
        getMovies(url);
    }, [currentPage]); // creería que la dependencia queda vecía para que se ejecute solo cuando de monta el componente. A chequear!
    //console.log(movies);

    return (
        <Box sx={{ margin: '20px',paddingTop:8, justifyContent:'center'}}>
            {/* faltan estilar varias cositas. no olvidarr */}
            <Typography variant="h4" sx={{fontWeight:'bold', textAlign: 'center', marginBottom:'20px'}}>Últimos lanzamientos</Typography>
            {/* acá retornaría los ultimos lanzamientos, mapeo y recordar key y id de cada peli */}
            <ContainCard movies={movies}/>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
        </Box>
    )
}
export default LatestReleases;
