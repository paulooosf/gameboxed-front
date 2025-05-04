import React from 'react'
import './Avaliacao.css'
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa'
import { useLogin } from '../../app/context/LoginContext'

function Avaliacao({ usuario, avaliacao, nota }) {
  const { apelido } = useLogin()

  return (
    <div className="avaliacao__container">
        <div className="tipografia">
            <p className="tipografia__titulo">Avaliação de {usuario}</p>
            <p className="tipografia__descricao">{avaliacao}</p>
        </div>
        <div className="nota">
          {apelido === usuario && (
            <div className="avaliacao__acoes">
              <button className="botao__icone" title="Editar">
                <FaEdit/>
              </button>
              <button className="botao__icone" title="Excluir">
                <FaTrash/>
              </button>
            </div>
          )}
          <p className="nota__tipografia">{nota}</p>
          <div className="nota__estrela">
            <FaStar/>
          </div>
        </div>
    </div>
  )
}

export default Avaliacao
