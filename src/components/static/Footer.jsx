
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#5F9EA0',
      color: 'white',
      padding: '20px',
      position: 'fixed',
      bottom: '0px',
      width: '100vw',
      textAlign: 'center',
      left:'0px',
    }}>
      <p>Hecho por Luna Agustina Bath <FavoriteBorderIcon sx={{ verticalAlign: 'middle' }} /></p>
    </footer>
  )
}