/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Avaliacao.css'
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa'
import { useLogin } from '../../app/context/LoginContext'
import ModalInserirAvaliacoes from '../ModalInserirAvaliacoes/ModalInserirAvaliacoes'

function Avaliacao({ avaliacao, handleAtualizar }) {
  const { apelido } = useLogin()
  const [mostrarModalInserirAvaliacoes, setMostrarModalInserirAvaliacoes] = useState(false)

  return (
    <div className="avaliacao__container">
        <div className="tipografia">
            <p className="tipografia__titulo">Avaliação de {avaliacao.usuario}</p>
            <p className="tipografia__descricao">{avaliacao.comentario}</p>
        </div>
        <div className="nota">
          {apelido === avaliacao.usuario && (
            <div className="avaliacao__acoes">
              <button className="botao__icone" onClick={() => setMostrarModalInserirAvaliacoes(true)} title="Editar">
                <FaEdit/>
              </button>
              <button className="botao__icone" title="Excluir">
                <FaTrash/>
              </button>
            </div>
          )}
          <p className="nota__tipografia">{avaliacao.nota}</p>
          <div className="nota__estrela">
            <FaStar/>
          </div>
        </div>
        <ModalInserirAvaliacoes mostrar={mostrarModalInserirAvaliacoes} avaliacao={avaliacao} handleFechar={() => setMostrarModalInserirAvaliacoes(false)} handleAtualizar={handleAtualizar} modo="editar" idJogo={avaliacao.jogo.id} tituloJogo={avaliacao.jogo.nome}/>
    </div>
  )
}

export default Avaliacao
