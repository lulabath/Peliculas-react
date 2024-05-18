import { Card, CardMedia, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const ContainCard = ({ movies }) => {

    return (
        <Grid container spacing={1} justifyContent={'center'} sx={{ padding: 1, width: '100vw', margin:'0'}}>
            {movies.map(movie => (
                <Grid item xs={4} sm={3} md={2} lg={2} xl={2} key={movie.id}>
                    {/* uso el componente link de MUI para la navegacion de ruta */}
                    <MuiLink 
                    component={Link} 
                    to={`/detail/${movie.id}`}
                     sx={{ textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover .MuiCard-root': {
                            transform: 'scale(1.05)',
                            transition: 'transform 0.3s ease-in-out',
                        }
                      }}>
                        <Card style={{ height: '95%', width:'100%', borderRadius:0 }}>
                            <CardMedia
                                component="img"
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            />
                        </Card>
                    </MuiLink>
                </Grid>
            ))}
        </Grid>
    )
}

export default ContainCard;