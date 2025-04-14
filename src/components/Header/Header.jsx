import React from 'react'
import Logo from '../../assets/logo.png'
import Pesquisa from '../Pesquisa/Pesquisa'
import './Header.css'
import './MenuHamburguer.css'
import { Link } from 'react-router-dom'
import { useLogin } from '../../app/context/LoginContext'
import { useNavigate } from "react-router"

function Header({ modo }) {
  let navigate = useNavigate()
  const { logout } = useLogin()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className={`header__${modo}`}>
        <img src={Logo} alt="Logotipo do GameboXed" className="header__logo" />
        {modo === 'logado' && (
          <>
            <Pesquisa/>
            <ul className="header__links">
              <li>
                <Link to="/">INÍCIO</Link>
              </li>
              <li><a href="">EM ALTA</a></li>
              <li><a href="" onClick={handleLogout}>SAIR</a></li>
            </ul>
          </>
        )}

        {modo === 'deslogado' && (
          <>
            <Pesquisa/>
            <ul className="header__links">
              <li>
                <Link to="/">INÍCIO</Link>
              </li>
              <li>
                <Link to="/login">ENTRAR</Link>
              </li>
              <li>
                <Link to="/registro">CRIAR CONTA</Link>
              </li>
            </ul>
          </>
        )}

        {modo === 'login' && (
          <ul className="header__links">
            <li>
              <Link to="/">INÍCIO</Link>
            </li>
          </ul>
        )}
    </header>
  )
}

export default Header