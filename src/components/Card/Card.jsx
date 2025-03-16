import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import './Card.css'

function Card(props) {
  return (
    <Link className="container">
        <div className="card">
            <img src={props.capa} alt="Capa do Jogo" className="card__imagem"/>
            <div className="card__tipografias">
                <p className="card__titulo">{props.titulo}</p>
                <div className="card__nota">
                    <p className="card__nota__numero">{props.nota}</p>
                    <div className="card__nota__estrela">
                        <FaStar/>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card