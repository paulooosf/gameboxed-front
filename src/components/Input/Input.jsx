/* eslint-disable react/prop-types */
import './Input.css'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Input({ modo, legenda, erro, value, onChange }) {
  const [mostraSenha, setMostraSenha] = useState(false)

  return (
    <>
      {modo === 'texto' && (
        <div className="input__itens">
          <p className="legenda">{legenda}</p>
          <input
            type="text"
            className="input"
            value={value}
            onChange={onChange}
          />
          {erro && <p className="erro">{erro}</p>}
        </div>
      )}

      {modo === 'textarea' && (
        <div className="input__itens">
          <p className="legenda">{legenda}</p>
          <textarea className="input" value={value} onChange={onChange} />
          {erro && <p className="erro">{erro}</p>}
        </div>
      )}

      {modo === 'senha' && (
        <div className="input__itens">
          <p className="legenda">{legenda}</p>
          <div className="input__container">
            <input
              type={mostraSenha ? 'text' : 'password'}
              className="input"
              value={value}
              onChange={onChange}
            />
            <span
              onClick={() => setMostraSenha(!mostraSenha)}
              className="icone"
            >
              {mostraSenha ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {erro && <p className="erro">{erro}</p>}
        </div>
      )}
    </>
  )
}

export default Input
