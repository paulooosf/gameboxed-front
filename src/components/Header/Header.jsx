import React from 'react'
import Logo from '../../assets/logo.png'
import Pesquisa from '../Pesquisa/Pesquisa'
import { slide as MenuHamburguer } from 'react-burger-menu'
import './Header.css'
import './MenuHamburguer.css'

// TODO: Alterar exibição de links caso o usuário esteja deslogado e caso seja um admin.

function Header() {
  return (
    <div className="container">
      <MenuHamburguer>
        <a href="">INÍCIO</a>
        <a href="">EM ALTA</a>
        <a href="">SAIR</a>
      </MenuHamburguer>
      <header>
          <img src={Logo} alt="Logotipo do GameboXed" className="header__logo" />
          <Pesquisa/>
          <ul className="header__links">
            <li><a href="">INÍCIO</a></li>
            <li><a href="">EM ALTA</a></li>
            <li><a href="">SAIR</a></li>
          </ul>
      </header>
    </div>
  )
}

export default Header