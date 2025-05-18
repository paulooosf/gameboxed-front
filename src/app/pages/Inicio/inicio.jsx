import { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Background from '../../../assets/background-inicio.png'
import Card from '../../../components/Card/Card'
import './Inicio.css'
import { Link } from 'react-router-dom'
import { useLogin } from '../../context/LoginContext'
import { getJogos } from '../../../api/jogos'
import { toast } from 'react-toastify'
import Carregamento from '../../../components/Carregamento/Carregamento'

function Inicio() {
  const { logado } = useLogin()
  const [melhoresJogos, setMelhoresJogos] = useState([])
  const [jogosRecentes, setJogosRecentes] = useState([])
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    const carregarJogos = async () => {
      try {
        setCarregando(true)
        
        const respostaMelhores = await getJogos(0, 5, 'nota,desc')
        const respostaRecentes = await getJogos(0, 5, 'ano,desc')

        setMelhoresJogos(respostaMelhores.content)
        setJogosRecentes(respostaRecentes.content)
        setCarregando(false)
      } catch (erro) {
        setCarregando(false)
        toast.error('Erro ao pesquisar jogos.')
        console.error('Erro na requisição de jogos: ' + erro)
      }
    }

    carregarJogos()
  }, [])

  return (
    <div className="inicio">
      <img
        src={Background}
        alt="Imagem de fundo do site, uma arte do jogo Valorant"
        className="inicio__background"
      />
      <Header modo={logado ? 'logado' : 'deslogado'} />
      <section className="inicio__intro">
        <p className="inicio__intro__tipografia">Avalie jogos.</p>
        <p className="inicio__intro__tipografia">
          Compartilhe sua experiência.
        </p>
        <p className="inicio__intro__tipografia">
          Descubra novas possibilidades.
        </p>
        {!logado && (
          <Link to="/registro">
            <button className="inicio__intro__botao">Registre-se!</button>
          </Link>
        )}
      </section>
      <section className="inicio__em__alta">
        <p className="inicio__em__alta__tipografia">Mais bem avaliados:</p>
        <div className="inicio__cards">
          {melhoresJogos.map((jogo) => (
            <Link key={jogo.id} to={`/jogo/${jogo.id}`}>
              <Card
                capa={jogo.linkCapa}
                titulo={jogo.nome}
                nota={parseFloat(jogo.nota).toFixed(2)}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="inicio__adicionados__recentemente">
        <p className="inicio__adicionados__recentemente__tipografia">
          Adicionados Recentemente:
        </p>
        <div className="inicio__cards">
          {jogosRecentes.map((jogo) => (
            <Link key={jogo.id} to={`/jogo/${jogo.id}`}>
              <Card
                capa={jogo.linkCapa}
                titulo={jogo.nome}
                nota={parseFloat(jogo.nota).toFixed(2)}
              />
            </Link>
          ))}
        </div>
      </section>
      <Carregamento mostrar={carregando}/>
      <Footer/>
    </div>
  )
}

export default Inicio
