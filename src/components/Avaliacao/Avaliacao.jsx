import React from 'react'
import './Avaliacao.css'
import { FaStar } from 'react-icons/fa'

function Avaliacao(props) {
  return (
    <div className="avaliacao__container">
        <div className="tipografia">
            <p className="tipografia__titulo">{props.titulo}</p>
            <p className="tipografia__descricao">{props.avaliacao}</p>
        </div>
        <div className="nota">
            <p className="nota__tipografia">{props.nota}</p>
            <div className="nota__estrela">
              <FaStar/>
            </div>
        </div>
    </div>
  )
}

export default Avaliacao