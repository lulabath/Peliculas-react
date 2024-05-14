import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#5F9EA0',
      color: 'white',
      padding: '20px',
      top: '0px',
      width: '100vw',
      textAlign: 'left',
      margin:'0px',
    }}>
      <p>Movie App <FavoriteBorderIcon sx={{ verticalAlign: 'middle' }} /></p>
    </header>
  )
}
