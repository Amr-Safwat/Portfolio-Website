import './About.css'
import myImage from '../../assets/images/image.png'

export default function About() {
    return (
      <>
        <section class="about" id="about">
          <h2 class="title">About Me</h2>
          <div class="container">
            <div class="image">
              <img src={myImage} alt="" />
            </div>
            <div class="info">
              <h2>I'm Amr Safwat</h2>
              <p>
                I'm a passionate and creative front-end developer have some
                experience in building responsive and user-friendly web
                applications using HTML, CSS, Bootstrap, JavaScript, and Vue.js.
                I have a strong knowledge of web design principles. I can learn
                new technologies, I hold a Bachelor's degree in Management
                Information Systems
              </p>
              <a href="#" class="main-btn">
                Read More!
              </a>
            </div>
          </div>
        </section>
      </>
    );
}