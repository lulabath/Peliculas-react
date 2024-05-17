import { Card, CardMedia, Grid} from "@mui/material";

const ContainCard = ({ movies }) => {

    return (
        <Grid container spacing={1} justifyContent={'center'} sx={{ padding: 2, width:'100%'}}>
            {movies.map(movie => (
                <Grid item xs={4} sm={3} md={2} lg={2} xl={2} key={movie.id}>
                    <Card style={{ height: '100%' }}>
                        <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        style={{ height:'auto', width:'100%', objectFit: 'cover'}}
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default ContainCard;