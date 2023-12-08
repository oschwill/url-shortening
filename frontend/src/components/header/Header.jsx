const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <img src="./images/logo.svg" alt="Logo" />
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Recources</a>
        </div>
        <div className="nav-right">
          <a href="#">Login</a>
          <a href="#" className="button">
            Sign Up
          </a>
        </div>
      </nav>
      <section className="head-intro">
        <article>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand&apos;s recognition and get detailed insights on how your links are
            performing.
          </p>
          <a href="#" className="button">
            Get Started
          </a>
        </article>
      </section>
    </header>
  );
};

export default Header;
