import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams(); //capto el id de la url que corresponde a la pelicula
    const [movie, setMovie] = useState(null)

    //useEfect para hacer la solicitud de datos cuando el comp se monta o cambia el id. y armo la funcion pa' llamar a la api y pedir los datos de la movie.
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const { data } = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=f75090a7829322f57b831594af1564ba`);
                setMovie(data);
            } catch (error) {
                console.error("Error fetch data detail", error);
            }
        };
       fetchMovie(); 
    },[id])// pongo id como dependencia para que me ejecute la funcion cuando cambia - actualice

    if(!movie) return <div>Loading..blabla{/* buscar un loading lindo */}</div>;

  return (
    // provisoriamente muestro esto
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};
export default Detail;