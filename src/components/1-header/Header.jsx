import { useRef } from 'react';
import '../1-header/header.css';

export default function Header() {

  const menu = useRef();

  function darkMode() {
    if (document.body.className === 'dark') {
      document.body.className = '';
    } else {
      document.body.className = 'dark';
    }
  }

  function showMenu() {
    if (menu.current.className === 'links') {
      menu.current.className = 'links fill-hei';
    } else {
      menu.current.className = 'links';
    }
  }

  return (
    <header>
      <div class="container">
        <a href="#" class="logo">
          Portfolio
        </a>
        <div>
          <div class="menu" onClick={showMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="links" ref={menu}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="icons" onClick={darkMode}>
            <i class="fa-solid fa-sun icon"></i>
            <i class="fa-solid fa-moon icon"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
