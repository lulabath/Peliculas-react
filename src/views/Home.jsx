import { useEffect } from "react";
import axios from "axios";

export default function Home() {
    useEffect(() => {
        const apiKey = 'f75090a7829322f57b831594af1564ba';

        axios(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`) //logro hacer el llamado del total a la api.
        .then(response => {
            console.log(response.data.results); //logro ver en consola el resultado.
        })
        .catch(error => {
            console.error('problemas trayendo datos de la api', error);
        });

    }, []);

    return (
        <div>
            <h2>Moviesss</h2>
        </div>
    )
};
//por ahora retorno el h2 para ver que se muestre. Queda hacer la estructutra de las cards/carrusel/grid para renderizarlas.
