import React from "react";
import { Card, CardContent, Icon, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Signup() {
    const [valores, setValores] = useState({
        NombreUsuario: '',
        Correo: '',
        password: '',
        apat: '',
        amat: '',
        nombres: '',
        rut: 0,
        dv: 0,
        rol: 0,
        open: false,
        error: ''
    })

    const handleChange = name => event => {
        setValores({ ...valores, [name]: event.target.value } )
        console.log( 'name: ', name)
        console.log( 'event: ', event._reactName )
        console.log( 'valor: ', event.target.value)
    }

    const clickSubmit = () => {
        const user = {
            NombreUsuario: values.NombreUsuario || undefined,
            Correo: values.Correo || undefined,
            password: values.password || undefined,
            apat: values.apat || undefined,
            amat: values.amat || undefined,
            nombres: values.nombres || undefined,
            rut: values.rut || undefined,
            dv: values.dv || undefined,
            rol: values.rol || undefined,
        }
        create(user).then((data) => {
            if (data.error) {
                setValores({ ...valores, error: data.error })
            } else {
                setValores({ ...volores, error: '', open: true })
            }
        })
    }
    return (
        <div>
            <Card
                sx={{
                    maxWidth: 600,
                    margin: 'auto',
                    textAlign: 'center',
                    mt: 1,
                    pb: 2,
                }}
            >
                <CardContent>
                    <Typography
                        sx={{
                            mt:0,
                            color: '#3f4771'
                        }}
                        variant="h5" >
                        Registro de Usuario
                    </Typography>

                        <TextField id="nombreusuario" label="Nombre de Usuario"
                            value={valores.name} onChange={handleChange('NombreUsuario')}
                            margin="normal" />
                        <br />
                        <TextField id="correo" label="Correo electrónico"
                            value={valores.Correo} onChange={handleChange('Correo')}
                            margin="normal" />
                        <br />
                        <TextField id="password" type="password" label="clave"
                            value={valores.password} onChange={handleChange('password')}
                            margin="normal" />
                        <br />
                        <TextField id="apat"  label="ApellidoPaterno"
                            value={valores.apat} onChange={handleChange('apat')}
                            margin="normal" />
                        <br />

                    {
                        valores.error && (<Typography component="p" color="error">
                            <Icon color="error">error</Icon>
                            {valores.error}</Typography>)
                    }


                </CardContent>
            </Card>

        </div>
    )
};
