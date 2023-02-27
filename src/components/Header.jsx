import background from '../assets/images/background-colors.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <section id="header">
      <div
        className={classes.headerBox}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={classes.headerTitle}>
          <h1>Hi, I'm Chase</h1>
          <p>A JavaScript and Python developer.</p>
        </div>
        <div className={classes.headerLinks}>
          <a
            className={classes.githubLink}
            href="https://github.com/chase-palumbo"
          >
            <i className={'fa-brands fa-github ' + classes.icon}></i>Github
          </a>
          <a
            className={classes.linkedinLink}
            href="https://www.linkedin.com/in/chase-palumbo-353b10259/"
          >
            <i className={classes.icon + ' fa-brands fa-linkedin'}></i>LinkedIn
          </a>
          <a className={classes.contactLink} href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
