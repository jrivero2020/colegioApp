import React, { useEffect } from "react";
import { TextField, Typography, CardActions, Button, Grid, Card, Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { getDatosCert } from './../docentes/api-docentes'
import Item from "../core/Item";
import { FmtoRut, validarRut, QuitaPuntos } from "../assets/js/FmtoRut";
import CheckIcon from '@mui/icons-material/Check';
import GppBadIcon from '@mui/icons-material/GppBad';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import StarRateIcon from '@mui/icons-material/StarRate'
import WarningIcon from '@mui/icons-material/Warning';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

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

    const manejoCambiofRut = name => event => {
        let tvalue = FmtoRut(event.target.value)
        if (fRut.length == 1 && tvalue == null)
            tvalue = ""

        if (tvalue != null) {
            setfRut(tvalue)
        }
    }
    const handleChange = name => event => {
        setValores({ ...valores, [name]: event.target.value })
    }
    const handleBlur = (campo) => () => {
        setValidations({ ...validations, [campo]: validateField(campo) });
    };

    const validateField = (campo) => {
        let ret = true
        // Aquí puedes realizar tus validaciones personalizadas para cada campo
        // Por ejemplo:
        if (campo === 'nombres' && (valores.nombres.trim() === '' || valores.nombres.length < 5)) {
            ret = false;
        }
        if (campo === 'password' && valores.password.length < 3) {
            console.log("Password ??: ", valores.password.length)
            ret = false;
        }
        console.log("Validando campo : ", campo, "Retorno de validateField:==>", ret)
        return ret;
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
    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    const [value, setValue] = React.useState('1');


    return (
        <Grid container rowSpacing={1} sx={{
            paddingTop: '100px',
            alignItems: 'center', justifyContent: 'center', margin: 'auto',
            maxWidth: '95%',
            
        }} >
            <Grid item xs={12}>
                <Item >
                    <Typography variant="h5" gutterBottom sx={{ color: 'blue' }}>
                        Ficha Individual del Alumno
                    </Typography>
                </Item>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h8" gutterBottom sx={{ color: 'rgb(255,89,9)', marginLeft: 10 }}>
                    <WarningIcon color='rgb(255,89,9)' />  Complete los siguientes antecedentes
                </Typography>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', typography: 'body2',  marginLeft: 3  }}>
                        <TabList onChange={handleChangeTabs} aria-label="lab API tabs example">
                            <Tab label="I.- Del Alumno" value="1" />
                            <Tab label="II.- Del Apoderado" value="2" />
                            <Tab label="II.- Familiares" value="3" />
                            <Tab label="IV Compromiso" value="4" />
                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <Typography sx={{ fontWeight: 'bold', fontSize: 14, textAlign: 'left', color: 'blue' }}>
                            I Antecedentes del Alumno
                        </Typography>

                        {console.log("validations.rut:", validations.rut, " && valores.rut :", valores.rut)}
                        <Grid container rowSpacing={1} sx={{
                            paddingTop: '3px',
                            alignItems: 'center', justifyContent: 'center', margin: 'auto',
                        }} >

                            <Grid item xs={3}>
                                <TextField
                                    label="Run del Alumno"
                                    variant="outlined"
                                    fullWidth
                                    value={valores.rut} onChange={handleChange('rut')}
                                    onBlur={handleBlur('rut')}
                                    error={!validations.rut && valores.rut != ''}
                                    InputProps={{
                                        endAdornment: (valores.rut != '' && validations.rut) ? <CheckIcon color="success" /> : (valores.rut == '' ? <StarRateIcon color="error" /> : <GppBadIcon color="error" />),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    label="Ap. Paterno"
                                    variant="outlined"
                                    fullWidth
                                    value={valores.apat} onChange={handleChange('apat')}
                                    onBlur={handleBlur('apat')}
                                    error={!validations.apat && valores.apat != ''}
                                    InputProps={{
                                        endAdornment: (valores.apat != '' && validations.apat) ? <CheckIcon color="success" /> : (valores.apat == '' ? <StarRateIcon color="error" /> : <GppBadIcon color="error" />),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Ap. Materno"
                                    variant="outlined"
                                    fullWidth
                                    value={valores.amat} onChange={handleChange('amat')}
                                    onBlur={handleBlur('amat')}
                                    error={!validations.amat && valores.amat != ''}
                                    InputProps={{
                                        endAdornment: (valores.amat != '' && validations.amat) ? <CheckIcon color="success" /> : (valores.amat === '' ? <StarRateIcon color="error" /> : <GppBadIcon color="error" />),
                                    }}

                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Nombres"
                                    variant="outlined"
                                    fullWidth
                                    value={valores.nombres} onChange={handleChange('nombres')}
                                    onBlur={handleBlur('nombres')}
                                    error={!validations.nombres && valores.nombres != ''}
                                    InputProps={{
                                        endAdornment: (valores.nombres != '' && validations.nombres) ? <CheckIcon color="success" /> : (valores.nombres == '' ? <StarRateIcon color="error" /> : <GppBadIcon color="error" />),
                                    }}
                                />
                            </Grid  >
                            <Grid item xs={6} sx={{ justifyContent: 'center' }}>
                                {!valores.open ? (
                                    <TextField id="rut" label="Rut del Alumno"
                                        value={fRut} onChange={manejoCambiofRut('fRrut')}
                                        margin="normal"
                                    />
                                ) : null}
                                Buscar

                            </Grid>

                            <Grid item xs={6} sx={{ justifyContent: 'center' }}>
                                {!valores.open ? (
                                    <CardActions>
                                        <Button color="primary" variant="contained" onClick={clickSubmit} >Buscar</Button>
                                    </CardActions>
                                ) : null}
                            </Grid>
                            <br />
                            aqui iba la llamada a ImprimeCertificado
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


                        <Typography sx={{ fontWeight: 'bold', mx: 0.5, fontSize: 14, textAlign: 'left', color: 'blue', justifyContent: 'left' }}>
                            <StarRateIcon color="error" /> = Indica que el campo es obligatorio
                        </Typography>


                    </TabPanel>
                    <TabPanel value="2">II.- Antecedentes Del Apoderado</TabPanel>
                    <TabPanel value="3">III.- Antecedentes Familiares</TabPanel>
                    <TabPanel value="4">IV Compromiso de Responsabilidad</TabPanel>

                </TabContext>
            </Grid>
        </Grid>

    )
};




