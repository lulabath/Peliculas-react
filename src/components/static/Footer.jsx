import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'inherit',
      color: '#EAEAEC',
      padding: '20px',
      margin: '40px 0 10px 0',
      bottom: '0px',
      width: '100vw',
      textAlign: 'center',
      left: '0px',
    }}>
      <Typography>Hecho por Luna Agustina Bath <FavoriteIcon sx={{ verticalAlign: 'middle'}} /></Typography>
    </footer>
  )
}