import Vision from './../assets/data/vision'
import Historia from './../assets/data/historia'
import Mision from './../assets/data/mision'
import nina from './../assets/images/poster.jpg'
import fondoPantalla from './../assets/images/FondoPantalla.jpg'
import { Box, Grid, React, Card, CardActionArea, Button, Typography, CardContent, CardActions, Item, CardMedia } from './../assets/data/constantesMui'

// ,borderRadius: '50%'

export default function BasicGrid() {
  return (
    <div style={{ background: `url(${fondoPantalla})` }}   >
      <Grid container spacing={1} alignItems="center" justifyContent="center"  >
        <Grid item xs={12} sm={6} md={4}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
          <Card sx={{ maxWidth: 300,  marginLeft:'20px' }}>
          
            <CardActionArea >
              <CardMedia
                component="img"
                height="450"
                image={nina}
                />
             
             
              <CardActions sx={{ bgcolor: '#465053e0', boxShadow: 'inset 0 0 11px #503c02', justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" >Conozca Más</Button>
              </CardActions>

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Card sx={{ maxWidth: 300, position: 'sticky', objectFit: 'cover', marginLeft:'20px' }}>
          
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image={nina}
                />
             
              <CardActions sx={{ bgcolor: '#465053e0', boxShadow: 'inset 0 0 11px #503c02', justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" >Conozca Más</Button>
              </CardActions>

            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}   sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 300, position: 'sticky', objectFit: 'cover', marginLeft:'20px' }}>
          
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
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

/* 
dado por chat gpt
function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" image={nina} alt="Nina" sx={{ aspectRatio: '3/4' }} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" image={juan} alt="Juan" sx={{ aspectRatio: '3/4' }} />
        </Card>
      </Grid>
    </Grid>
  );
}

*/