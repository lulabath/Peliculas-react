import { Card, CardMedia, Grid, IconButton, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoritesContext } from '../context/FavoritesContext';
import { useContext } from "react";

const ContainCard = ({ movies }) => {
    //obtengo el estado del context y las funciones
    const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
    // asi puedo controlar si una pelicula está o no ya en mi array y la agrego o elimino.
    const handleFavoriteClick = (movie) => {
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id)
        } else {
            addFavorite(movie);
        }
    };

    return (
        <Grid
            container spacing={1}
            justifyContent={'center'}
            sx={{
                width: '100%',
                padding: '20px'
            }}>
            {movies.map(movie => (
                <Grid item xs={4} sm={3} md={2} lg={2} xl={2} key={movie.id}>
                    <MuiLink
                        component={Link}
                        to={`/detail/${movie.id}`}
                        sx={{
                            textDecoration: 'none',
                            cursor: 'pointer',
                            '&:hover .MuiCard-root': {
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease-in-out',
                            }
                        }}>
                        <Card
                            style={{
                                height: '100%',
                                width: '100%',
                                borderRadius: 0,
                                position: 'relative'
                            }}>
                            <CardMedia
                                component="img"
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            />
                            <IconButton
                                onClick={() => handleFavoriteClick(movie)}
                                style={{ position: 'absolute', color: 'white', top: 10, right: 10 }}
                            >
                                {isFavorite(movie.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                        </Card>
                    </MuiLink>
                </Grid>
            ))}
        </Grid>
    )
}
export default ContainCard;