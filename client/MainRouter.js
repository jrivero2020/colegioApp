import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NoMatch } from './assets/nomatch'
import Home from './core/Home'
import LstUsuarios from './usuario/LstUsuarios'
import Signup from './usuario/Signup'
import Inscripcion from './usuario/inscripcion'
import SwipeableTemporaryDrawer from './core/menu2'

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/lstusuario" element={<LstUsuarios />} />
                <Route exact path="/Signup" element={<Signup />} />
                <Route exact path="/Inscripcion" element={<Inscripcion />} />
                <Route exact path="/menu2" element={<SwipeableTemporaryDrawer />} />
                <Route path="*" element={<NoMatch/>} />
            </Routes>
        </div>
    )
}
export default MainRouter
