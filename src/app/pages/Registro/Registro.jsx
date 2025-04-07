import React from 'react'
import './Registro.css'
import Header from '../../../components/Header/Header'
import Background from '../../../assets/gow.jpg'
import Input from '../../../components/Input/Input'

function Registro() {
  return (
    <>
        <Header modo="login"/>
        <div className="registro__container">
          <img src={Background} alt="" className="registro__background"/>
          <div className="registro__intro">
            <h1 className="registro__titulo">Crie sua conta.</h1>
            <h3 className="registro__subtitulo">É grátis!</h3>
          </div>
          <Input
            modo="texto"
            legenda="Usuário"
          />
          <Input
            modo="texto"
            legenda="E-mail"
          />
          <Input
            modo="senha"
            legenda="Senha"
          />
          <button className="registro__botao">Criar conta</button>
          <p className="registro__tipografia">Já possui uma conta? <a href="" className="registro__link">Faça login!</a></p>
        </div>
    </>
  )
}

export default Registro