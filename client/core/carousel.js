import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Datacol from './DataCol'
import './../assets/css/myStyle.css'
import entrada from './../assets/images/Entrada1.jpg'
import cancha1 from './../assets/images/cancha1.jpg'
import pasillo from './../assets/images/pasillo.jpg'
import pasillo2 from './../assets/images/pasillo2.jpg'
import patioPk from './../assets/images/Patio_PK.jpg'
import patioChico from './../assets/images/patiochico.jpg'
import patioPeques from './../assets/images/patiopeques.jpg'
import nina from './../assets/images/ninaLibros.jpg'
import Bienvenidos from './../assets/images/Bienvenidos.png'


const imgCarousel = [
    {
        "id": 1,
        "foto": entrada,
        "titulo": "Entrada"
    },
    {
        "id": 2,
        "foto": cancha1,
        "titulo": "Cancha 1"
    },
    {
        "id": 3,
        "foto": pasillo,
        "titulo": "pasillo 1"
    },
    {
        "id": 4,
        "foto": pasillo2,
        "titulo": "pasillo 2"
    },
    {
        "id": 5,
        "foto": patioPk,
        "titulo": "Patio_PK"
    },
    {
        "id": 6,
        "foto": patioChico,
        "titulo": "pasillo 2"
    },
    {
        "id": 7,
        "foto": patioPeques,
        "titulo": "pasillo 2"
    },
    {
        "id": 8,
        "foto": Bienvenidos,
        "titulo": "Bienvenidos"
    }
]

function carousel() {
    return (
        <div style={{ paddingTop: '88px', }} >
            <Carousel
                animation="slide"
                navButtonsAlwaysVisible={true}
                duration={500}
                swipe={false}
                sx={{ bgcolor: 'primary.main' }}
            >
                {
                    imgCarousel.map(elemento =>
                        <Paper key={elemento.id} >
                            <div style={{ backgroundImage: `url(${nina})` }}>
                                <img alt="Imagen" src={elemento.foto} style={{ display: 'block', margin: 'auto', Width: '78vm', height: '50vh' }} />
                            </div>
                        </Paper>
                    )
                }
            </Carousel>
            <Datacol />
        </div>
    )
}

export default carousel
