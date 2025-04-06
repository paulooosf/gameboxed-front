import React from 'react'
import './Registro.css'
import Header from '../../../components/Header/Header'
import Background from '../../../assets/gow.jpg'
import Input from '../../../components/Input/Input'

function Registro() {
  return (
    <div className="registro">
        <Header modo="login"/>
        <img src={Background} alt="" className="registro__background"/>
        <h1 className="registro__titulo">Crie sua conta.</h1>
        <h3 className="registro__subtitulo">É grátis!</h3>
        <Input
          modo="senha"
          legenda="Usuário"
          erro="Erro!"
        />
    </div>
  )
}

export default Registro