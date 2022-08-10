import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './core/Home'
import LstUsuarios from './usuario/LstUsuarios'

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/lstusuario" element={<LstUsuarios />} />
            </Routes>
        </div>
    )
}
export default MainRouter
