/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './ModalInserirAvaliacoes.css'
import { toast } from 'react-toastify'
import { postAvaliacao, putAvaliacao } from '../../api/avaliacoes'
import Input from '../Input/Input'
import { FaStar } from 'react-icons/fa'

function ModalInserirAvaliacoes({ mostrar, handleFechar, handleAtualizar, modo, idJogo, tituloJogo, avaliacao }) {
  const [comentario, setComentario] = useState('')
  const [nota, setNota] = useState('')
  const [erro, setErro] = useState({ comentario: '', nota: ''})
  const [hover, setHover] = useState(0)

  useEffect(() => {
    if (modo === 'avaliar') {
      setComentario('')
      setNota('')
    } else {
      setComentario(avaliacao.comentario)
      setNota(avaliacao.nota)
    }
    setErro({ comentario: '', nota: ''})
  }, [mostrar])

  const validar = () => {
    const erros = { comentario: '', nota: ''}

    if (comentario.trim().length > 500) {
      erros.comentario = 'O comentário deve ter até 500 caracteres!'
    }

    if (!nota) {
      erros.nota = 'Preencha uma nota!'
    }

    setErro(erros)
    return !erros.comentario && !erros.nota
  }

  const handlePostAvaliacao = async () => {
    if (validar()) {
      try {
        await postAvaliacao(comentario, nota, idJogo)
        toast.success('Avaliação realizada com sucesso!')
        handleAtualizar()
        handleFechar()
      } catch (erro) {
        toast.error('Erro ao postar avaliação!')
        console.error('Erro na postagem de avaliação: ' + erro)
      }
    } else {
      toast.error('Verifique os campos.')
    }
  }

  const handlePutAvaliacao = async () => {
    if (validar()) {
      try {
        await putAvaliacao(avaliacao.id, comentario, nota, idJogo)
        toast.success('Avaliação editada com sucesso!')
        handleAtualizar()
        handleFechar()
      } catch (erro) {
        toast.error('Erro ao editar avaliação!')
        console.error('Erro na edição de avaliação: ' + erro)
      }
    } else {
      toast.error('Verifique os campos.')
    }
  }

  if (!mostrar) return null

  return (
    <div className="modal__inserir__container">
      <div className="modal__inserir">
        <button className="modal__inserir__fechar" onClick={handleFechar}>
          ×
        </button>
        <div className="modal__inserir__tipografias">
          <h1 className="modal__inserir__titulo">{modo === 'avaliar' ? tituloJogo : 'Editando avaliação'}</h1>
          <h3 className="modal__inserir__subtitulo">
            {modo === 'avaliar' ? 'Merece qual nota?' : tituloJogo}
          </h3>
        </div>
        <div className="modal__inserir__estrelas">
          {[1, 2, 3, 4, 5].map(valor => (
              <FaStar
                key={valor}
                className={
                  valor <= (hover || nota)
                    ? nota >= valor
                      ? 'estrela verde'
                      : 'estrela branca'
                    : 'estrela'
                }
                onMouseEnter={() => setHover(valor)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setNota(valor)}
              />
            ))}
        </div>
        <p className="modal__inserir__erro">{erro.nota}</p>
        <h2 className="modal__inserir__label">Conte sua experiência! <span className="modal__inserir__label__subtitulo">(opcional)</span></h2>
        <Input
          modo="textarea"
          value={comentario}
          onChange={event => setComentario(event.target.value)}
          erro={erro.comentario}
        />
        <div className="modal__inserir__botoes">
          <button className="modal__inserir__botao__cancelar" onClick={handleFechar}>
            Cancelar
          </button>
          <button className="modal__inserir__botao__enviar" onClick={modo === 'avaliar' ? handlePostAvaliacao : handlePutAvaliacao}>
            {modo === 'avaliar' ? 'Enviar' : 'Editar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalInserirAvaliacoes