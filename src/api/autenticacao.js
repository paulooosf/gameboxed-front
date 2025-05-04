import axios from "axios";
import Cookies from "js-cookie";

const API_URL = 'http://localhost:8080'

export const postLogin = async (apelido, senha) => {
    const resposta = await axios.post(`${API_URL}/autenticar/login`, {
        apelido,
        senha
    }, {
        withCredentials: true
    })

    const { token } = resposta.data

    Cookies.set('token', token, {
        expires: 1,
        sameSite: 'Lax'
    })
    localStorage.setItem('apelido', apelido)

    return token 
}

export const postRegistrar = async (apelido, email, senha) => {
    const resposta = await axios.post(`${API_URL}/usuarios`, {
        apelido,
        email,
        senha
    })

    return resposta.data
}

export const postSolicitarTokenSenha = async (email) => {
    const resposta = await axios.post(`${API_URL}/autenticar/esqueci-senha`, {
        email
    })

    return resposta.data
}

export const postRedefinirSenha = async (token, senha) => {
    const resposta = await axios.post(`${API_URL}/autenticar/redefinir-senha`, {
        token,
        senha
    })

    return resposta.data
}

export const sair = () => {
    Cookies.remove('token')
    localStorage.removeItem('apelido')
}
