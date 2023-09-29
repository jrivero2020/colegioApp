import { Grid, React, Card, CardActionArea, CardMedia, Typography } from './../assets/data/constantesMui'
import { makeStyles }  from '@mui/styles'
import { useState }    from 'react'
import { useNavigate } from 'react-router-dom';
import PagPendiente    from './PagPendiente'


import nina               from './../assets/images/poster.jpg'
import fondoPantalla      from './../assets/images/FondoPantalla.jpg'
import CtaPublica         from './../assets/images/cuentaPublica2023.png'
import ListaUtiles        from './../assets/images/ListaUtiles.png'
import manualConvivencia  from './../assets/images/ManualConvivencia.png'
import campaña_vacuna2023 from './../assets/images/campaña_vacuna2023.png'
import ReunionesPA        from './../assets/images/ReunionesPA.png'
import ResulAcadem        from './../assets/images/ResultadosAcademicos.png'
import Jornada            from './../assets/images/Jornada.png'
import Faldas             from './../assets/images/Faldas.png'
import Galeria            from './../assets/images/GaleriaFotos.png'
import CertARegular       from './../assets/images/CertificadoARegular.png'

// import './../assets/css/myStyle.css'


const useStyles = makeStyles({
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto'
  },
  alignItemsAndJustifyContent: {
    width: 900,
    height: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
})


export default function BasicGrid() {
  const classes = useStyles()
  const navigate = useNavigate();
  const [showPdf, setShowPdf] = useState(false);

  const Pendiente = () => {
    setShowPdf(!showPdf);
    { < PagPendiente /> }
  };

  const cargarVisorPdf = (docu) => {
    navigate('/VisorPdfII', { state: { idArchivo: docu } })
  }

  const cargarListaUtiles = () => {
    navigate(`/VerGrilla`);
  }

  const cargarDocenteHoras = () => {
    navigate(`/DocenteHoras`);
  }

  const CertAlumnoRegularPrint = () => {
    navigate(`/CertAlumnoRegular`);
  }



  return (
    <div style={{ background: `url(${fondoPantalla})` }}   >
      <Grid container spacing={1} alignItems="center" justifyContent="center"  >
        <Grid item xs={12} sm={6} md={3}>

          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => cargarVisorPdf(1)} >
              <CardMedia
                component="img"
                image={nina}
                style={{ margin: 'auto' }}
              />
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>

            <CardActionArea onClick={() => cargarVisorPdf(2)} >
              <CardMedia
                component="img"
                image={CtaPublica}
                style={{ display: 'flex', margin: 'auto' }}

              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>

            <CardActionArea onClick={() => cargarListaUtiles()} >
              <CardMedia
                component="img"
                image={ListaUtiles}
                style={{ display: 'flex', margin: 'auto' }}
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => cargarVisorPdf(3)}>
              <CardMedia
                component="img"
                image={manualConvivencia}
                style={{ display: 'flex', margin: 'auto' }}
              />

            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} />

        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => CertAlumnoRegularPrint()}>
              <CardMedia
                component="img"
                image={CertARegular}
                style={{ display: 'flex', margin: 'auto' }}
              />

            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => Pendiente(3)} >
              <CardMedia
                component="img"
                image={campaña_vacuna2023}
                style={{ display: 'flex', margin: 'auto' }}
              />

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => Pendiente(3)}>
              <CardMedia
                component="img"
                image={ReunionesPA}
                style={{ display: 'flex', margin: 'auto' }}
              />
              {showPdf && "Pronto Disponible"}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => Pendiente(3)}>
              <CardMedia
                component="img"
                image={ResulAcadem}
                style={{ display: 'flex', margin: 'auto' }}
              />
              {showPdf && "Pronto Disponible"}

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => cargarDocenteHoras()}>
              <CardMedia
                component="img"
                image={Jornada}
                style={{ display: 'flex', margin: 'auto' }}
              />
              {showPdf && "Pronto Disponible"}

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => Pendiente(3)}>
              <CardMedia
                component="img"
                image={Faldas}
                style={{ display: 'flex', margin: 'auto' }}
              />
              {showPdf && "Pronto Disponible"}

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{ maxWidth: 300, marginLeft: '20px' }}>
            <CardActionArea onClick={() => Pendiente(3)}>
              <CardMedia
                component="img"
                image={Galeria}
                style={{ display: 'flex', margin: 'auto' }}
              />
              {showPdf && "Pronto Disponible"}

            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={1} >
        <Grid item xs={12}
          sx={{ marginLeft: '10px', marginRight: '10px', }}
          style={{ paddingTop: '100px', margin: 'auto' }}
        >
          <Typography  gutterBottom sx={{ color: 'blue' }}>
            Los Conquistadores de Chile, Cerrillos
          </Typography>
        </Grid>
      </Grid>


    </div>
  );
}
