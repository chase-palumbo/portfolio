import myPic from '../assets/images/resumepic.png';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <section id="header">
      <div className={classes.headerBox}>
        <img className={classes.myImg} src={myPic} alt=""/>
        <div className={classes.headerTitle}>
          <h1>Hi, I'm Chase</h1>
          <p>A JavaScript/TypeScript and Python developer.</p>
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
