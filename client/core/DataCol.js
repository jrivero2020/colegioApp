import { Box, Grid, React, Card, CardActionArea, Button, Typography, CardContent, CardActions, Item, CardMedia } from './../assets/data/constantesMui'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Vision        from './../assets/data/vision'
import Historia      from './../assets/data/historia'
import Mision        from './../assets/data/mision'
import nina          from './../assets/images/poster.jpg'
import fondoPantalla from './../assets/images/FondoPantalla.jpg'
const  pdfurlLocal =  './../assets/pdf/inicio-escolar-2023.pdf'

export default function BasicGrid() {
  const [showPdf, setShowPdf] = useState(false);

  const handleClick = () => {
    setShowPdf(!showPdf);
  };
  
  return (
    <div style={{ background: `url(${fondoPantalla})` }}   >
      <Grid container spacing={1} alignItems="center" justifyContent="center"  >
        <Grid xs={12} sm={6} md={3}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
          <Card sx={{ maxWidth: 380,  marginLeft:'20px' }}>
          
            <CardActionArea >
              <CardMedia
                component="img"
                height="350"
                image={nina}
                />
              <CardActions sx={{ bgcolor: '#465053e0', boxShadow: 'inset 0 0 11px #503c02', justifyContent: 'center' }}>
                <Button onClick={ handleClick } size="small" variant="contained" color="primary" >Conozca Más  {( showPdf ? <p>&nbsp; On</p>:<p>&nbsp; Off</p> )} </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
          <Card sx={{ maxWidth: 380,  marginLeft:'20px' }}>
          
            <CardActionArea >
              <CardMedia
                component="img"
                height="350"
                image={nina}
                />
             
             
              <CardActions sx={{ bgcolor: '#465053e0', boxShadow: 'inset 0 0 11px #503c02', justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" >Conozca Más</Button>
              </CardActions>

            </CardActionArea>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
          <Card sx={{ maxWidth: 380,  marginLeft:'20px' }}>
          
            <CardActionArea >
              <CardMedia
                component="img"
                height="350"
                image={nina}
                />
             
             
              <CardActions sx={{ bgcolor: '#465053e0', boxShadow: 'inset 0 0 11px #503c02', justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" >Conozca Más</Button>
              </CardActions>

            </CardActionArea>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
          <Card sx={{ maxWidth: 380,  marginLeft:'20px' }}>
          
            <CardActionArea >
              <CardMedia
                component="img"
                height="350"
                image={nina}
                />
             
             
              <CardActions sx={{ bgcolor: '#465053e0', boxShadow: 'inset 0 0 11px #503c02', justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" >Conozca Más</Button>
              </CardActions>

            </CardActionArea>
          </Card>
        </Grid>
      </Grid>



    </div>
  );
}
