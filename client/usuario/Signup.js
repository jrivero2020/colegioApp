import React from "react";
import {
    Card, CardContent, Icon, TextField, Typography, CardActions, Button, Dialog,
    DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, Box
} from "@mui/material";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { create } from './../usuario/api-usuario';
import Item from "../core/Item";
import { useRut } from "react-rut-formatter";

export default function Signup() {
    const [valores, setValores] = useState({
        NombreUsuario: '',
        Correo: '',
        password: '',
        apat: '',
        amat: '',
        nombres: '',
        rut: '',
        dv: '',
        rol: 'Profesor',
        open: false,
        error: ''
    })
    const { rut, updateRut, isValid } = useRut();

    const handleChange = name => event => {
        setValores({ ...valores, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        const user = {
            NombreUsuario: valores.NombreUsuario || undefined,
            Correo: valores.Correo || undefined,
            password: valores.password || undefined,
            apat: valores.apat || undefined,
            amat: valores.amat || undefined,
            nombres: valores.nombres || undefined,
            rut: valores.rut || undefined,
            dv: valores.dv || undefined,
            rol: valores.rol || undefined,
        }
        if (
            user.NombreUsuario === '' ||
            user.Correo === '' || user.password === '' || user.apat === '' || user.amat === '' ||
            user.nombres === '' || user.rut === '' || user.dv === '' || user.rol === ''
        ) {
            alert('Por favor, complete todos los campos');
            return
        }


        create(user).then((data) => {
            if (data.error) {
                setValores({ ...valores, error: data.error })
            } else {
                setValores({ ...valores, error: '', open: true })
            }
        })
    }
    return (


        <Grid container rowSpacing={1} sx={{
            paddingTop: '100px',
            alignItems: 'center', justifyContent: 'center', margin: 'auto',
            maxWidth: '65%'
        }} >
            <Grid item xs={12}>
                <Item >
                    <Typography variant="h5" gutterBottom sx={{ color: 'blue' }}>
                        Registro de Usuarios al Sistema
                    </Typography>
                </Item>
                <br />
                <br />
            </Grid>


            <Grid item xs={4}>
                <TextField
                    label="Nombre usuario"
                    variant="outlined"
                    fullWidth
                    value={valores.name} onChange={handleChange('NombreUsuario')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={valores.password}
                    onChange={handleChange('password')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Repita Contraseña"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={valores.password}
                    onChange={handleChange('password')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    value={valores.Correo}
                    onChange={handleChange('Correo')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Nombres"
                    variant="outlined"
                    fullWidth
                    value={valores.nombres}
                    onChange={handleChange('nombres')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Apellido paterno"
                    variant="outlined"
                    fullWidth
                    value={valores.apat}
                    onChange={handleChange('apat')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Apellido materno"
                    variant="outlined"
                    fullWidth
                    value={valores.amat}
                    onChange={handleChange('amat')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="RUT"
                    variant="outlined"
                    fullWidth
                    //value={valores.rut}
                    value={rut.formatted}
                    onChange={handleChange('rut')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="DV"
                    variant="outlined"
                    fullWidth
                    value={valores.dv}
                    onChange={handleChange('dv')}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField sx={{ opacity: 0.5, cursor: 'not-allowed', }}
                    disabled
                    label="Rol"
                    variant="outlined"
                    fullWidth
                    value={valores.rol}
                // onChange={handleChange('rol')}
                />
            </Grid>

            <CardActions>
                <Button color="primary" variant="contained" onClick={clickSubmit} >Enviar</Button>
            </CardActions>

            <Dialog open={valores.open} disableBackdropClick={true}>
                <DialogTitle>Nueva Cuenta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Nueva cuenta creada exitosamente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/signin">
                        <Button color="primary" autoFocus="autoFocus" variant="contained">
                            Ingresar
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </Grid>

    )
};




