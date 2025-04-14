import axios from "axios";
import Cookies from "js-cookie";

const API_URL = 'http://localhost:8080'

export const logar = async (apelido, senha) => {
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

    return token 
}

export const registrar = async (apelido, email, senha) => {
    const resposta = await axios.post(`${API_URL}/usuarios`, {
        apelido,
        email,
        senha
    })

    return resposta.data
}

export const sair = () => {
    Cookies.remove("token")
}
