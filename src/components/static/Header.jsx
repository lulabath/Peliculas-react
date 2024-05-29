import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);//acá estaría guardando el estado del menú. para controlar si esta abierto o cerrado

  const menuItems = [
    //acá tengo que poner los elementos del menu y las rutas a las que nos va a dirigir en forma de  obj
    { text: 'Inicio', path: '/' },
    { text: 'Últimos lanzamientos', path: '/latestReleases' },
    { text: 'Populares', path: '/popular' },
    { text: 'Favoritas', path:'/favorites'},
  ];

  const drawer = (
    <Box
      onClick={() => setDrawerOpen(false)} //aca lo cierro cuando hago click>
      onKeyDown={() => setDrawerOpen(false)}//aca lo cierro cuando apreto cualquier tecle (un buen plus para la ux)
      sx={{
        zIndex: '200',
        backgroundColor: 'rgba(15, 15, 15, 1)',
        backdropFilter: 'blur(6px)',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 8px 24px 0px',
        minHeight: '100vh',
        color: 'rgba(199, 191, 205, 0.62)'
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path}>
            {/* lo dejo con link por ahora, chequear apuntes de clase explicacion link y useNav.*/}
            <ListItemText primary={item.text} />
          </ListItem>
          //<Link to={item.path}>{item.text}</Link> utilizando los componentes que me ofrece MUI me ahorro cstomizar el link .
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position='fixed' style={{ backgroundColor: "rgba(0,0,0, 0.6)", padding: '10px 0' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' style={{ margin: '5px', fontWeight: 'bold' }}
          >
            <LocalMoviesIcon
              sx={{ verticalAlign: 'middle', fontWeight: 'bold' }}
            />
            MovieApp
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, color: 'inherit' }} >
            {/* estos son mis buttons de nav para las pantallas medianas y grandes. */}
            {menuItems.map((item) => (
              <Button
                color='inherit'
                component={Link}
                to={item.path}
                key={item.text}
                sx={{ fontWeight: '600', color: '#CBCBCD' }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ display:'flex', alignItems:'center' }}>
          {/*acá hago que sea visible mi menú hamburguesa en pantallas chicas*/}
        <IconButton color='inherit' component={Link} to='/search'>
          <SearchIcon sx={{ color: '#CBCBCD'}}/>
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setDrawerOpen(true)} //abre cuando le hago el click 
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}