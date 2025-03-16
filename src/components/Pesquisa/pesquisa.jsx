import React from 'react'
import { GoSearch } from "react-icons/go";
import './Pesquisa.css'

function Pesquisa() {
  return (
    <div className="pesquisa">
        <GoSearch className="pesquisa__icone"/>
        <input type="text" placeholder="Descubra Jogos" className="pesquisa__input" />
    </div>
  )
}

export default Pesquisa