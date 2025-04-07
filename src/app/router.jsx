import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio.jsx"
import Jogo from "./pages/Jogo/Jogo.jsx"
import Registro from "./pages/Registro/Registro.jsx"
import Login from "./pages/Login/Login.jsx"

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/jogo" element={<Jogo/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
        </Routes>
    )
}

export default AppRouter