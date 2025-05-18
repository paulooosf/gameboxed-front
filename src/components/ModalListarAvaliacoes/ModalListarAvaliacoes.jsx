/* eslint-disable react/prop-types */
import './ModalListarAvaliacoes.css'
import Avaliacao from '../Avaliacao/Avaliacao'

function ModalListarAvaliacoes({
  mostrar,
  handleFechar,
  handleAtualizar,
  avaliacoes,
  titulo,
}) {
  if (!mostrar) return null

  return (
    <div className="modal__avaliacoes__container">
      <div className="modal__avaliacoes">
        <button className="modal__avaliacoes__fechar" onClick={handleFechar}>
          ×
        </button>
        <div className="modal__avaliacoes__tipografias">
          <h1 className="modal__avaliacoes__titulo">Avaliações</h1>
          <h3 className="modal__avaliacoes__subtitulo">{titulo}</h3>
        </div>
        {avaliacoes.map((avaliacao) => (
          <Avaliacao
            key={avaliacao.id}
            avaliacao={avaliacao}
            handleAtualizar={handleAtualizar}
          />
        ))}
      </div>
    </div>
  )
}

export default ModalListarAvaliacoes
