import { useEffect } from 'react';
//const apiKey = 'f75090a7829322f57b831594af1564ba';

export default function LatestReleases() {
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f75090a7829322f57b831594af1564ba')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching de latest releases', error));
    }, []);

  return (
    <div>
      ultimos
      {/* acá retornaría los ultimos lanzamientos */}
    </div>
  )
}
