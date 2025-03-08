import React from 'react'
import Logo from '../../assets/logo.png'
import LinkedIn from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
        <img src={Logo} alt="Logo do website GameBoxed" className="footer__logo"/>
        <p className="footer__tipografia">Desenvolvido por Paulo Henrique</p>
        <p className="footer__tipografia">@paulooosf</p>
        <div className="footer__redes">
            <a href="https://www.linkedin.com/in/paulooosf/" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="Logo do LinkedIn" className="footer__linkedin"/>
            </a>
            <a href="https://github.com/paulooosf" className="footer__link" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="Logo do GitHub" className="footer__github"/>
            </a>
        </div>
        <p className="footer__data">{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer