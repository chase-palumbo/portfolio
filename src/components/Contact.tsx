import classes from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className={classes.contactSection}>
        <div className={classes.contactBox}>
          <p className={classes.contactTitle}>
            <i className={"fa-solid fa-phone " + classes.contactIcon}></i>
            Contact
          </p>
          <p><strong>Name </strong>Chase Palumbo</p>
          <p><strong>Email </strong>cpalumbodev@gmail.com</p>
          <p><strong>Phone </strong>732-799-2616</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
