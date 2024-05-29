import ContainCard from "../components/ContainCard";
import { Box, Typography } from "@mui/material";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";

const Favorites = () => {
    //obtengo el estado del context
    const { favorites } = useContext(FavoritesContext);
    console.log('favoritas', favorites);

  return (
    <Box sx={{ margin:'20px', justifyContent:'center', padding:8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', fontWeight:'bold'}}>Mis Favoritas</Typography>
        {favorites.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '20px'}}>Aún no tenes películas Favoritas</Typography>
        ) : (
            // muestro las favoritas reutilizando el containCard
            <ContainCard movies={favorites}/>
        )}
    </Box>
  )
}
export default Favorites;