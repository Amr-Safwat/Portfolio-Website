import './projects.css'
import img_1 from '../../assets/images/work1.png'
import img_2 from '../../assets/images/work2.png'
import img_3 from '../../assets/images/work3.png'
import img_4 from '../../assets/images/work4.png'
import img_5 from '../../assets/images/work5.png'
import img_6 from '../../assets/images/work6.png'
import img_7 from '../../assets/images/work7.png'
import img_8 from '../../assets/images/work8.png'
import img_9 from '../../assets/images/work9.png'

export default function Projects() {
    return (
      <section class="projects" id="projects">
        <h2 class="title">Portfolio</h2>
        <div class="container grid-3">
          <div class="card">
            <img src={img_1} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/Leon"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/Leon"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_2} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/kasper"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/kasper"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_3} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/amr"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/amr"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_8} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/Special-Design/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/Special-Design/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_5} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/YouTube-Clone/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/YouTube-Clone/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_7} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/Age_Calculation/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/Age_Calculation/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_9} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/Bootstrap-Design/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/Bootstrap-Design/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_6} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/CV_Template/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/CV_Template/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src={img_4} />
            <div class="info">
              <a
                href="https://amr-safwat.github.io/Band-template/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-link fa-2xl"></i>
              </a>
              <a
                href="https://amr-safwat.github.io/Band-template/"
                target="_blank"
                class="view-details"
              >
                <i class="fa-solid fa-eye fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <button class="main-btn btn">More</button>
      </section>
    );
}