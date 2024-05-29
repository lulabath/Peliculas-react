import { createContext, useContext, useState } from 'react';

//lo creamos y lo guardamos en una variable
const FavoritesContext = createContext();

//creo la funcion que provee a la app del contexto y a los demás componentes
const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  //funcion para poder agregar las pelis a favoritos
  const addFavorite = (movie) => {
    //actualizo el estado agregando la peli a la lista
    setFavorites([...favorites, movie]);
  };

  //funcion para eliminar la peli de fav
  const removeFavorite = (movieId) => {
    //actualizo el estado filtrando la peli que quiero remover con el ID.
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  //esta me sirve oara constatar si una peli está en favoritos. tamb uso el id
  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite}}>{children}</FavoritesContext.Provider>
  )
};
//acá tengo que exportar tanto el proveedor como el context de fav
export {FavoritesProvider, FavoritesContext };