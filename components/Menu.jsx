import React from 'react';

const Menu = () => {
  return(
    <div>
      <ul className="menu-desk">
        <li className="nav-list"><a className="nav-link" href="">Inicio</a></li>
        <li className="nav-list"><a className="nav-link" href="">Sobre Mim</a></li>
        <li className="nav-list"><a className="nav-link" href="">Serviços</a></li>
        <li className="nav-list"><a className="nav-link" href="">Projetos</a></li>
        <li className="nav-list"><a className="nav-link" href="">Contato</a></li>
        </ul>
      
      <ul className = "menu-mobile" >
        <li className="nav-list"><a className="nav-link" href="">Inicio</a></li>
        <li className = "nav-list" > <a className="nav-link" href="">Sobre Mim</a></li>
        <li className = "nav-list" > <a className="nav-link" href="">Serviços</a> </li>
        <li className = "nav-list" > <a className="nav-link" href="">Projetos</a> </li>
        <li className = "nav-list" > <a className="nav-link" href="">Contato</a></li>
      </ul>
    </div>
  )
}
export default Menu;