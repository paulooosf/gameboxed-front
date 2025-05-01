import React, { useEffect, useState } from 'react'
import './Login.css'
import Header from '../../../components/Header/Header'
import Background from '../../../assets/fallguys.png'
import Input from '../../../components/Input/Input'
import ModalEsqueciSenha from '../../../components/ModalEsqueciSenha/ModalEsqueciSenha'
import { Link } from 'react-router-dom'
import { useLogin } from '../../context/LoginContext'
import { useNavigate } from "react-router"
import { toast } from 'react-toastify'

function Login() {
  let navigate = useNavigate()
  const { logado, login } = useLogin()
  const [apelido, setApelido] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState({ apelido: '', senha: '' })
  const [mostrarModal, setMostrarModal] = useState(false)

  useEffect(() => {
    if (logado) {
      navigate("/")
    }
  }, [logado, navigate])

  const validar = () => {
    const erros = { apelido: '', senha: '' }

    if (!apelido.trim()) {
      erros.apelido = 'Preencha o apelido!'
    }

    if (!senha.trim()) {
      erros.senha = 'Preencha a senha!'
    }

    setErro(erros)
    return !erros.apelido && !erros.senha
  }

  const handleLogin = async () => {
    if (validar()) {
      try {
        const logado = await login(apelido, senha)
        if (logado) navigate('/')
      } catch (erro) {
        console.log('ERRO: ' + erro)
      }
    } else {
      toast.error('Verifique os campos.')
    }
  }

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
              value={apelido}
              onChange={event => setApelido(event.target.value)}
              erro={erro.apelido}
            />
            <Input
              modo="senha"
              legenda="Senha"
              value={senha}
              onChange={event => setSenha(event.target.value)}
              erro={erro.senha}
            />
            <a onClick={() => setMostrarModal(true)} className="login__link">Esqueceu sua senha?</a>
            <button className="login__botao" onClick={handleLogin}>
              Entrar
            </button>
            <p className="login__tipografia">Ainda não possui uma conta? <Link to="/registro" className="login__link">Cadastre-se!</Link></p>
          </div>
          <ModalEsqueciSenha mostrar={mostrarModal} handleFechar={() => setMostrarModal(false)}/>
        </div>
    </>
  )
}

export default Login