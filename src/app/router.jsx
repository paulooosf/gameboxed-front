import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/inicio.jsx"

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element = {<Inicio/>}></Route>
        </Routes>
    )
}

export default AppRouter