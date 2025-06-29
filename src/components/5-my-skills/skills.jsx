import './skills.css'

export default function Skills() {
  return (
    <>
      <section class="skills" id="skills">
        <h2 class="title">My Skills</h2>
        <div class="container">
          <div class="card">
            <i class="fa-brands fa-html5"></i>
            <h3>HTML</h3>
          </div>
          <div class="card">
            <i class="fa-brands fa-css3-alt"></i>
            <h3>CSS</h3>
          </div>
          <div class="card">
            <i class="fa-brands fa-js"></i>
            <h3>JavaScrpt</h3>
          </div>
          <div class="card">
            <i class="fa-brands fa-bootstrap"></i>
            <h3>Bootstrap</h3>
          </div>
          <div class="card">
            <i class="fa-brands fa-vuejs"></i>
            <h3>Vue.js</h3>
          </div>
          <div class="card">
            <i class="fa-brands fa-sass"></i>
            <h3>SASS</h3>
          </div>
          <div class="card">
            <i class="fa-brands fa-gulp"></i>
            <h3>Gulp.js</h3>
          </div>
          <div class="card">
            <i class="fa-brands fa-github"></i>
            <h3>Git & Github</h3>
          </div>
        </div>
      </section>
    </>
  );
}
