/* eslint-disable react/prop-types */
import Logo from '../../assets/logo.png'
import Pesquisa from '../Pesquisa/Pesquisa'
import './Header.css'
import { Link } from 'react-router-dom'
import { useLogin } from '../../app/context/LoginContext'
import { useNavigate } from "react-router"
import { FaCaretDown } from 'react-icons/fa'
import { toast } from 'react-toastify'

function Header({ modo }) {
  let navigate = useNavigate()
  const { apelido, logout } = useLogin()

  const handleLogout = () => {
    logout()
    toast.success('Você se desconectou com sucesso! O redirecionamos à página inicial.')
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
              <li>
                <div className="dropdown">
                  <button className="dropdown__titulo">
                    {apelido} <FaCaretDown/>
                  </button>
                  <div className="dropdown__opcoes">
                    <p onClick={handleLogout}>SAIR</p>
                  </div>
                </div>
              </li>
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