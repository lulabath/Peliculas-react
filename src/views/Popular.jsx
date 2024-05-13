import { useEffect } from 'react';

//const apiKey = 'f75090a7829322f57b831594af1564ba';
export default function Popular() {
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=f75090a7829322f57b831594af1564ba')
        .then(response => response.json())
        .then(data => console.log(data.results))
        .catch(error => console.error('Error en el llamado de populares', error));
    }, []);

  return (
    <div>
      polulares
        {/* acá retornaría los ultimos lanzamientos */}
    </div>
  );
};
