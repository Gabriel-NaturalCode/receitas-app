import { Link } from "react-router-dom";
import { useState } from "react";
import ReceitaCard, { ReceitaCardProps } from "../components/ReceitaCard";
import receitas from '../data/listaDeReceitas.json';

function Busca () {
    const [busca, definirBusca] = useState("");

    function buscar({ title, category }: ReceitaCardProps) {
        return (
        title.toLowerCase().includes(busca.toLocaleLowerCase()) ||
        category.toLowerCase().includes(busca.toLocaleLowerCase())
        )
    }

    const listaDeReceitas = receitas.filter(buscar);

    return (
        <>  
            <div className="container">
              <h1>Página de busca</h1>
              <Link to={"/"}>
                  <button className="btn">
                      Home
                  </button>
              </Link>
            </div>
            <input 
            type="text" 
            id="search" 
            placeholder="Pesquisar pelo nome ou categoria..."
            value={busca}
            onChange={(e) => definirBusca(e.target.value)}
            />
            <label htmlFor="search">🔎</label>
            <ul className="grid">
            {listaDeReceitas.map((receita) => (
              <ReceitaCard
                key={receita.id}
                receita={receita}
              />
            ))}
          </ul>
        </>
    )
}

export default Busca;
