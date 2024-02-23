import { Link, useParams } from "react-router-dom";
import receitas from '../data/listaDeReceitas.json';

function PaginaDetalhe () {
    const { id } = useParams();

    const receita = receitas.filter(
        (receita) => receita.id === Number(id)
      )[0];

  return (
        <>
        <div className="container">
            <Link to={"/"}>
            <button className="btn">
                Home
            </button>
            </Link>
            <Link to={"busca"}>
              <button>Buscar</button>
            </Link>
        </div>
        <div>
            <img src={receita.image} alt="imagem do prato" />
            <h3>{receita.title}</h3>
            <span>{receita.category}</span>
            <h3>Ingredientes:</h3>
            <ul>{receita.ingredients.map((ingrediente) => <>
                <li key={ingrediente}>{ingrediente}</li>
                </>)}</ul>
            <h3>Modo de Preparo</h3>
            <ul>{receita.instructions.map((instrucao) => <>
                <li key={instrucao}>{instrucao}</li>
                </>)}</ul>
            <h3>Tempo de Preparo</h3>
            <span>{receita.prepTime}</span>
            <h3>Rendimento</h3>
            <span>{receita.servings}</span>
            <div>{receita.videoUrl ? <><a target="blank" href={receita.videoUrl}>Assista ao vídeo</a></> : ""}</div>
            <span>{receita.vegetarian ? <><span>VEGGIE 💚</span></> : ""}</span>
            <span>{receita.glutenFree ? <><span>GLUTEN FREE 🌾</span></> : ""}</span>
        </div>
        </>
    )
   }

export default PaginaDetalhe;
