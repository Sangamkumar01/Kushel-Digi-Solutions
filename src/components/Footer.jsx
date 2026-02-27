import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Top Row */}
        <div className="footer-top">

          {/* Logo */}
          <div className="footer-logo">
            <img src="/logo1.png" alt="KDS Logo" />
            <div className="logo-text">
              <h2>Kushel Digi</h2>
              <span>Solutions</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">

            <div className="contact-item">
              <div className="circle-icon">
                <svg viewBox="0 0 24 24" fill="white" width="18">
                  <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
                </svg>
              </div>
              <p>G-9, First Floor, Sector 63, Noida</p>
            </div>

            <div className="contact-item">
              <div className="circle-icon">
                <svg viewBox="0 0 24 24" fill="white" width="18">
                  <path d="M20 4H4v16h16V4zm-2 2l-6 5-6-5h12zm0 12H6V8l6 5 6-5v10z"/>
                </svg>
              </div>
              <p>Shubham@Kusheldigi.Com</p>
            </div>

            <div className="contact-item">
              <div className="circle-icon">
                <svg viewBox="0 0 24 24" fill="white" width="18">
                  <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3 .6.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C9.8 22.2 1.8 14.2 1.8 4.4 1.8 3.7 2.3 3.2 3 3.2h4.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .6 3 .2.4.1.9-.2 1.2l-2.2 2.2z"/>
                </svg>
              </div>
              <p>9045301702</p>
            </div>

          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">

          <div className="footer-left">
            <p>© 2026 Kusheldigi. All Rights Reserved.</p>
            <div className="footer-links">
              About Us | Insights | Blog | Privacy Policy | Sitemap
            </div>
          </div>

          <div className="footer-right">
            <h4>Follow Us On</h4>

            <div className="social-icons">

              {/* Dribbble */}
              <svg viewBox="0 0 24 24" fill="white" width="20">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>

              {/* Facebook */}
              <svg viewBox="0 0 24 24" fill="white" width="20">
                <path d="M22 12A10 10 0 1 0 12 22V14.9H9.4V12H12V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.4 2.9h-2.4V22A10 10 0 0 0 22 12z"/>
              </svg>

              {/* Instagram */}
              <svg viewBox="0 0 24 24" fill="white" width="20">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5z"/>
              </svg>

              {/* LinkedIn */}
              <svg viewBox="0 0 24 24" fill="white" width="20">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7 0h4.7v1.9h.1c.7-1.3 2.3-2.6 4.8-2.6 5.1 0 6 3.3 6 7.7V22h-5v-6.8c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V22H7V8z"/>
              </svg>

              {/* Pinterest */}
              <svg viewBox="0 0 24 24" fill="white" width="20">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.1-.1-.8-.2-2.1 0-3 .2-.8 1.3-5.3 1.3-5.3s-.3-.6-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.6 2 1.7 2 2 0 3.5-2.1 3.5-5 0-2.6-1.9-4.5-4.6-4.5-3.1 0-5 2.3-5 4.8 0 1 .4 2 1 2.6.1.1.1.2.1.4l-.4 1.6c-.1.3-.3.4-.6.2-1.7-.8-2.8-3.2-2.8-5.2 0-4.2 3.1-8.1 9-8.1 4.7 0 8.4 3.4 8.4 7.9 0 4.7-3 8.5-7.2 8.5-1.4 0-2.7-.7-3.2-1.5l-.9 3.4c-.3 1.2-1.1 2.7-1.6 3.6 1.2.4 2.4.6 3.7.6 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>

              {/* Twitter */}
              <svg viewBox="0 0 24 24" fill="white" width="20">
                <path d="M22 5.9c-.8.4-1.6.6-2.5.8.9-.5 1.6-1.3 2-2.3-.8.5-1.8.9-2.8 1.1A4.4 4.4 0 0 0 11 8.4c0 .3 0 .7.1 1C7.3 9.2 4.1 7.5 2 4.9c-.4.7-.6 1.5-.6 2.3 0 1.5.8 2.8 2 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.6 4.3-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.2 3 4.1 3A8.9 8.9 0 0 1 2 19.5 12.5 12.5 0 0 0 8.8 22c8.1 0 12.6-6.7 12.6-12.6v-.6c.9-.6 1.6-1.3 2.2-2.1z"/>
              </svg>

              {/* YouTube */}
              <svg viewBox="0 0 24 24" fill="white" width="20">
                <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.8 2.6 12 2.6 12 2.6h0s-5.8 0-8.6.3c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S.2 8 .2 9.8v1.6C.2 13.2.5 15 .5 15s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1C6.4 18.7 12 18.7 12 18.7s5.8 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.3-1.8.3-3.6V9.8c0-1.8-.3-3.6-.3-3.6zM9.8 14.6V7.9l6.4 3.3-6.4 3.4z"/>
              </svg>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}