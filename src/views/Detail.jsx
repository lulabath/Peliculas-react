import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams(); //capto el id de la url que corresponde a la pelicula
    //estados para guardar datos de pelicula, url del trailer, para controlar si se esta viendo el trailer
    const [movie, setMovie] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);

    //useEfect para hacer la solicitud de datos cuando el comp se monta o cambia el id. y armo la funcion pa' llamar a la api y pedir los datos de la movie.
    useEffect(() => {
        const fetchMovie = async () => {
            try {//le agrego la extensión para que la respuesta sea en español, por el overview
                const { data } = await axios(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzUwOTBhNzgyOTMyMmY1N2I4MzE1OTRhZjE1NjRiYSIsInN1YiI6IjY2NDE1MzQ4NzQzZWE1M2FhMTU5YzI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHv44mHLPO3FPA0kvYJOnNT-oMSG2YVifL1HIz7n3YE'
                    }
                });
                setMovie(data);
                console.log(data)

                //en este mismo useEffect hago el llamado de los videos
                const videoResponse = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-ES`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzUwOTBhNzgyOTMyMmY1N2I4MzE1OTRhZjE1NjRiYSIsInN1YiI6IjY2NDE1MzQ4NzQzZWE1M2FhMTU5YzI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHv44mHLPO3FPA0kvYJOnNT-oMSG2YVifL1HIz7n3YE'
                    }
                });

                console.log(videoResponse.data);
                //encuentro el video tipo trailer y armo la url del video
                const trailer = videoResponse.data.results.find(video => video.type === 'Trailer');
                setTrailerUrl(trailer ? `https://www.youtube.com/embed/${trailer.key}` : null);

            } catch (error) {
                console.error("Error fetch data detail", error);
            }
        };
        fetchMovie();
    }, [id])// pongo id como dependencia para que me ejecute la funcion cuando cambia - actualice

    if (!movie) return <div>Loading..{/* buscar un loading lindo */}</div>;

    const handleBackClick = () => {
        console.log('blablaback');
    };
    const handleTrailerClick = () => {
        setShowTrailer(true);
        console.log('blablatrailer');
    };

    return (
        <Box
            sx={{/*aca agregaria los estilos del contenedor principal*/
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '2px',
                marginBottom: '10px'
            }}
        >
            {/* imagen de fondo, la que dice backdrop_path */}
            <Box
                sx={{/*estilos del box con la info y el trailer */
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '2px',
                    borderRadius: '2px',
                    maxWidth: '70%',
                    maxHeight: { xs: '80%', sm: '80%' }
                }}
            >
                <Box
                    sx={{ 
                        flex: '1px',
                        display: 'flex',
                        padding: '2px',
                        color: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginBottom: { xs: '2', sm: '0' },
                        marginLeft: '2px'
                    }}
                >
                    {/*estilos devlos textos :)*/}
                    <Typography variant="h4" sx={{ marginBottom: 2 }}>
                        {movie.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        {movie.overview}
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                        Géneros:
                    </Typography>
                    <Typography variant="body1" sx={{marginBottom: 2}}>
                        {movie.genres.map((genre) => genre.name).join(',')}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                        <Button variant='contained' onClick={handleBackClick}>
                            Volver
                        </Button>
                        <Button variant='contained' onClick={handleTrailerClick}>
                            Ver tráiler
                        </Button>
                    </Box>
                </Box>
                <Box
                    component='img'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    sx={{
                        width: { xs:'0', sm: '250px' },
                        height: { xs:'0', sm: 'auto' },
                        marginLeft: { sm: '2px' },
                        borderRadius: '8px',
                    }}
                />
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: '2', mt: '2' }}>
                    <Button variant='contained' onClick={handleBackClick} fullWidth>
                        Volver
                    </Button>
                    <Button variant='contained' onClick={handleTrailerClick} fullWidth>
                        Ver tráiler
                    </Button>
                </Box>
            </Box>
            {/*contenedor del trailer*/}
            {showTrailer && trailerUrl &&(
                <Box
                    sx={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        width: '100vw',
                        backgroundColor:'rgba(0, 0, 0, 0.8)'
                    }}
                >
                    <iframe
                        src={trailerUrl}
                        title='`${movie.title}` - Trailer'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        height='315px'
                        width='565px'
                    ></iframe>
                    <Button
                        variant="Contained"
                        onClick={() => setShowTrailer(false)}
                        sx={{ position: 'absolute', bottom: '30px', right: '30px' }}
                    >
                        Cerrar
                    </Button>
                </Box>
            )}
        </Box>
    );
};
export default Detail;