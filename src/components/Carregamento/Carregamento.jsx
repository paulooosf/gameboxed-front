import './Carregamento.css'
import { PulseLoader } from 'react-spinners'

function Carregamento({ mostrar }) {
  if (!mostrar) return null

  return (
    <div className="carregamento__container">
      <div className="carregamento">
        <h1 className="carregamento__titulo">Carregando, aguarde...</h1>
        <h1 className="carregamento_icone">
          <PulseLoader size={10} color="#C1FF72" />
        </h1>
      </div>
    </div>
  )
}

export default Carregamento
