import { useEffect, useState } from 'react'
import './ModalEsqueciSenha.css'
import { toast } from 'react-toastify'
import Input from '../Input/Input'
import { useLogin } from '../../app/context/LoginContext'

function ModalEsqueciSenha({ mostrar, handleFechar }) {
  const { solicitarTokenSenha, redefinirSenha } = useLogin()
  const [avancar, setAvancar] = useState(false)
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState({ email: '', token: '', senha: '' })

  useEffect(() => {
    setAvancar(false)
    setEmail('')
    setToken('')
    setSenha('')
    setConfirmarSenha('')
    setErro({ email: '', token: '', senha: '' })
  }, [mostrar])

  const validarEmail = () => {
    const erros = { email: '', token: '', senha: '' }

    if (!email.trim()) {
      erros.email = 'Preencha o e-mail!'
    }

    setErro(erros)
    return !erros.email
  }

  const validarSenhas = () => {
    const erros = { email: '', token: '', senha: '' }

    if (!token.trim()) {
      erros.token = 'Preencha o token!'
    }

    if (!senha.trim() || !confirmarSenha.trim()) {
      erros.senha = 'Preencha a senha!'
    }

    if (senha.trim() !== confirmarSenha.trim()) {
      erros.senha = 'As senhas não são iguais!'
    }

    setErro(erros)
    return !erros.senha && !erros.token
  }

  const handleEnviarEmail = async () => {
    if (validarEmail()) {
      try {
        await solicitarTokenSenha(email)
        setAvancar(true)
      } catch (erro) {
        console.log('ERRO: ' + erro)
      }
    } else {
      toast.error('Verifique os campos.')
    }
  }

  const handleRedefinirSenha = async () => {
    if (validarSenhas()) {
      try {
        await redefinirSenha(token, senha)
        toast.success('Senha redefinida com sucesso!')
        handleFechar()
      } catch (erro) {
        console.log('ERRO: ' + erro)
      }
    } else {
      toast.error('Verifique os campos.')
    }
  }

  if (!mostrar) return null

  return (
    <div className="modal__container">
      <div className="modal">
        <button className="modal__fechar" onClick={handleFechar}>
          ×
        </button>
        <div className="modal__tipografias">
          <h1 className="modal__titulo">Esqueceu sua senha?</h1>
          <h3 className="modal__subtitulo">
            Não se preocupe! Enviaremos um token de redefinição de senha para o seu
            e-mail cadastrado.
          </h3>
        </div>
        {!avancar ? (
          <>
            <Input
              modo="texto"
              legenda="E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
              erro={erro.email}
            />
            <button className="modal__botao" onClick={handleEnviarEmail}>
              Enviar e-mail
            </button>
          </>
        ) : (
          <>
            <div className="modal__form__container">
              <Input
                modo="texto"
                legenda="Token"
                value={token}
                onChange={event => setToken(event.target.value)}
                erro={erro.token}
              />
              <Input
                modo="senha"
                legenda="Nova senha"
                value={senha}
                onChange={event => setSenha(event.target.value)}
              />
              <Input
                modo="senha"
                legenda="Confirme a senha"
                value={confirmarSenha}
                onChange={event => setConfirmarSenha(event.target.value)}
                erro={erro.senha}
              />
              <button className="modal__botao" onClick={handleRedefinirSenha}>
                Redefinir
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ModalEsqueciSenha