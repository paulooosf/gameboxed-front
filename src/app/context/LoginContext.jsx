/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import {
  postLogin,
  postRegistrar,
  postSolicitarTokenSenha,
  postRedefinirSenha,
  sair,
} from '../../api/autenticacao'
import { toast } from 'react-toastify'

export const LoginContext = createContext({})

export const LoginProvider = ({ children }) => {
  const [logado, setLogado] = useState(false)
  const [apelido, setApelido] = useState('')

  useEffect(() => {
    const token = Cookies.get('token')
    const apelido = localStorage.getItem('apelido')
    if (token) {
      setLogado(true)
      setApelido(apelido)
    }
  }, [])

  const login = async (apelido, senha) => {
    try {
      const token = await postLogin(apelido, senha)
      if (!token) throw new Error('Token inválido!')
      setLogado(true)
      setApelido(apelido)
      return true
    } catch (erro) {
      toast.error('Erro ao realizar login, verifique as credenciais.')
      console.error('Erro no login: ' + erro)
      throw erro
    }
  }

  const loginOAuth = (token, apelido) => {
    Cookies.set('token', token, {
      expires: 1,
      sameSite: 'Lax',
    })
    localStorage.setItem('apelido', apelido)
    setLogado(true)
    setApelido(apelido)
  }

  const registrar = async (apelido, email, senha) => {
    try {
      await postRegistrar(apelido, email, senha)
    } catch (erro) {
      toast.error('Erro ao realizar cadastro, verifique as credenciais.')
      console.error('Erro no registro: ' + erro)
      throw erro
    }
  }

  const solicitarTokenSenha = async (email) => {
    try {
      await postSolicitarTokenSenha(email)
    } catch (erro) {
      toast.error(
        'Erro ao enviar e-mail, verifique se o e-mail existe e tente novamente.'
      )
      console.error('Erro no envio do e-mail: ' + erro)
      throw erro
    }
  }

  const redefinirSenha = async (token, senha) => {
    try {
      await postRedefinirSenha(token, senha)
    } catch (erro) {
      toast.error(
        'Erro ao redefinir senha, certifique-se que o token é válido e tente novamente.'
      )
      console.error('Erro na redefinição de senha: ' + erro)
      throw erro
    }
  }

  const logout = () => {
    sair()
    setApelido('')
    setLogado(false)
  }

  return (
    <LoginContext.Provider
      value={{
        logado,
        apelido,
        login,
        loginOAuth,
        registrar,
        solicitarTokenSenha,
        redefinirSenha,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)
