import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { logar, registrar, sair } from "../../api/autenticacao";
import { toast } from "react-toastify";

export const LoginContext = createContext({})

export const LoginProvider = ({ children }) => {
    const [logado, setLogado] = useState(false)

    useEffect(() => {
        const token = Cookies.get("token")
        if (token) {
            setLogado(true)
        }
    }, []) 

    const login = async (apelido, senha) => {
        try {
            const token = await logar(apelido, senha)
            if (!token) throw new Error('Token inválido!')
            setLogado(true)
            return true
        } catch (erro) {
            toast.error('Erro ao realizar login, verifique as credenciais.')
            console.error('Erro no login: ' + erro)
            throw erro
        }
    }

    const register = async (apelido, email, senha) => {
        try {
            await registrar(apelido, email, senha)
        } catch (erro) {
            toast.error('Erro ao realizar cadastro, verifique as credenciais.')
            console.error('Erro no registro: ' + erro)
            throw erro
        }
    }

    const logout = () => {
        sair()
        setLogado(false)
    }

    return (
        <LoginContext.Provider value={{ logado, login, register, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)