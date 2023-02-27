import classes from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className={classes.contactSection}>
        <div className={classes.contactBox}>
          <p className={classes.contactTitle}>Contact Me</p>
          <p>Chase Palumbo</p>
          <p>cpalumbo182@gmail.com</p>
        </div>

        <div className={classes.aboutMeBox}>
          <p className={classes.aboutMeTitle}>About Me</p>
          <p className={classes.aboutMeText}>
            My interest in coding began as a small hobby - a desire to take part
            in the technological advancements of the modern world. I have past
            work experience in both leading and working with a team in
            fast-paced, stressful environents. I am someone who learns fast and
            enjoys solving problems. Coding has become a passion for me, and
            creating a career in software development is my goal! If you think I
            could be an asset to your team, feel free to reach out to me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
