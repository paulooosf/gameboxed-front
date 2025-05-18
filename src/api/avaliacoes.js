import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:8080'

export const getAvaliacoes = async (pagina, tamanhoLista) => {
  const resposta = await axios.get(
    `${API_URL}/avaliacoes/lista?page=${pagina}&size=${tamanhoLista}`
  )

  return resposta.data
}

export const getAvaliacao = async (id) => {
  const resposta = await axios.get(`${API_URL}/avaliacoes/${id}`)

  return resposta.data
}

export const postAvaliacao = async (comentario, nota, idJogo) => {
  const token = Cookies.get('token')

  const resposta = await axios.post(
    `${API_URL}/avaliacoes`,
    {
      comentario,
      nota,
      idJogo,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return resposta.data
}

export const putAvaliacao = async (id, comentario, nota, idJogo) => {
  const token = Cookies.get('token')

  const resposta = await axios.put(
    `${API_URL}/avaliacoes/editar?id=${id}`,
    {
      comentario,
      nota,
      idJogo,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return resposta.data
}

export const deleteAvaliacao = async (id) => {
  const token = Cookies.get('token')

  const resposta = await axios.delete(
    `${API_URL}/avaliacoes/deletar?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return resposta.data
}
