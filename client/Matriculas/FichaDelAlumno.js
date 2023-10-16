import React, { useEffect } from "react";
import {
  TextField,
  Typography,
  CardActions,
  Button,
  Grid,
  Card,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormLabel,
  Alert,
  AlertTitle,
  InputAdornment,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getDatosMatricula, getComunas } from "./../docentes/api-docentes";
import Item from "../core/Item";
import { FmtoRut, validarRut, QuitaPuntos } from "../assets/js/FmtoRut";

import CheckIcon from "@mui/icons-material/Check";
import GppBadIcon from "@mui/icons-material/GppBad";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StarRateIcon from "@mui/icons-material/StarRate";
import WarningIcon from "@mui/icons-material/Warning";
import SearchIcon from "@mui/icons-material/Search";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TextBox } from "@react-pdf-viewer/core";

export default function FichaDelAlumno() {
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    agno: 2022,
    al_activo: 0,
    al_agnoegreso: null,
    al_amat: "",
    al_apat: "",
    al_canthnos: null,
    al_cuidados: null,
    al_cur_repe: "",
    al_domicilio: "",
    al_dv: "",
    al_enfermo: null,
    al_f_nac: "",
    al_fecharetiro: null,
    al_genero: "",
    al_hnosaca: null,
    al_hnoscursos: null,
    al_id_alumno: 0,
    al_id_comuna: 0,
    al_motivoretiro: null,
    al_nombres: "",
    al_nroentrehnos: null,
    al_rut: 0,
    ap2_amat: null,
    ap2_apat: null,
    ap2_domicilio: null,
    ap2_dv: null,
    ap2_email: null,
    ap2_fono1: null,
    ap2_fono2: null,
    ap2_id_comuna: null,
    ap2_idapoderados: null,
    ap2_nombres: null,
    ap2_rut: null,
    ap2_sexo: null,
    ap_amat: null,
    ap_apat: null,
    ap_domicilio: "",
    ap_dv: null,
    ap_email: "",
    ap_fono1: "",
    ap_fono2: "",
    ap_id_comuna: 0,
    ap_idapoderados: 0,
    ap_nombres: "",
    ap_rut: null,
    ap_sexo: "",
    cod_ense: 0,
    cod_grado: 0,
    com2_comuna: "",
    com2_id_comuna: 0,
    com3_comuna: null,
    com3_id_comuna: null,
    com_comuna: "0",
    com_id_comuna: 0,
    desc_grado: null,
    id_ciclo: 0,
    id_curso: 0,
    id_profesor: 0,
    id_sala: 0,
    jornada: "",
    letra: "",
    ma_activo: 0,
    ma_agno_matricula: 0,
    ma_cole_origen: "",
    ma_descripcionviveconotros: null,
    ma_evaluareligion: null,
    ma_f_matricula: "",
    ma_fecharetiro: null,
    ma_id_alumno: 111,
    ma_id_curso: 0,
    ma_idapoderado: 0,
    ma_idapoderadosupl: null,
    ma_idmatricula: 0,
    ma_idpadres: null,
    ma_idparentesco: 0,
    ma_idparentescosupl: null,
    ma_idvivecon: 0,
    ma_ingresofamiliar: null,
    ma_motivoretiro: null,
    ma_pagado: 0,
    ma_promedionota: null,
    ma_tpvivienda: null,
    ma_txtparentesco: null,
    ma_txtparentescosupl: null,
    nivel: 0,
    nomcorto: "",
    nomlargo: "",
    pa2_descripcion: null,
    pa2_idparentesco: null,
    pa_descripcion: "",
    pa_idparentesco: 0,
    padres_cantidadgrupofamiliar: null,
    padres_dvma: null,
    padres_dvpa: null,
    padres_estudiosma: null,
    padres_estudiospa: null,
    padres_idpadres: null,
    padres_ocupacionma: null,
    padres_ocupacionpa: null,
    padres_rutma: null,
    padres_rutpa: null,
    open: false,
    error: "",
  });

  const [validations, setValidations] = useState({
    apat: false,
    amat: false,
    nombres: false,
    rut: false,
    al_f_nac: false,
  });

  const [fRut, setfRut] = useState("");
  const [comunas, setComunas] = React.useState([]);
  const [selectedComuna, setSelectedComuna] = React.useState("");
  const [alerta, setAlerta] = useState([]);
  const handleChange = (name) => (event) => {
    setValores({ ...valores, [name]: event.target.value });
  };
  const handleBlur = (campo) => () => {
    setValidations({ ...validations, [campo]: validateField(campo) });
  };

  const cierreDialog = () => {
    setValores({ ...valores, open: false });
  };

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState("1");

  //***************************************************/
  //* manejoCambiofRut
  const manejoCambiofRut = (name) => (event) => {
    let tvalue = FmtoRut(event.target.value);
    if (fRut.length === 1 && tvalue == null) tvalue = "";

    if (tvalue != null) {
      setfRut(tvalue);
    }
    console.log("manejoCambiofRut : ", tvalue);
  };
  //***************************************************/

  //***************************************************/
  //* actualizaRutEnValores
  const actualizaRutEnValores = () => {
    setValores({
      ...valores,
      al_rut: QuitaPuntos(fRut.slice(0, -1)),
      dv: fRut.slice(-1),
    });
  };
  //***************************************************/

  //***************************************************/
  //* manejaCambioComunas
  const manejaCambioComunas = (event) => {
    console.log("event.target.value:", event.target.value);
    setSelectedComuna(event.target.value);
  };
  //***************************************************/

  //***************************************************/
  //* cargaDataFichaAlumno
  const cargaDataFichaAlumno = () => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getDatosMatricula(valores, signal).then((data) => {
      if (data && data.error) {
        console.log("*** Error ***", data.error);
      } else {
        const [results, metadata] = data;
        if (
          results[0] === undefined ||
          results[0] === null ||
          Object.keys(results[0]).length === 0
        ) {
          alert(
            "**ATENCION** Rut no encontrado en las Matrículas del establecimiento"
          );
        } else {
          const [results, metadata] = data;
          console.log("results", results[0]);
          console.log('metadata"]', metadata);
          setValores(results[0]);
          setSelectedComuna(results[0].al_id_comuna);
        }
      }
    });
  };
  //***************************************************/

  //***************************************************/
  //* clickSubmit
  const clickSubmit = (event) => {
    event.preventDefault();

    if (!validarRut(fRut)) {
      navigate("/alertas", {
        state: { aMensajes: "Rut ingresado erróneo", aTitulo: "Cuidado!!" },
      });
      return false;
    }

    actualizaRutEnValores();
    cargaDataFichaAlumno();
  };
  //************************************************************** */

  //************************************************************** */
  // validateField
  const validateField = (campo) => {
    let ret = true;
    // Aquí puedes realizar tus validaciones personalizadas para cada campo
    // Por ejemplo:
    if (
      campo === "nombres" &&
      (valores.al_nombres.trim() === "" || valores.al_nombres.length < 5)
    ) {
      ret = false;
    }
    if (campo === "password" && valores.password.length < 3) {
      console.log("Password ??: ", valores.password.length);
      ret = false;
    }
    if (campo === "rut" && fRut.length >= 8) {
      if (!validarRut(fRut)) {
        alert("validateField Rut ingresado erróneo");
        ret = false;
      }

      actualizaRutEnValores();
      console.log(
        "llamo a actualizaRutEnValores",
        QuitaPuntos(fRut.slice(0, -1)),
        valores.al_rut
      );
    } else {
      console.log("Largo de rut debe ser a lo menos de 8 caracteres");
      ret = false;
    }

    console.log(
      "Validando campo : ",
      campo,
      "Retorno de validateField:==>",
      ret
    );
    return ret;
  };
  //************************************************************** */

  //************************************************************** */
  // useEffect
  React.useEffect(() => {
    getComunas().then((data) => {
      if (data && data.error) {
        console.log("*** Error ***", data.error);
      } else {
        console.log("Comunas :", data);
        setComunas(data);
      }
    });
  }, []);

  return (
    <Grid
      container
      rowSpacing={2}
      sx={{
        paddingTop: "100px",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        maxWidth: "95%",
      }}
    >
      <Grid item xs={12}>
        <Item>
          <Typography variant="h5" gutterBottom sx={{ color: "blue" }}>
            Ficha Individual del Alumno
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h8"
          gutterBottom
          sx={{ color: "rgb(0,30,255)", marginLeft: 10 }}
        >
          <WarningIcon color="rgb(0,30,255)" /> Complete los siguientes
          antecedentes
        </Typography>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              typography: "body2",
              marginLeft: 3,
            }}
          >
            <TabList
              onChange={handleChangeTabs}
              aria-label="lab API tabs example"
            >
              <Tab label="I.- Del Alumno" value="1" />
              <Tab label="II.- Del Apoderado" value="2" />
              <Tab label="II.- Familiares" value="3" />
              <Tab label="IV Compromiso" value="4" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 14,
                textAlign: "left",
                color: "blue",
              }}
            >
              I Antecedentes del Alumno
            </Typography>

            <Grid
              container
              spacing={2}
              rowSpacing={3}
              sx={{
                paddingTop: "2px",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <Grid item xs={2}>
                <TextField
                  label="Run del Alumno"
                  variant="outlined"
                  fullWidth
                  value={fRut}
                  onChange={manejoCambiofRut("fRrut")}
                  margin="normal"
                  onBlur={handleBlur("rut")}
                  error={!validations.rut && valores.al_rut !== ""}
                  InputProps={{
                    endAdornment:
                      valores.al_rut !== "" && validations.rut ? (
                        <>
                          <CheckIcon color="success" />{" "}
                          <SearchIcon onClick={cargaDataFichaAlumno} />
                        </>
                      ) : valores.rut == "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
                <InputAdornment position="start">
                  <SearchIcon onClick={cargaDataFichaAlumno} />
                </InputAdornment>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Ap. Paterno"
                  variant="outlined"
                  fullWidth
                  value={valores.al_apat}
                  onChange={handleChange("al_apat")}
                  onBlur={handleBlur("al_apat")}
                  error={!validations.apat && valores.al_apat !== ""}
                  InputProps={{
                    endAdornment:
                      valores.al_apat !== "" && validations.apat ? (
                        <CheckIcon color="success" />
                      ) : valores.al_apat == "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Ap. Materno"
                  variant="outlined"
                  fullWidth
                  value={valores.al_amat}
                  onChange={handleChange("al_amat")}
                  onBlur={handleBlur("al_amat")}
                  error={!validations.amat && valores.al_amat !== ""}
                  InputProps={{
                    endAdornment:
                      valores.al_amat !== "" && validations.amat ? (
                        <CheckIcon color="success" />
                      ) : valores.al_amat === "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Nombres"
                  variant="outlined"
                  fullWidth
                  value={valores.al_nombres}
                  onChange={handleChange("al_nombres")}
                  onBlur={handleBlur("al_nombres")}
                  error={!validations.nombres && valores.al_nombres !== ""}
                  InputProps={{
                    endAdornment:
                      valores.al_nombres !== "" && validations.nombres ? (
                        <CheckIcon color="success" />
                      ) : valores.al_nombres == "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="F.Nacimiento"
                  variant="outlined"
                  fullWidth
                  value={valores.al_f_nac}
                  onChange={handleChange("al_f_nac")}
                  onBlur={handleBlur("al_f_nac")}
                  error={!validations.al_f_nac && valores.al_f_nac !== ""}
                  InputProps={{
                    endAdornment:
                      valores.al_f_nac !== "" && validations.al_f_nac ? (
                        <CheckIcon color="success" />
                      ) : valores.al_f_nac == "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Sexo"
                  variant="outlined"
                  fullWidth
                  value={valores.al_genero}
                  onChange={handleChange("al_genero")}
                  onBlur={handleBlur("al_genero")}
                  error={!validations.al_genero && valores.al_genero !== ""}
                  InputProps={{
                    endAdornment:
                      valores.al_genero !== "" && validations.al_genero ? (
                        <CheckIcon color="success" />
                      ) : valores.al_genero == "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
              </Grid>
              <Grid item xs={3} sx={{ mt: 2 }}>
                <TextField
                  label="Domicilio"
                  variant="outlined"
                  fullWidth
                  value={valores.al_domicilio}
                  onChange={handleChange("al_domicilio")}
                  onBlur={handleBlur("al_domicilio")}
                  error={
                    !validations.al_domicilio && valores.al_domicilio !== ""
                  }
                  InputProps={{
                    endAdornment:
                      valores.al_domicilio !== "" &&
                      validations.al_domicilio ? (
                        <CheckIcon color="success" />
                      ) : valores.al_domicilio == "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
              </Grid>
              {
                <Grid item xs={3}>
                  <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
                    <FormLabel>Comuna</FormLabel>
                    <Select
                      value={selectedComuna}
                      onChange={manejaCambioComunas}
                      required
                      sx={{ minWidth: 200 }}
                    >
                      {comunas.map((comuna) => (
                        <MenuItem
                          key={comuna.id_comuna}
                          value={comuna.id_comuna}
                        >
                          {comuna.descripcion}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              }
              <Grid item xs={3}>
                <TextField
                  label="Colegio Origen"
                  variant="outlined"
                  fullWidth
                  value={valores.ma_cole_origen}
                  onChange={handleChange("ma_cole_origen")}
                  onBlur={handleBlur("ma_cole_origen")}
                  error={
                    !validations.ma_cole_origen && valores.ma_cole_origen !== ""
                  }
                  InputProps={{
                    endAdornment:
                      valores.ma_cole_origen !== "" &&
                      validations.ma_cole_origen ? (
                        <CheckIcon color="success" />
                      ) : valores.al_id_comuna == "" ? (
                        <StarRateIcon color="error" />
                      ) : (
                        <GppBadIcon color="error" />
                      ),
                  }}
                />
              </Grid>
              <Grid item xs={6} sx={{ justifyContent: "center" }}>
                {!valores.open ? (
                  <TextField
                    id="rut"
                    label="Rut del Alumno"
                    value={fRut}
                    onChange={manejoCambiofRut("fRrut")}
                    margin="normal"
                  />
                ) : null}
                Buscar
              </Grid>
              <Grid item xs={6} sx={{ justifyContent: "center" }}>
                {!valores.open ? (
                  <CardActions>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={clickSubmit}
                    >
                      Buscar
                    </Button>
                  </CardActions>
                ) : null}
              </Grid>
              <br />
              aqui iba la llamada a ImprimeCertificado
            </Grid>

            <Grid
              container
              sx={{
                paddingTop: "2x",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                maxWidth: "65%",
              }}
            >
              {valores.open ? (
                <Grid item xs={12}>
                  <Item>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: "blue" }}
                    >
                      <Button
                        color="primary"
                        variant="outlined"
                        onClick={cierreDialog}
                      >
                        Buscar otro Rut
                      </Button>
                    </Typography>
                  </Item>
                </Grid>
              ) : null}
            </Grid>

            <Typography
              sx={{
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
                textAlign: "left",
                color: "blue",
                justifyContent: "left",
              }}
            >
              <StarRateIcon color="error" /> = Indica que el campo es
              obligatorio
            </Typography>
          </TabPanel>
          <TabPanel value="2">II.- Antecedentes Del Apoderado</TabPanel>
          <TabPanel value="3">III.- Antecedentes Familiares</TabPanel>
          <TabPanel value="4">IV Compromiso de Responsabilidad</TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
}
