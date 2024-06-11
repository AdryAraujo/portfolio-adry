import { useRef, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css';
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

// imagens
import bolha1 from './assets/bolha1.svg'
import bolha2 from './assets/bolha2.svg'
import bolha3 from './assets/bolha3.svg'
import bolha4 from './assets/bolha4.svg'
import perfil from './assets/perfil.png';
import computer from './assets/computer.svg';
import logo from './assets/logo.svg';

// icones
import { MdHome } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBars, FaTimes } from 'react-icons/fa'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* Barra de navegação */}
      <nav>
      <img src={logo} alt="" />
      <button
				className="menu"
        onClick={() => setMenuOpen(!menuOpen)}>
				<FaBars className='menu-icon'/>
			</button>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <a href="/">Home</a>
        </li>
        <li>
        <a href="/">Sobre Mim</a>
        </li>
        <li>
        <a href="/">Ferramentas</a>
        </li>
        <li>
        <a href="/">Contato</a>
        </li>
      </ul>
    </nav>
    
      {/* <img id='perfil' src={perfil} alt="logo" /> */}
      <div className="container">
        {/* <img className='bolha-left' src={bolha1} alt="logo" /> */}
        {/* <div className="descricao">
          <h1>Adryelle Araujo da Silva</h1>
          <h3>Front-end Developer | WebDsegin | Power Bi</h3>
          <p>Estudante de Ciência da Computação pela Universidade Federal de Sergipe, desenvolvedora Web com foco em Frontend, aprendendo cada vez mais Web Design. Apaixonada em descobrir coisas novas.</p>
        </div> */}
        {/* <img className='bolha-right' src={bolha2} alt="logo" /> */}
      </div>
      {/*<div className='sobreMim'>
      <div className='sobreMimText'>
        <h1>Sobre Mim</h1>
        <p>Atuei 2 anos na Softeam, empresa Junior da Universidade Federal de Sergipe, como desenvolvedora de sites com WordPress. Bolsista do Instituto Federal de Sergipe, desenvolvendo dashboards em Power Bi e dando manutenção no site com o cms Joomla. Além de ser estagiária na Secretaria de Estado da Educação e da Cultura de Sergipe, na qual ajudo nos dashboards em Power Bi.</p>
        <button className='button'>Saiba Mais</button>
      </div>
      <img src={computer} alt='computer' />
    </div>
    <div className='tools'>
    <img className='bolha-left' src={bolha3} alt="logo" />
    <img className='bolha-right' src={bolha4} alt="logo" />
      <div className='tools-card'>
        <h2>Front-End</h2>
        <ul>
          <li><FaHtml5/>HTML</li>
          <li><IoLogoJavascript/>JavaScript</li>
          <li><FaCss3Alt/>CSS</li>
          <li><FaReact/>React</li>
          <li><SiMui/>Material Ui</li>
          <li><SiChakraui/>Chakra Ui</li>
          <li><BsBootstrapFill/>Bootstrap</li>
        </ul>
        <button className='button-card'>Acesse o Portfólio</button>
      </div>
      <div className='tools-card'>
        <h2>Web Design</h2>
        <ul>
          <li><FaFigma/>Figma</li>
          <li><SiCanva/>Canva</li>
        </ul>
        <button className='button-card'>Acesse o Portfólio</button>
      </div>
      <div className='tools-card'>
        <h2>Business Inteligence</h2>
        <ul>
          <li><MdHome/>Power Bi</li>
          <li>Pentaho</li>
          <li>Postgresql</li>
        </ul>
        <button className='button-card'>Acesse o Portfólio</button>
      </div>
    </div>  */}
    </div>
  )
}

export default App
