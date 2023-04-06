import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './../assets/images/LogoColegio_p.png'
import { NavLink } from 'react-router-dom';


// const pages = ['Inicio', 'Sobre Nosotros', 'Documentos', 'História', 'Contacto'];
const pages = ['Lista Usuarios', 'Registro', 'Inscripción', 'Ingresar', 'Menú2', 'Salir', 'Carousel'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const navegar = ['/lstusuario', '/Signup', '/Inscripcion', '/Signin', '/menu2', '/Signout', '/Carousel']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //       AppBar position="fixed" style={{ backgroundColor: '#fff', color: '#000', position: 'fixed' }}>


  return (
    <AppBar position="fixed" style={{ position: 'fixed', height: '10%' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="" />
          <Typography
            variant="h6"
            noWrap
            component="a"

            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              fontSize: 24,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Los Conquistadores
          </Typography>

          {/* *** Menú principal **   */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={anchorElNav}
              onClose={() => setAnchorElNav(false)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((pagina, ptr) => (
                <NavLink to={navegar[ptr]} sx={{ marginleft: "Auto" }} key={ptr} >
                  <MenuItem key={ptr} onClick={() => setAnchorElNav(false)}>
                    <Typography textAlign="center"> {pagina}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          {/* *** Fin Menú principal **   */}

          <Typography
            variant="h5"
            noWrap
            component="a"

            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Los Conquistadores
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, ptr) => (
              <NavLink to={navegar[ptr]} sx={{ marginleft: "Auto" }} key={page} >
                <Button
                  key={page}
                  onClick={() => setAnchorElNav(false)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </NavLink>

            ))}
          </Box>
        </Toolbar>
        { /*
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'blue' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"

            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              fontSize: 14,
              color: 'inehirt',
              textDecoration: 'none',
            }}
          >
            Colegio Los Conquistadores de Cerrillos
          </Typography>

        </Box>
          */ }
      </Container>
    </AppBar>

  );
}
export default ResponsiveAppBar;

