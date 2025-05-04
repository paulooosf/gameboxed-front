/* eslint-disable react/prop-types */
import { toast } from 'react-toastify'
import { deleteAvaliacao } from '../../api/avaliacoes'
import './ModalConfirmacao.css'
import { PulseLoader } from 'react-spinners'
import { useState } from 'react'

function ModalConfirmacao({ mostrar, handleFechar, handleAtualizar, idAvaliacao }) {
  const [carregando, setCarregando] = useState(false)
  
  if (!mostrar) return null

  const handleDeleteAvaliacao = async () => {
    try {
      setCarregando(true)
      await deleteAvaliacao(idAvaliacao)
      toast.success('Avaliação removida com sucesso!')
      handleAtualizar()
      setCarregando(false)
      handleFechar()
    } catch (erro) {
      setCarregando(false)
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
            {carregando ? (
              <PulseLoader size={10} color="#13171E"/>
            ) : (
              'Apagar'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmacao