import '../1-header/header.css';

export default function Header() {
  return (
    <header>
      <div class="container">
        <a href="#" class="logo">
          Portfolio
        </a>
        <div>
          <div class="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="icons">
            <i class="fa-solid fa-sun icon"></i>
            <i class="fa-solid fa-moon icon"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
