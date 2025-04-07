import React from 'react'
import './Login.css'
import Header from '../../../components/Header/Header'
import Background from '../../../assets/fallguys.png'
import Input from '../../../components/Input/Input'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <Header modo="login"/>
        <div className="login__container">
          <img src={Background} alt="" className="login__background"/>
          <div className="login__intro">
            <h1 className="login__titulo">Bem-vindo de volta!</h1>
          </div>
          <div className="login__form__container">
            <Input
              modo="texto"
              legenda="Usuário"
            />
            <Input
              modo="senha"
              legenda="Senha"
            />
            <a href="" className="login__link">Esqueceu sua senha?</a>
            <button className="login__botao">Criar conta</button>
            <p className="login__tipografia">Ainda não possui uma conta? <Link to="/registro" className="login__link">Cadastre-se!</Link></p>
          </div>
        </div>
    </>
  )
}

export default Login