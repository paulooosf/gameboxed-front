import axios from "axios";

const API_URL = 'http://localhost:8080'

export const getJogos = async (pagina, tamanhoLista, ordenacao) => {
    const resposta = await axios.get(`${API_URL}/jogos/lista?page=${pagina}&size=${tamanhoLista}&sort=${ordenacao}`)

    return resposta.data
}

export const getJogo = async (id) => {
    const resposta = await axios.get(`${API_URL}/jogos/${id}`)

    return resposta.data
}