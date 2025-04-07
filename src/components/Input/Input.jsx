import React from 'react'
import './Input.css'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({ modo, legenda, erro }) {
    const [mostraSenha, setMostraSenha] = useState(false)

  return (
    <>
        {modo === 'texto' && (
            <div className="input__itens">
                <p className="legenda">{legenda}</p>
                <input
                    type="text"
                    className="input"
                />
                {erro && <p className="erro">{erro}</p>}
            </div>
        )}

        {modo === 'senha' && (
            <div className="input__itens">
                <p className="legenda">{legenda}</p>
                <div className="input__container">
                    <input
                        type={mostraSenha ? "text" : "password"}
                        className="input"
                    />
                    <span 
                    onClick={() => setMostraSenha(!mostraSenha)}
                    className="icone"
                    >
                    {mostraSenha ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                </div>
                {erro && <p className="erro">{erro}</p>}
            </div>
        )}
    </>
  )
}

export default Input