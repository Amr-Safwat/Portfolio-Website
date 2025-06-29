import './footer.css'

export default function Footer() {
    return (
      <footer class="footer">
        <p>
          Copyrights @ <span>Amr Safwat</span>
        </p>
        <div class="icons">
          <a
            href="https://www.linkedin.com/in/amr-safwat-962699271"
            target="_blank"
          >
            <i class="fab fa-linkedin linked"></i>
          </a>
          <a href="https://github.com/Amr-Safwat" target="_blank">
            <i class="fab fa-github git"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram insta"></i>
          </a>
          <a href="https://www.facebook.com/AmrSafwat02" target="_blank">
            <i class="fab fa-facebook face"></i>
          </a>
        </div>
      </footer>
    );
}