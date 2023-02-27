import Video from './Video';
import ProjectDetails from './ProjectDetails';
import classes from './Projects.module.css';
import { useState } from 'react';

const Projects = () => {
  const [showChessDetails, setShowChessDetails] = useState(false);
  const [showForumDetails, setShowForumDetails] = useState(false);
  const [showSpaceDetails, setShowSpaceDetails] = useState(false);

  return (
    <section id="projects">
      <div className={classes.projectsBox}>
        <div className={classes.projectsTitle}>
          <h2>My Personal Projects</h2>
        </div>

        <div className={classes.projects}>
          <div className={classes.projectItem}>
            <Video videoName="chess" />

            <div className={classes.projectInfo}>
              <p className={classes.infoTitle}>
                <i class={'fa-brands fa-square-js ' + classes.langIcon}></i>
                Chase's Chess
              </p>
              <hr />
              <p className={classes.infoText}>
                My first project is a fully functional chess application made
                from scratch with vanilla JavaScript. It allows you to either
                play against the computer or play with two people. This was a
                truly fun and challenging app to work on and I'm very proud of
                it. Give it a try yourself!
              </p>
              <button
                className={classes.expandBtn}
                onClick={() =>
                  !showChessDetails
                    ? setShowChessDetails(true)
                    : setShowChessDetails(false)
                }
              >
                {!showChessDetails && 'Learn More'}
                {showChessDetails && 'Close'}
                <i
                  class={
                    'fa-solid ' +
                    (!showChessDetails ? 'fa-angles-down ' : 'fa-angles-up ') +
                    classes.expandIcon
                  }
                ></i>
              </button>
            </div>
          </div>

          {showChessDetails && (
            <ProjectDetails
              projectName="chess"
              minimize={() => setShowChessDetails(false)}
            />
          )}

          <div className={classes.projectItem}>
            <div className={classes.projectInfo}>
              <p className={classes.infoTitle}>
                <i class={'fa-brands fa-react ' + classes.langIcon}></i>NFL
                Forum
              </p>
              <hr />
              <p className={classes.infoText}>
                I decided to learn React and eventually created a forum website
                where a user can create an account, login, and make posts about
                NFL related topics. This was created using React, React Router,
                and Redux. This project taught me a lot about the benefits of
                using a framework, improving user experience, authentication,
                and managing state.
              </p>
              <button
                className={classes.expandBtn}
                onClick={() =>
                  !showForumDetails
                    ? setShowForumDetails(true)
                    : setShowForumDetails(false)
                }
              >
                {!showForumDetails && 'Learn More'}
                {showForumDetails && 'Close'}
                <i
                  class={
                    'fa-solid ' +
                    (!showForumDetails ? 'fa-angles-down ' : 'fa-angles-up ') +
                    classes.expandIcon
                  }
                ></i>
              </button>
            </div>

            <Video videoName="forum" />
          </div>

          {showForumDetails && (
            <ProjectDetails
              projectName="forum"
              minimize={() => setShowForumDetails(false)}
            />
          )}

          <div className={classes.projectItem}>
            <Video videoName="space" />

            <div className={classes.projectInfo}>
              <p className={classes.infoTitle}>
                <i class={'fa-brands fa-python ' + classes.langIcon}></i>Space
                Invaders
              </p>
              <hr />
              <p className={classes.infoText}>
                After diving into JavaScript and React, I wanted to try a
                different programming language to learn the advantages of
                different languages. I studied Python and decided to create a
                re-imagined Space Invaders game. Players can shoot down aliens
                in space and dodge incoming enemy bullets and lasers!
              </p>
              <button
                className={classes.expandBtn}
                onClick={() =>
                  !showSpaceDetails
                    ? setShowSpaceDetails(true)
                    : setShowSpaceDetails(false)
                }
              >
                {!showSpaceDetails && 'Learn More'}
                {showSpaceDetails && 'Close'}
                <i
                  class={
                    'fa-solid ' +
                    (!showSpaceDetails ? 'fa-angles-down ' : 'fa-angles-up ') +
                    classes.expandIcon
                  }
                ></i>
              </button>
            </div>
          </div>

          {showSpaceDetails && (
            <ProjectDetails
              projectName="space"
              minimize={() => setShowSpaceDetails(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
