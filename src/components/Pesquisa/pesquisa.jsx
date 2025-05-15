import { GoSearch } from "react-icons/go";
import './Pesquisa.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pesquisa({ modo }) {
  const [nomeJogo, setNomeJogo] = useState('')
  const navigate = useNavigate()

  const handleKeydownPesquisar = (event) => {
    if (modo === 'jogos') {
      if (event.key === 'Enter') {
        navigate(`/jogos?busca=${encodeURIComponent(nomeJogo)}`)
      }
    } else {
      if (event.key === 'Enter' && nomeJogo.trim()) {
        navigate(`/jogos?busca=${encodeURIComponent(nomeJogo)}`)
      }
    }
  }
  
  return (
    <div className="pesquisa">
        <GoSearch className={modo === 'jogos' ? 'pesquisa__icone__grande' : 'pesquisa__icone'}/>
        <input 
          type="text" 
          placeholder={modo === 'jogos' ? 'Pesquisar' : 'Descubra Jogos'}
          className={modo === 'jogos' ? 'pesquisa__input__grande' : 'pesquisa__input'}
          onChange={event => setNomeJogo(event.target.value)}
          onKeyDown={handleKeydownPesquisar}
        />
    </div>
  )
}

export default Pesquisa