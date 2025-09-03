import { useRef } from 'react';
import '../1-header/header.css';

export default function Header() {

  const menu = useRef();
  const sunIcon = useRef();
  const moonIcon = useRef();
  const header = useRef();

  function darkMode() {
    if (document.body.className === 'dark') {
      document.body.className = '';
      sunIcon.current.style.display = 'none'
      moonIcon.current.style.display = 'inline'
    } else {
      document.body.className = 'dark';
      moonIcon.current.style.display = 'none';
      sunIcon.current.style.display = 'inline'

    }
  }

  function showMenu() {
    if (menu.current.className === 'links') {
      menu.current.className = 'links fill-hei';
    } else {
      menu.current.className = 'links';
    }
  }

  document.body.onscroll = () => {
    header.current.style.backgroundColor = 'var(--body-color)';
  }

  return (
    <header ref={header}>
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
            <i ref={sunIcon} class="fa-solid fa-sun icon"></i>
            <i ref={moonIcon} class="fa-solid fa-moon icon"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
