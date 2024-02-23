import { Link } from "react-router-dom";
import ReceitaCard from "../components/ReceitaCard";
import receitas from '../data/listaDeReceitas.json';

function PaginaReceitas () {

    return (
        <>
          <div className="container">
            <h1>🍝 LIVRO DE RECEITAS</h1>
            <Link to={"busca"}>
            <button>Buscar</button>
            </Link>
          </div>
          <ul className='grid'>
            {receitas.map((receita) =>
              <ReceitaCard key={receita.id} receita={receita}/>
            )}
          </ul>
        </>
    )
}

export default PaginaReceitas;
