import { useEffect, useState } from 'react'
import './Login.css'
import Header from '../../../components/Header/Header'
import Background from '../../../assets/fallguys.png'
import Input from '../../../components/Input/Input'
import ModalEsqueciSenha from '../../../components/ModalEsqueciSenha/ModalEsqueciSenha'
import { Link } from 'react-router-dom'
import { useLogin } from '../../context/LoginContext'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { PulseLoader } from 'react-spinners'

function Login() {
  let navigate = useNavigate()
  const { logado, login } = useLogin()
  const [apelido, setApelido] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState({ apelido: '', senha: '' })
  const [mostrarModal, setMostrarModal] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const erro = params.get('erro')

    if (erro === 'usuario_nao_encontrado') {
      toast.error('Usuário não encontrado.')
    } else if (erro === 'erro_inesperado') {
      toast.error('Erro inesperado ao tentar autenticar com o Google.')
    }
  }, [])

  useEffect(() => {
    if (logado) {
      navigate('/')
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
        setCarregando(true)
        const logado = await login(apelido, senha)
        toast.success(
          'Você logou com sucesso! O redirecionamos à página inicial.'
        )
        setCarregando(false)
        if (logado) navigate('/')
      } catch (erro) {
        setCarregando(false)
        console.log('ERRO: ' + erro)
      }
    } else {
      toast.error('Verifique os campos.')
    }
  }

  return (
    <>
      <Header modo="login" />
      <div className="login__container">
        <img src={Background} alt="" className="login__background" />
        <div className="login__intro">
          <h1 className="login__titulo">Bem-vindo de volta!</h1>
        </div>
        <div className="login__form__container">
          <Input
            modo="texto"
            legenda="Usuário"
            value={apelido}
            onChange={(event) => setApelido(event.target.value)}
            erro={erro.apelido}
          />
          <Input
            modo="senha"
            legenda="Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            erro={erro.senha}
          />
          <button onClick={() => setMostrarModal(true)} className="login__link">
            Esqueceu sua senha?
          </button>
          <button className="login__botao" onClick={handleLogin}>
            {carregando ? <PulseLoader size={10} color="#13171E" /> : 'Entrar'}
          </button>
          <p className="login__ou">
            - OU -
          </p>
          <a className="login__google__botao" href="http://localhost:8080/autenticar/google">
            <svg width="25px" height="25px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
            Entrar com Google
          </a>
          <p className="login__tipografia">
            Ainda não possui uma conta?{' '}
            <Link to="/registro" className="login__link">
              Cadastre-se!
            </Link>
          </p>
        </div>
        <ModalEsqueciSenha
          mostrar={mostrarModal}
          handleFechar={() => setMostrarModal(false)}
        />
      </div>
    </>
  )
}

export default Login
