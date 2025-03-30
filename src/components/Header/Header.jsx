import React from 'react'
import Logo from '../../assets/logo.png'
import Pesquisa from '../Pesquisa/Pesquisa'
import './Header.css'
import './MenuHamburguer.css'
import { Link } from 'react-router-dom'

// TODO: Alterar exibição de links caso o usuário esteja deslogado e caso seja um admin.

function Header() {
  return (
    <div className="header__container">
      <header>
          <img src={Logo} alt="Logotipo do GameboXed" className="header__logo" />
          <Pesquisa/>
          <ul className="header__links">
            <li>
              <Link to="/">INÍCIO</Link>
            </li>
            <li><a href="">EM ALTA</a></li>
            <li><a href="">SAIR</a></li>
          </ul>
      </header>
    </div>
  )
}

export default Header