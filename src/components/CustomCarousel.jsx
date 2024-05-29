import { Box, Typography, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const beResponsive = {
  superDesktop: {
    items: 1,
    breakpoint: { min: 1024, max: 4000 }
  },
  desktop: {
    items: 1,
    breakpoint: { min: 768, max: 1024 }
  },
  tablet: {
    items: 1,
    breakpoint: { min: 464, max: 768 }
  },
  mobile: {
    items: 1,
    breakpoint: { min: 0, max: 464 }
  }
};

const CustomCarousel = ({ movies }) => {
  return (
    <Carousel responsive={beResponsive} infinite={true} autoPlay={true}>
      {movies.map(movie => (
        <Box key={movie.id} 
        sx={{ 
          padding: 6, 
          height: '75vh', 
          backgroundSize: 'cover',
           textAlign: 'center', 
           backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
           display:'flex',
           alignItems:'center',
           justifyContent:'left',
           position: 'relative'

           }}>
          {/*aca iría la img, el titulo y el button para redirigir*/}
          <Box style={{
            width: { xs: '90%', sm: '250px' },
            height: { xs: 'auto', sm: '300px' },
            padding:2,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginTop: 'auto'
          }}>
            {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} style={{ width: '90%', height: '80%' }} /> */}
            
            <Button component={Link} 
                    to={`/detail/${movie.id}`}  sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', margin:'5px', display:'flex', flexDirection:'row'}}>
              <Typography variant='h7' fontWeight='bold' marginRight='1px' padding='2px'>Ir a</Typography>
              <Typography variant='h6' color='#CBCBCD' fontWeight='bold' marginRight='1px' padding='2px'>{movie.title}</Typography>
              {/*no se si seguir mentiendo link como component de mui o navigate... a chequear! */}
              <Typography variant='h7' fontWeight='bold' marginRight='1px' padding='2px'>la pelicula</Typography>
            </Button>
          </Box>
        </Box>
      ))}
    </Carousel>
  )
}
export default CustomCarousel;