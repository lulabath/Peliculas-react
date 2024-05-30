import { useEffect, useState } from "react";
import useMovieApi from "../hooks/useMovieApi";
import ContainCard from "../components/ContainCard";
import CustomPagination from "../components/CustomPagination";
import { Box, Button, List, ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom"
import CustomCarousel from "../components/CustomCarousel";

const Home = () => {
    const { movies, getMovies, totalPages } = useMovieApi();
    const [currentPage, setCurrentPage] = useState(1);

    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(apiKey);
    //console.log(import.meta.env);
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`;
        getMovies(url);
    }, [currentPage, getMovies, apiKey]);

    //pruebo primero con la lista de populares
    const popularMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
    const topRatedMovie = [...movies].sort((a, b) => b.vote_average - a.vote_average);

    return (
        <Box sx={{ margin: 0, justifyContent: 'center', padding: 0, width: '100%', minHeight: '100vh', backgroundColor: '#04011A', display: 'flex', flexDirection: 'column' }}>
            <CustomCarousel movies={movies.slice(10, 20)} />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', sm: 'space-between' }, margin: '60px' }}>
                <Box sx={{ flex: '1', margin: '10px', maxWidth: { xs: '95%', sm: '45%' }, backgroundColor: 'rgba(15, 15, 15, 1)' }}>
                    <Typography sx={{ marginLeft: 'auto', fontWeight:'bold', textAlign: 'center', marginBottom:'5px'  }} variant="h5">Populares</Typography>
                    <List style={{ maxHeight: '250px', overflow: 'auto' }}>
                        {popularMovies.slice(0, 10).map(movie => (
                            <div key={movie.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt={movie.title} src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} />
                                    </ListItemAvatar>
                                    <ListItemText primary={movie.title}></ListItemText>
                                    <Button
                                        variant='contained'
                                        component={Link}
                                        to={`/detail/${movie.id}`}
                                    >
                                        Ver
                                    </Button>
                                </ListItem>
                            </div>
                        ))}
                    </List>
                </Box>
                <Box sx={{ flex: '1', margin: '10px', maxWidth: { xs: '95%', sm: '45%' }, backgroundColor: 'rgba(15, 15, 15, 1)', justifyContent: 'center' }} >
                    <Typography sx={{ marginLeft: 'auto', fontWeight:'bold', textAlign: 'center', marginBottom:'5px' }} variant="h5">Mejor puntadas</Typography>
                    <List sx={{ maxHeight: '250px', overflow: 'auto' }}>
                        {topRatedMovie.slice(0, 10).map(movie => (
                            <div key={movie.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt={movie.title} src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} />
                                    </ListItemAvatar>
                                    <ListItemText primary={movie.title} />
                                    <Button
                                        variant='contained'
                                        component={Link}
                                        to={`/detail/${movie.id}`}
                                    >
                                        Ver
                                    </Button>
                                </ListItem>
                            </div>
                        )

                        )}
                    </List>
                </Box>
            </Box>
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
