import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import useMovieApi from '../hooks/useMovieApi';
import ContainCard from '../components/ContainCard';
import CustomPagination from '../components/CustomPagination';

const Search = () => {
    const [query, setQuery] = useState('');
    const { movies, searchMovies, totalPages } = useMovieApi();
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearch = (event) => {
        const value = event.target.value;
        setQuery(value);
        setCurrentPage(1);
        if (value) {
            searchMovies(value, 1);
        }
        console.log(value);
    };

    useEffect(() => {
        if (query) {
            searchMovies(query, currentPage)
        }

    }, [currentPage]);

    return (
        <Box
            sx={{
                width: '80%',
                maxWidth: '100%',
                margin: 'auto',
                color: 'white',
            }}
        >
            <TextField
                fullWidth
                label="Busca por título"
                variant="standard"
                id='fullWidth'
                value={query}
                onChange={handleSearch}
                sx={{
                    marginTop: '15%',
                    '& .MuiInputLabel-root': { fontSize: '1.50rem', fontWeight: 'bold' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'white' },
                    '& .MuiInputBase-input': { color: 'white', height: '40px', fontSize: '1.5rem' },
                    '& label.Mui-focused': { color: 'white' },
                }}
                focused
            />
            {movies.length > 0 && <ContainCard movies={movies} />}
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </Box>

    );
}
export default Search;