import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);//acá estaría guardando el estado del menú. para controlar si esta abierto o cerrado

  const menuItems = [
    //acá tengo que poner los elementos del menu y las rutas a las que nos va a dirigir en forma de  obj
    { text: 'Inicio', path: '/' },
    { text: 'Ultimos lanzamientos', path: '/latestReleases' },
    { text: 'Populares', path: '/popular' },
    //{ text: 'Buscar', path:'/search'},

  ];

  const drawer = (
    <Box
      onClick={() => setDrawerOpen(false)} //aca lo cierro cuando hago click>
      onKeyDown={() => setDrawerOpen(false)}//aca lo cierro cuando apreto cualquier tecle (un buen plus para la ux)
      sx={{
        zIndex:'200',
        backgroundColor: 'rgba(15, 15, 15, 1)',
        backdropFilter: 'blur(6px)',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 8px 24px 0px',
        minHeight: '100vh',
        color: 'rgba(199, 191, 205, 0.62)'


      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path}>{/* lo dejo con link por ahora, chequear apuntes de clase explicacion link y useNav.*/}
             <ListItemText primary={item.text} />
           </ListItem>
          //<Link to={item.path}>{item.text}</Link> utilizando los componentes que me ofrece MUI me ahorro cstomizar el link .
        ))}
      </List>
    </Box>
  )



  return (
    <AppBar position='fixed' style={{ backgroundColor: "rgba(0,0,0, 0.6)", color: "#EAEAEC", padding: '0px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h6' style={{ marginLeft: '0px' }}>
          MOVIE APP <LocalMoviesIcon sx={{ verticalAlign: 'middle' }} />
        </Typography>
        <Box sx={{ display: {xs:'none', sm:'block'}, color:'inherit' }}>
          {/* estos son mis buttons de nav para las pantallas medianas y grandes. */}
        {menuItems.map((item) => (
          <Button color='inherit' component={Link} to={item.path} key={item.text}>{item.text}</Button>
        ))}
        </Box>
        {/*acá hago que sea visible mi menú hamburguesa en pantallas chicas*/}
        <IconButton
         color='inherit'
         aria-label='open drawer'
         onClick={() => setDrawerOpen(true)}//abre cuando le hago el click 
         sx={{ display: {xs:'block', sm:'none'} }}
         >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/*buscar en doc de mui como posisionarlo del lado derecho*/}
      <Drawer  anchor='right' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}