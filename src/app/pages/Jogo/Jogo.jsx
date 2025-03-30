import React from 'react'
import './Jogo.css'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Avaliacao from '../../../components/Avaliacao/Avaliacao'
import { FaStar } from 'react-icons/fa'

function Jogo() {
  return (
    <body className="jogo">
        <Header/>
        <div className="jogo__background">
            <img src="https://pbs.twimg.com/media/GGonApTWkAApY-n.jpg:large" alt="Banner do jogo" className="jogo__background__imagem"/>
        </div>
        <article className="jogo__sobre">
            <aside className="jogo__sobre__capa">
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202411/2217/15e82cd2b2f42ee8bcb56a37703da3cc722d42805e8eeddd.png" alt="Capa do jogo" className="jogo__sobre__capa__imagem"/>
            </aside>
            <section className="jogo__sobre__info">
                <div className="jogo__sobre__info__nome">
                    <p className="jogo__sobre__info__nome__titulo">The Crew Motorfest</p>
                    <p className="jogo__sobre__info__nome__ano">2024</p>
                </div>
                <p className="jogo__sobre__info__empresa">Ubisoft</p>
                <p className="jogo__sobre__info__descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vitae facilis error enim placeat provident ad velit, ex dolorem, unde nihil aliquam molestias? Perferendis repellendus facilis a dolores est iusto.</p>
            </section>
            <section className="jogo__sobre__avaliacoes">
                <div className="jogo__sobre__avaliacoes__nota">
                    <p className="jogo__sobre__avaliacoes__nota__tipografia">4.75</p>
                    <div className="jogo__sobre__avaliacoes__nota__estrela">
                        <FaStar/>
                    </div>
                </div>
                <p className="jogo__sobre__avaliacoes__quantidade">200 avaliações</p>
                <button className="jogo__sobre__avaliacoes__botao__avaliar">Avaliar</button>
            </section>
        </article>
        <article className="jogo__avaliacoes">
            <div className="jogo__avaliacoes__tipografias">
                <p className="jogo__avaliacoes__tipografia__recentes">Avaliações recentes:</p>
                <button className="jogo__avaliacoes__tipografia__ver__mais">Ver mais</button>
            </div>
            <div className="jogo__avaliacoes__cards">
                <Avaliacao
                    titulo="Avaliação de racemaster123:"
                    avaliacao="Que jogo incrível!! Passei horas fazendo diversas corridas e nem vi o tempo passar."
                    nota="5"
                />
                <Avaliacao
                    titulo="Avaliação de racemaster123:"
                    avaliacao="Que jogo incrível!! Passei horas fazendo diversas corridas e nem vi o tempo passar."
                    nota="5"
                />
            </div>
        </article>
        <article className="jogo__trailer">
            <iframe width="589" height="431" src="https://www.youtube.com/embed/ugKIELPN8mI?si=7DsfPZOV9P4mH4fV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </article>
        <Footer/>
    </body>
  )
}

export default Jogo