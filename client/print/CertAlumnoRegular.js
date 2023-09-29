import React, { useEffect } from "react";
import { TextField, Typography, CardActions, Button, Grid, Card } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { getDatosCert } from './../docentes/api-docentes'
import Item from "../core/Item";
import { FmtoRut, validarRut, QuitaPuntos } from "../assets/js/FmtoRut";
import ImprimeCertificado from './ImprimeCertificado'

export default function CertAlumnoRegular() {

    const navigate = useNavigate();

    const [valores, setValores] = useState({
        apat: '',
        amat: '',
        nombres: '',
        rut: '',
        dv: '',
        cod_ense: '',
        desc_grado: '',
        genero: '',
        letra: '',
        nro_matricula: '',
        open: false,
        error: '',
        parapresentar: ''
    })

    const [validations, setValidations] = useState({
        apat: false,
        amat: false,
        nombres: false,
        rut: false,
    });

    const [fRut, setfRut] = useState('')
    /*
        const handleChange = name => event => {
            setValores({ ...valores, [name]: event.target.value })
        }
        const handleBlur = (campo) => () => {
            setValidations({ ...validations, [campo]: validateField(campo) });
        };
    */
    const manejoCambiofRut = name => event => {
        let tvalue = FmtoRut(event.target.value)
        if (fRut.length == 1 && tvalue == null)
            tvalue = ""

        if (tvalue != null) {
            setfRut(tvalue)
        }
    }

    const validateField = (campo) => {
        // Aquí puedes realizar tus validaciones personalizadas para cada campo
        // Por ejemplo:
        if (campo === 'NombreUsuario' && valores.NombreUsuario.trim() === '' || valores.NombreUsuario.length < 5) {
            return false;
        }
        if (campo === 'password' && valores.password.length < 3) {
            console.log("Password ??: ", valores.password.length)
            return false;
        }
        return true;
    };

    const actualizaValores = () => {
        setValores({ ...valores, rut: QuitaPuntos(fRut.slice(0, -1)), dv: fRut.slice(-1) })
    }

    const cierreDialog = () => {
        setValores({ ...valores, open: false })
    }

    const clickSubmit = (event) => {
        event.preventDefault();

        if (!validarRut(fRut)) {
            alert('Rut ingresado erróneo')
            return
        }
        actualizaValores()

        const user = {
            apat: valores.apat || '',
            amat: valores.amat || '',
            nombres: valores.nombres || '',
            rut: QuitaPuntos(fRut.slice(0, -1)) || ''
        }

        if (user.apat === '' && user.amat === '' &&
            user.nombres === '' && user.rut === ''

        ) {
            alert('Por favor, complete a lo menos un campo');
            return
        }
        const abortController = new AbortController()
        const signal = abortController.signal

        getDatosCert(user, signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                const { apat, amat, nombres, rut, dv, cod_ense, desc_grado, genero, letra, nro_matricula } = data.user;
                setValores({
                    ...valores,
                    apat,
                    amat,
                    nombres,
                    rut,
                    dv,
                    cod_ense,
                    desc_grado,
                    genero,
                    letra,
                    nro_matricula,
                    error: '',
                    open: true
                });
            }
        })
    }


    return (
        <>
            <Grid container rowSpacing={1} sx={{
                paddingTop: '100px',
                alignItems: 'center', justifyContent: 'center', margin: 'auto',
                maxWidth: '65%'
            }} >
                <Grid item xs={12}>
                    <Item >
                        <Typography variant="h5" gutterBottom sx={{ color: 'blue' }}>
                            Certificado Alumno Regular
                        </Typography>
                    </Item>
                    <br />

                </Grid>

                <Grid item xs={6} sx={{ justifyContent: 'center' }}>
                    {!valores.open ? (
                        <TextField id="rut" label="Rut del Alumno"
                            value={fRut} onChange={manejoCambiofRut('fRrut')}
                            margin="normal"
                        />
                    ) : null}

                </Grid>

                <Grid item xs={6} sx={{ justifyContent: 'center' }}>
                    {!valores.open ? (
                        <CardActions>
                            <Button color="primary" variant="contained" onClick={clickSubmit} >Buscar</Button>
                        </CardActions>
                    ) : null}
                </Grid>
                <br />

                {valores.open ? (
                    <Card style={{ maxWidth: '90%', margin: 'auto', height: "1020px" }}>
                        < ImprimeCertificado data={valores} />
                    </Card>
                ) : null
                }
            </Grid>
      
            <Grid container sx={{
                paddingTop: '2x',
                alignItems: 'center', justifyContent: 'center', margin: 'auto',
                maxWidth: '65%'
            }} >
                {valores.open ? (
                    <Grid item xs={12}  >
                        <Item >
                            <Typography variant="h5" gutterBottom sx={{ color: 'blue' }}>
                                <Button color="primary" variant="outlined" onClick={cierreDialog} >Buscar otro Rut</Button>
                            </Typography>
                        </Item>
                    </Grid>
                ) : null}
            </Grid>
        </>

    )
};




