import './services.css'

export default function Services() {
    return (
      <>
        <section class="services" id="services">
          <h2 class="title">Services</h2>
          <div class="container grid-3">
            <div class="card">
              <div class="icon">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <div class="info">
                <h3>Web Development</h3>
                <p>
                  I can building responsive and user-friendly web applications
                  using HTML, CSS, Bootstrap, SASS, JavaScript, Vue.js.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fa-regular fa-file-code"></i>
              </div>
              <div class="info">
                <h3>PSD To HTML</h3>
                <p>
                  Convert any PSD file into HTML for website building page
                  structure
                </p>
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fa-regular fa-window-restore"></i>
              </div>
              <div class="info">
                <h3>Landing Page</h3>
                <p>
                  Create a fully responsive landing page for all screens for
                  mobile, tablet and big screen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}