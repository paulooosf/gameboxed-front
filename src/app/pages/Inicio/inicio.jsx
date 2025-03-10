import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Background from '../../../assets/background-inicio.png'
import './Inicio.css'

function Inicio() {
  return (
    <body className="inicio">
      <img src={Background} alt="Imagem de fundo do site, uma arte do jogo Valorant" className="inicio__background"/>
      <Header/>
      <div className="inicio__intro">
        <p className="inicio__intro__tipografia">Avalie jogos.</p>
        <p className="inicio__intro__tipografia">Compartilhe sua experiência.</p>
        <p className="inicio__intro__tipografia">Descubra novas possibilidades.</p>
        <button className="inicio__intro__botao">Registre-se!</button>
      </div>
      <Footer/>
    </body>
  )
}

export default Inicio