import './Jogos.css'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Card from '../../../components/Card/Card'
import Background from '../../../assets/background-inicio.png'
import { useLogin } from '../../context/LoginContext'
import { getJogos } from '../../../api/jogos'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useSearchParams } from 'react-router-dom'
import Pesquisa from '../../../components/Pesquisa/Pesquisa'
import Carregamento from '../../../components/Carregamento/Carregamento'

function Jogos() {
  const { logado } = useLogin()
  const [parametros] = useSearchParams()
  const nomeJogo = parametros.get('busca') || ''
  const [jogos, setJogos] = useState([])
  const [pagina, setPagina] = useState(0)
  const [totalPaginas, setTotalPaginas] = useState(0)
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    const carregarJogos = async () => {
      try {
        setCarregando(true)
        const resposta = await getJogos(pagina, 10, 'nota,desc', nomeJogo)
        setJogos(resposta.content)
        setTotalPaginas(resposta.totalPages)
        setCarregando(false)
      } catch (erro) {
        setCarregando(false)
        toast.error('Erro ao pesquisar jogos.')
        console.error('Erro na requisição de jogos: ' + erro)
      }
    }
    carregarJogos()
  }, [pagina, nomeJogo])

  return (
    <div className="jogos">
      <img
        src={Background}
        alt="Imagem de fundo do site, uma arte do jogo Valorant"
        className="jogos__background"
      />
      <Header modo={logado ? 'logado' : 'deslogado'} mostrarPesquisa={false} />
      <div className="jogos__pesquisa">
        <Pesquisa modo={'jogos'} />
      </div>
      <main className="jogos__resultado">
        {nomeJogo ? (
          <h1 className="jogos__resultado__tipografia">
            Exibindo resultados para <span className="jogos__resultado__tipografia__verde">{nomeJogo}</span>:
          </h1>
        ) : (
          <h1 className="jogos__resultado__tipografia">Exibindo jogos:</h1>
        )}
        <div className="jogos__cards">
          <div className="cards__container">
            {jogos.map((jogo) => (
              <Link key={jogo.id} to={`/jogo/${jogo.id}`}>
                <Card
                  capa={jogo.linkCapa}
                  titulo={jogo.nome}
                  nota={parseFloat(jogo.nota).toFixed(2)}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="jogos__paginas">
          <button
            onClick={() => setPagina((anterior) => Math.max(anterior - 1, 0))}
            disabled={pagina === 0}
          >
            &lt;
          </button>

          <p>
            Página {pagina + 1} de {totalPaginas}
          </p>

          <button
            onClick={() =>
              setPagina((anterior) => Math.min(anterior + 1, totalPaginas - 1))
            }
            disabled={pagina >= totalPaginas - 1}
          >
            &gt;
          </button>
        </div>
      </main>
      <Carregamento mostrar={carregando}/>
      <Footer />
    </div>
  )
}

export default Jogos
