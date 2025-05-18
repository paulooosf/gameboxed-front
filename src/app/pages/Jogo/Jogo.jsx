/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './Jogo.css'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Avaliacao from '../../../components/Avaliacao/Avaliacao'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { getJogo } from '../../../api/jogos'
import { toast } from 'react-toastify'
import { useLogin } from '../../context/LoginContext'
import ModalListarAvaliacoes from '../../../components/ModalListarAvaliacoes/ModalListarAvaliacoes'
import ModalInserirAvaliacoes from '../../../components/ModalInserirAvaliacoes/ModalInserirAvaliacoes'

function Jogo() {
  const { id } = useParams()
  const { logado } = useLogin()
  const [jogo, setJogo] = useState({})
  const [mostrarModalAvaliacoes, setMostrarModalAvaliacoes] = useState(false)
  const [mostrarModalInserirAvaliacoes, setMostrarModalInserirAvaliacoes] =
    useState(false)
  const [atualizar, setAtualizar] = useState(false)

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await getJogo(id)
        setJogo(resposta)
      } catch (erro) {
        toast.error('Erro ao buscar dados do jogo.')
        console.error('Erro na requisição de dados do jogo: ' + erro)
      }
    }

    carregarDados()
  }, [atualizar])

  return (
    <div className="jogo">
      <Header modo={logado ? 'logado' : 'deslogado'} />
      <div className="jogo__background">
        <img
          src={jogo.linkBanner}
          alt="Banner do jogo"
          className="jogo__background__imagem"
        />
      </div>
      <article className="jogo__sobre">
        <aside className="jogo__sobre__capa">
          <img
            src={jogo.linkCapa}
            alt="Capa do jogo"
            className="jogo__sobre__capa__imagem"
          />
        </aside>
        <section className="jogo__sobre__info">
          <div className="jogo__sobre__info__nome">
            <p className="jogo__sobre__info__nome__titulo">{jogo.nome}</p>
            <p className="jogo__sobre__info__nome__ano">{jogo.ano}</p>
          </div>
          <p className="jogo__sobre__info__empresa">{jogo.empresa}</p>
          <p className="jogo__sobre__info__descricao">{jogo.descricao}</p>
        </section>
        <section className="jogo__sobre__avaliacoes">
          <div className="jogo__sobre__avaliacoes__nota">
            <p className="jogo__sobre__avaliacoes__nota__tipografia">
              {parseFloat(jogo.nota).toFixed(2)}
            </p>
            <div className="jogo__sobre__avaliacoes__nota__estrela">
              <FaStar />
            </div>
          </div>
          <p className="jogo__sobre__avaliacoes__quantidade">
            {jogo.quantidadeAvaliacoes === 1
              ? jogo.quantidadeAvaliacoes + ' Avaliação'
              : jogo.quantidadeAvaliacoes + ' Avaliações'}
          </p>
          {logado && (
            <button
              className="jogo__sobre__avaliacoes__botao__avaliar"
              onClick={() => setMostrarModalInserirAvaliacoes(true)}
            >
              Avaliar
            </button>
          )}
        </section>
      </article>
      <article className="jogo__avaliacoes">
        <div className="jogo__avaliacoes__tipografias">
          <p className="jogo__avaliacoes__tipografia__recentes">
            Avaliações recentes:
          </p>
          {jogo?.avaliacoes?.length > 4 && (
            <button
              className="jogo__avaliacoes__tipografia__ver__mais"
              onClick={() => setMostrarModalAvaliacoes(true)}
            >
              Ver mais
            </button>
          )}
        </div>
        {jogo?.avaliacoes?.length === 0 ? (
          <Avaliacao avaliacao="Sem avaliações até o momento!" />
        ) : (
          <div className="jogo__avaliacoes__cards">
            {jogo?.avaliacoes
              ?.toReversed()
              .slice(0, 4)
              .map((avaliacao) => (
                <Avaliacao
                  key={avaliacao.id}
                  avaliacao={avaliacao}
                  handleAtualizar={() => setAtualizar((prev) => !prev)}
                />
              ))}
          </div>
        )}
        <ModalInserirAvaliacoes
          mostrar={mostrarModalInserirAvaliacoes}
          handleFechar={() => setMostrarModalInserirAvaliacoes(false)}
          handleAtualizar={() => setAtualizar((prev) => !prev)}
          modo="avaliar"
          idJogo={jogo.id}
          tituloJogo={jogo.nome}
        />
        <ModalListarAvaliacoes
          mostrar={mostrarModalAvaliacoes}
          handleFechar={() => setMostrarModalAvaliacoes(false)}
          handleAtualizar={() => setAtualizar((prev) => !prev)}
          avaliacoes={jogo.avaliacoes}
          titulo={jogo.nome}
        />
      </article>
      <article className="jogo__trailer">
        {jogo.linkTrailer && (
          <iframe
            width="589"
            height="431"
            src={converterLinkYoutube(jogo.linkTrailer)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </article>
      <Footer />
    </div>
  )
}

function converterLinkYoutube(link) {
  try {
    const url = new URL(link)

    if (url.hostname === 'youtu.be') {
      const videoId = url.pathname.slice(1)
      return `https://www.youtube.com/embed/${videoId}`
    }

    const idVideo = url.searchParams.get('v')
    return idVideo ? `https://www.youtube.com/embed/${idVideo}` : null
  } catch (erro) {
    console.error('Erro ao converter o link do trailer: ' + erro)
    return null
  }
}

export default Jogo
