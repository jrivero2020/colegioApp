import React from 'react'
import { BrowserRouter, Routes, Route,Navigate ,useLocation } from 'react-router-dom'
import { NoMatch } from './assets/nomatch'
import Home from './core/Home'
import LstUsuarios from './usuario/LstUsuarios'
import Signup from './usuario/Signup'
import Signin from './auth/Signin'
import Inscripcion from './usuario/inscripcion'
import SwipeableTemporaryDrawer from './core/menu2'
import auth from './../client/auth/auth-helper';
import Carousel from './core/carousel'
import HistoriaDetalle from './assets/data/historiaDetalle'

const Signout = () => {
   auth.clearJWT()
   let location = useLocation();
console.log( 'location===>:', location )

   return <Navigate to="/"  replace />;
   
}

const MainRouter = () => {
    return (

            <Routes>
                <Route exact path="/" element={<Carousel />} />
                <Route exact path="/lstusuario" element={<LstUsuarios />} />
                <Route exact path="/Signup" element={<Signup />} />
                <Route exact path="/Inscripcion" element={<Inscripcion />} />
                <Route exact path="/Signin" element={<Signin />} />
                <Route exact path="/Signout" element={<Signout />} />
                <Route exact path="/menu2" element={<SwipeableTemporaryDrawer />} />
                <Route exact path="/Carousel" element={<Carousel />} />
                <Route exact path="/HistoriaDetalle" element={<HistoriaDetalle />} />
                <Route path="*" element={<NoMatch/>} />
            </Routes>

    )
}
export default MainRouter
