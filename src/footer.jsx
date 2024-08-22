import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section " id="about">
          <h2>About Us</h2>
          <p>
            We are a leading digital marketing agency committed to helping
            businesses grow by leveraging the latest marketing strategies and
            technologies.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Jankipuram, Lucknow, India
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> +91 000000000
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@digitalmarketing.com
          </p>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Digital Marketing Agency | All Rights Reserved</p>
      </div>
    </footer>
  );
}
