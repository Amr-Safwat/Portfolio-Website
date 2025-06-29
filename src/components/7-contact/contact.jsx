import './contact.css'

export default function Contact() {
    return (
      <section class="contact" id="contact">
        <h2 class="title">Contact Me</h2>
        <div class="container">
          <a href="tel:+201033792397">
            <div class="card">
              <div class="icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="info">
                <h3>Phone</h3>
                <p>+201033792397</p>
              </div>
            </div>
          </a>
          <a href="mailto:amrsafwat02@gmail.com">
            <div class="card">
              <div class="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="info">
                <h3>Email</h3>
                <p>amrsafwat02@gmail.com</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
}