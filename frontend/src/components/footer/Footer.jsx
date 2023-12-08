const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <section className="footer-left">
          <article>
            <img src="./images/logo_footer.svg" alt="logo" />
          </article>
        </section>
        <section className="footer-right">
          <article>
            <p>Features</p>
            <a href="#">Link Shortening</a>
            <a href="#">Branded Links</a>
            <a href="#">Analytics</a>
          </article>
          <article>
            <p>Ressources</p>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </article>
          <article>
            <p>Company</p>
            <a href="#">About</a>
            <a href="#">Our Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </article>
          <article className="social-media">
            <img src="./images/icon-facebook.svg" alt="Facebook" />
            <img src="./images/icon-twitter.svg" alt="Twitter" />
            <img src="./images/icon-instagram.svg" alt="Instagram" />
            <img src="./images/icon-pinterest.svg" alt="Pinterest" />
          </article>
        </section>
      </div>

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Olli S.</a>.
      </div>
    </footer>
  );
};

export default Footer;
