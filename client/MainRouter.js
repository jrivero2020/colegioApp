import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/menu'
//import LstUsuarios from './usuario/LstUsuarios'

const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    )
}
export default MainRouter
