import React from "react";
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import colegio from './../assets/images/colegio.jpg'
//import theme from "../theme";

//import { ThemeProvider } from '@mui/system';

// const isActive = (history, path) => {
//     if (history.location.pathname == path)
//         return { color: '#ff4081' }
//     else
//         return { color: '#ffffff' }
// }

export default function Home() {

    return (
        <Card sx={{ maxWidth: 400}} 
        >
          
            <CardMedia style={{ display:'flex', justifyContent:'center' }}
            component="img" 
                image={colegio} alt="Patio Colegio" />
            <CardContent>
                <Typography variant="body2" component="p">
                    Bienvenido a Intranet Colegio Los Conquistadores
                </Typography>
            </CardContent>
        </Card>
    )
}

