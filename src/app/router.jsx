import { Routes, Route } from "react-router-dom";
import Inicio from "../app/pages/Inicio/index.jsx"

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element = {<Inicio/>}></Route>
        </Routes>
    )
}

export default AppRouter