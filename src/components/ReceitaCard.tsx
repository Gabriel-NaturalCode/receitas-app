import { Link } from "react-router-dom";

export interface ReceitaCardProps {
    receita: {
        id: number;
        title: string;
        category: string;
        image: string;
    }
}

function ReceitaCard (props: ReceitaCardProps) {
    const { receita: {
        id,
        title,
        category,
        image
    } } = props;
    return (
        <>
            <Link to={"/detalhes/" + id} className="link">
                <li className="cards">
                        <img src={image} alt="imagem do prato" />
                        <h3>{title}</h3>
                        <p>{category}</p>
                </li>
            </Link>
        </>
      );
    }

export default ReceitaCard;
