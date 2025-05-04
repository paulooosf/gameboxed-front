import { useEffect, useState } from 'react'
import './Registro.css'
import Header from '../../../components/Header/Header'
import Background from '../../../assets/gow.jpg'
import Input from '../../../components/Input/Input'
import { Link } from 'react-router'
import { useLogin } from '../../context/LoginContext'
import { useNavigate } from "react-router"
import { toast } from 'react-toastify'

function Registro() {
  let navigate = useNavigate()
  const { logado, login, registrar } = useLogin()
  const [apelido, setApelido] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState({ apelido: '', email: '', senha: '' })

  useEffect(() => {
    if (logado) {
      navigate("/")
    }
  }, [logado, navigate])

  const emailValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validar = () => {
    const erros = { apelido: '', email: '', senha: '' }

    if (!apelido.trim()) {
      erros.apelido = 'Preencha o apelido!'
    }
    
    if (apelido.length > 25) {
      erros.apelido = 'O apelido deve ter até 25 caracteres.'
    }

    if (!emailValido(email)) {
      erros.email = 'Digite um e-mail válido!'
    }

    if (!email.trim()) {
      erros.email = 'Preencha o e-mail!'
    }


    if (email.length > 70) {
      erros.email = 'O e-mail deve ter até 70 caracteres.'
    }

    if (!senha.trim()) {
      erros.senha = 'Preencha a senha!'
    }

    setErro(erros)
    return !erros.apelido && !erros.email && !erros.senha

  }

  const handleRegistrar = async () => {
    if (validar()) {
      try {
        await registrar(apelido, email, senha)
        const logado = await login(apelido, senha)
        toast.success('Você se registrou com sucesso! O redirecionamos à página inicial.')
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
        <div className="registro__container">
          <img src={Background} alt="" className="registro__background"/>
          <div className="registro__intro">
            <h1 className="registro__titulo">Crie sua conta.</h1>
            <h3 className="registro__subtitulo">É grátis!</h3>
          </div>
          <div className="registro__form__container">
            <Input
              modo="texto"
              legenda="Usuário"
              value={apelido}
              onChange={event => setApelido(event.target.value)}
              erro={erro.apelido}
            />
            <Input
              modo="texto"
              legenda="E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
              erro={erro.email}
            />
            <Input
              modo="senha"
              legenda="Senha"
              value={senha}
              onChange={event => setSenha(event.target.value)}
              erro={erro.senha}
            />
            <button className="registro__botao" onClick={handleRegistrar}>
              Criar conta
            </button>
            <p className="registro__tipografia">Já possui uma conta? <Link to="/login" className="login__link">Faça login!</Link></p>
          </div>
        </div>
    </>
  )
}

export default Registro