import Vision   from './../assets/data/vision'
import Historia from './../assets/data/historia'
import Mision   from './../assets/data/mision'

import { Box, Grid, React } from './../assets/data/constantesMui'
// ,borderRadius: '50%'
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', bgcolor: 'primary.main' }} >
      <Grid container spacing={2} sx={{ bgcolor: 'primary.main' }}>
        <Grid xs={12} sm={6} md={4}  >
          <Historia />              
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Mision />
        </Grid>
        <Grid xs={12} sm={6} md={4} >
          <Vision/>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ bgcolor: 'primary.main' }}>
        <Grid xs={12} sm={6} md={4}>
          <Historia />              
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Mision />
        </Grid>
        <Grid xs={12} sm={6} md={4} >
          <Vision/>
        </Grid>
      </Grid>

    </Box>
  );
}