import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import { useLogin } from '../../context/LoginContext'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function LogadoOAuth() {
	const navigate = useNavigate()
	const { logado, loginOAuth } = useLogin()

	useEffect(() => {
		if (logado) {
			navigate('/')
		}

		const url = new URL(window.location.href)
		const token = url.searchParams.get('token')
		const apelido = url.searchParams.get('apelido')

		if (token) {
			try {
				loginOAuth(token, apelido)
				toast.success(
					'Você logou com sucesso! O redirecionamos à página inicial.'
				)
				if (logado) navigate('/')
			} catch (erro) {
				if (erro.response && erro.response.status === 401) {
					toast.error('Conta não encontrada ou inválida.')
					navigate('/login')
				}
				toast.error('Erro ao autenticar via Google, tente novamente.')
				console.log('ERRO: ' + erro)
				navigate('/login')
			}
		}
	}, [logado, navigate])
	return (
		<>
			<Header modo="login" />
			<div className="logado__container">
				<h1 className="logado__titulo">
					Login via Google realizado com sucesso! Redirecionando...
				</h1>
			</div>
		</>
	)
}

export default LogadoOAuth
