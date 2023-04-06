import { Card, Button, Typography, CardContent, CardActions, Item, React } from './constantesMui'
import { useNavigate } from 'react-router-dom';

import './../css/myStyle.css'


function historia() {
    const navigate = useNavigate();

    return (
        <Item sx={{ bgcolor: '#465053e0', border: '1px solid' }}>
            <Card sx={{ minWidth: 275, border: '1px solid' }}>
                <CardContent sx={{
                    background: '#dce1e5',
                    color: '#1352e7',
                    border: '5px solid #F57F17',
                    boxShadow: 'inset 0 0 10px #503c02'
                }}>
                    <Typography fontFamily="'Tillana', cursive" variant="h5" component="div" >
                        <span style={{ fontWeight: 'bold' }}>  Historia </span>
                    </Typography>
                    <Typography fontFamily="'Tillana', cursive" variant="body2" sx={{ textAlign: 'justify' }} >
                        <span style={{ fontWeight: 'bold' }}>
                            Corría el año 1976 y una visionaria profesora concretaba un trascendental
                            sueño: éste consistía en poner la primera piedra de lo que sería nuestra
                            institución. Hace años se venía forjando en sus corazones el noble anhelo,
                            y además desafío, de trabajar por el bien social, específicamente ...

                            <br />
                        </span>
                    </Typography>

                </CardContent>
                <CardActions sx={{ bgcolor: '#465053e0', boxShadow: 'inset 0 0 11px #503c02', justifyContent: 'center' }}>
                    <Button size="small" variant="contained" color="primary"
                    onClick={() => navigate('/HistoriaDetalle')}
                    >Siga Leyendo</Button>
                </CardActions>
            </Card>

        </Item>
    )
}

export default historia