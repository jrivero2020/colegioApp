import React from "react";

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import HomeIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';

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
      <NavLink to="/Signup">Registro
        <Button >Usuarios</Button>
      </NavLink>
      <NavLink to="/Inscripcion">Inscripcion
        <Button >Inscripcion</Button>
      </NavLink>
      <NavLink to="/Signin">Ingresar
        <Button >Ingresar</Button>
      </NavLink>
      <NavLink to="/Signout">Salir
        <Button > Salir</Button>
      </NavLink>
      <NavLink to="/menu2">Menu_Lateral
        <Button >Menu_Lateral</Button>
      </NavLink>

    </Toolbar>
  </AppBar>
)

export default Menu;
