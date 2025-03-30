import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/inicio.jsx"
import Jogo from "./pages/Jogo/Jogo.jsx";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/jogo" element={<Jogo/>}></Route>
        </Routes>
    )
}

export default AppRouter