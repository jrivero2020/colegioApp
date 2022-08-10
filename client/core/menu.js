import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import SchoolIcon from '@mui/icons-material/School';
import profesor from './../assets/images/profesor.png'


import { Link, useLocation, useNavigate, useParams, NavLink } from 'react-router-dom';
import './../assets/css/navbar.css'

let primario = 'primary'
let segundo = 'secondary'

const Menu = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Los Conquistadores
      </Typography>
      <NavLink  to="/">
        <IconButton  >
          <HomeIcon />
        </IconButton>
      </NavLink>
      <NavLink to="/lstusuario">Usuarios
        <Button >Usuarios</Button>
      </NavLink>

    </Toolbar>
  </AppBar>
)

export default Menu;
