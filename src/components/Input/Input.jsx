import React from 'react'
import './Input.css'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({ modo, legenda, erro }) {
    const [mostraSenha, setMostraSenha] = useState(false)

  return (
    <>
        {modo === 'texto' && (
            <>
                <p className="legenda">{legenda}</p>
                <input
                    type="text"
                    className="input"
                />
                {erro && <p className="erro">{erro}</p>}
            </>
        )}

        {modo === 'senha' && (
            <>
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
                    {mostraSenha ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
            </>
        )}
    </>
  )
}

export default Input