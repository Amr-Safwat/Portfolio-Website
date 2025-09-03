import "./landing.css";
import imageProg from '../../assets/image-programming.png';

export default function Landing() {
  return (
    <>
      <div className="landing">
        <div className="container">
          <div className="left-section">
            <div className="hello">Hello, It's Me</div>
            <div className="name">Amr Safwat</div>
            <div className="jop">
              And I'm a <span>Front-End Developer</span>
            </div>
            <p>
              I'm a front end developer have some experience in building
              responsive websites using HTML, CSS, Bootstrap, JavaScript, and
              React.js...
            </p>
            <a href="../../assets/Amr-Safwat-CV.pdf" className="btn" download>
              Download CV
            </a>
            <div className="icons">
              <a href="#" className="icon">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-facebook"></i>
              </a>
            </div>{' '}
          </div>
          <div className="right-section">
            <img src={imageProg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
