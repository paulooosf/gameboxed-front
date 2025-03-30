import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Background from '../../../assets/background-inicio.png'
import Card from '../../../components/Card/Card'
import './Inicio.css'
import { Link, useNavigate } from 'react-router-dom'

function Inicio() {
  const navigate = useNavigate()

  return (
    <body className="inicio">
      <img src={Background} alt="Imagem de fundo do site, uma arte do jogo Valorant" className="inicio__background"/>
      <Header/>
      <section className="inicio__intro">
        <p className="inicio__intro__tipografia">Avalie jogos.</p>
        <p className="inicio__intro__tipografia">Compartilhe sua experiência.</p>
        <p className="inicio__intro__tipografia">Descubra novas possibilidades.</p>
        <button className="inicio__intro__botao">Registre-se!</button>
      </section>
      <section className="inicio__em__alta">
        <p className="inicio__em__alta__tipografia">Em alta:</p>
        <div className="inicio__cards">
          <Link to="/jogo">
            <Card
              capa="https://image.api.playstation.com/vulcan/ap/rnd/202411/2217/15e82cd2b2f42ee8bcb56a37703da3cc722d42805e8eeddd.png"
              titulo="The Crew: Motorfest"
              nota="4.75"
            />
          </Link>
          <Card
            capa="https://i.namu.wiki/i/kZCETtwGMm6LKT_5HX8dAe2mYb_0KDqMRa6WBGHBBLHMGbxcVvu4yLVrNgBYCobQhhXR4XfvVagDJISQ4SpV7A.webp"
            titulo="Marvel Rivals"
            nota="4.92"
          />
          <Card
            capa="https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6"
            titulo="Valorant"
            nota="4.62"
          />
          <Card
            capa="https://www.software.cz/img/uploaded/2876_cyberpunk-2077-preview.jpg"
            titulo="Cyberpunk 2077"
            nota="4.88"
          />
          <Card
            capa="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/capsule_616x353.jpg?t=1739318340"
            titulo="Batman: Arkham Knight"
            nota="4.94"
          />
        </div>
      </section>
      <section className="inicio__adicionados__recentemente">
        <p className="inicio__adicionados__recentemente__tipografia">Adicionados Recentemente:</p>
        <div className="inicio__cards">
          <Card
            capa="https://image.api.playstation.com/vulcan/ap/rnd/202411/2217/15e82cd2b2f42ee8bcb56a37703da3cc722d42805e8eeddd.png"
            titulo="The Crew: Motorfest"
            nota="4.75"
          />
          <Card
            capa="https://i.namu.wiki/i/kZCETtwGMm6LKT_5HX8dAe2mYb_0KDqMRa6WBGHBBLHMGbxcVvu4yLVrNgBYCobQhhXR4XfvVagDJISQ4SpV7A.webp"
            titulo="Marvel Rivals"
            nota="4.92"
          />
          <Card
            capa="https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6"
            titulo="Valorant"
            nota="4.62"
          />
          <Card
            capa="https://www.software.cz/img/uploaded/2876_cyberpunk-2077-preview.jpg"
            titulo="Cyberpunk 2077"
            nota="4.88"
          />
          <Card
            capa="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/208650/capsule_616x353.jpg?t=1739318340"
            titulo="Batman: Arkham Knight"
            nota="4.94"
          />
        </div>      
      </section>
      <Footer/>
    </body>
  )
}

export default Inicio