/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa'
import './Card.css'

function Card({ capa, titulo, nota }) {
  return (
    <div className="container">
        <div className="card">
            <img src={capa} alt="Capa do Jogo" className="card__imagem"/>
            <div className="card__tipografias">
                <p className="card__titulo">{titulo}</p>
                <div className="card__nota">
                    <p className="card__nota__numero">{nota}</p>
                    <div className="card__nota__estrela">
                        <FaStar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card