/* eslint-disable react/prop-types */
import { toast } from 'react-toastify'
import { deleteAvaliacao } from '../../api/avaliacoes'
import './ModalConfirmacao.css'

function ModalConfirmacao({ mostrar, handleFechar, handleAtualizar, idAvaliacao }) {
  if (!mostrar) return null

  const handleDeleteAvaliacao = async () => {
    try {
      await deleteAvaliacao(idAvaliacao)
      toast.success('Avaliação removida com sucesso!')
      handleAtualizar()
      handleFechar()
    } catch (erro) {
      toast.error('Erro ao remover avaliação!')
      console.error('Erro na remoção de avaliação: ' + erro)
    }
  }

  return (
    <div className="modal__confirmacao__container">
      <div className="modal__confirmacao">
        <button className="modal__confirmacao__fechar" onClick={handleFechar}>
          ×
        </button>
        <div className="modal__confirmacao__tipografias">
          <h1 className="modal__confirmacao__titulo">Tem certeza?</h1>
          <h3 className="modal__confirmacao__subtitulo">
            Após apagar a avaliação, ela não poderá ser recuperada! 
          </h3>
        </div>
        <div className="modal__confirmacao__botoes">
          <button className="modal__confirmacao__botao__cancelar" onClick={handleFechar}>
            Cancelar
          </button>
          <button className="modal__confirmacao__botao__enviar" onClick={handleDeleteAvaliacao}>
            Apagar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmacao