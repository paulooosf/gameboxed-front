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
            <img src="https://pbs.twimg.com/media/GGonApTWkAApY-n.jpg:large" alt="" className="jogo__background__imagem"/>
        </div>
        <article className="jogo__sobre">
            <aside className="jogo__sobre__capa">
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202411/2217/15e82cd2b2f42ee8bcb56a37703da3cc722d42805e8eeddd.png" alt="" className="jogo__sobre__capa__imagem"/>
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
            <p className="jogo__avaliacoes__tipografia">Avaliações recentes:</p>
            <div className="jogo__avaliacoes__card">
                <Avaliacao/>
            </div>
        </article>
        <article className="jogo__trailer">

        </article>
        <Footer/>
    </body>
  )
}

export default Jogo