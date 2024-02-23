import Busca from '../pages/Busca';
import PaginaDetalhe from '../pages/PaginaDetalhe';
import PaginaReceitas from '../pages/PaginaReceitas';
import { Route, Routes } from "react-router-dom";


function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<PaginaReceitas />} />
            <Route path="detalhes/:id" element={<PaginaDetalhe />} />
            <Route path="busca" element={<Busca />}/>
            <Route path="detalhes/:id/busca" element={<Busca />}/>
        </Routes>
    )
}

export default Rotas;
