import { useState, useEffect } from 'react';
import Video from './Video';
import ProjectDetails from './ProjectDetails';
import classes from './Projects.module.css';

const Projects: React.FC = () => {
  const [showChessDetails, setShowChessDetails] = useState(false);
  const [showForumDetails, setShowForumDetails] = useState(false);
  const [showSpaceDetails, setShowSpaceDetails] = useState(false);
  const [showNewsDetails, setShowNewsDetails] = useState(false);
  const [largeBp, setLargeBp] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) 
        setLargeBp(false)
      else if (window.innerWidth < 1100) 
        setLargeBp(true)
    };
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <section id="projects">
      <div className={classes.projectsBox}>
        <div className={classes.projectsTitle}>
          <h2>My Personal Projects</h2>
        </div>

        <div className={classes.projects}>
          <div className={classes.projectItem}>
            <Video videoName="news" />

            <div className={classes.projectInfo}>
              <p className={classes.infoTitle}>
                <i className={'fa-brands fa-square-js ' + classes.langIcon}></i>
                Palumbo News
              </p>
              <hr />
              <p className={classes.infoText}>
                Palumbo News is a news website that displays the current top headlines across the US, from many different sources.  You can search for and filter articles.  This project was made using vanilla JavaScript and the NewsAPI.
              </p>
              <button
                className={classes.expandBtn}
                onClick={() => setShowNewsDetails(!showNewsDetails)}
              >
                {!showNewsDetails && 'Learn More'}
                {showNewsDetails && 'Close'}
              </button>
            </div>
          </div>

          <ProjectDetails
            show={showNewsDetails}
            projectName="news"
          />

          <div className={classes.projectItem}>
            {largeBp && <Video videoName="chess" />}

            <div className={classes.projectInfo}>
              <p className={classes.infoTitle}>
                <i className={'fa-brands fa-square-js ' + classes.langIcon}></i>
                Chasing Chess
              </p>
              <hr />
              <p className={classes.infoText}>
                Chasing Chess is a fully functional chess application made
                from scratch with vanilla JavaScript. It allows you to either
                play against the computer or play with two people. This was a
                truly fun and challenging app to work on and I'm very proud of
                it. Give it a try yourself!
              </p>
              <button
                className={classes.expandBtn}
                onClick={() => setShowChessDetails(!showChessDetails)}
              >
                {!showChessDetails && 'Learn More'}
                {showChessDetails && 'Close'}
              </button>
            </div>

            {!largeBp && <Video videoName="chess" />}
          </div>

          <ProjectDetails
            show={showChessDetails}
            projectName="chess"
          />

          <div className={classes.projectItem}>
            <Video videoName="forum" />

            <div className={classes.projectInfo}>
              <p className={classes.infoTitle}>
                <i className={'fa-brands fa-react ' + classes.langIcon}></i>NFL
                Forum
              </p>
              <hr />
              <p className={classes.infoText}>
                This is a forum website
                where a user can create an account, login, and make posts about
                NFL related topics. This was created using React, React Router,
                and Redux. This project taught me a lot about the benefits of
                using a framework, improving user experience, authentication,
                and managing state.
              </p>
              <button
                className={classes.expandBtn}
                onClick={() => setShowForumDetails(!showForumDetails)}
              >
                {!showForumDetails && 'Learn More'}
                {showForumDetails && 'Close'}
              </button>
            </div>
          </div>

          <ProjectDetails
            show={showForumDetails}
            projectName="forum"
          />

          <div className={classes.projectItem}>
            {largeBp && <Video videoName="space" />}

            <div className={classes.projectInfo}>
              <p className={classes.infoTitle}>
                <i className={'fa-brands fa-python ' + classes.langIcon}></i>
                Space Invaders
              </p>
              <hr />
              <p className={classes.infoText}>
                After diving deep into JavaScript and React, I wanted to create something challenging with Python. This is a re-creation of the popular 'Space Invaders' arcade game, made entitrely with Python! Players can shoot down aliens in space and dodge incoming enemy bullets and lasers!
              </p>
              <button
                className={classes.expandBtn}
                onClick={() => setShowSpaceDetails(!showSpaceDetails)}
              >
                {!showSpaceDetails && 'Learn More'}
                {showSpaceDetails && 'Close'}
              </button>
            </div>

            {!largeBp && <Video videoName="space" />}
          </div>

          <ProjectDetails
            show={showSpaceDetails}
            projectName="space"
          />
        </div>

      </div>
    </section>
  );
};

export default Projects;
