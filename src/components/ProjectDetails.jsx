import chessImg from '../assets/images/chess-img.png';
import forumImg from '../assets/images/football.gif'
import spaceImg from '../assets/images/spaceship.png'
import classes from './ProjectDetails.module.css';

const details = {
  chess: {
    codeLink: 'https://github.com/chase-palumbo/ChessV2',
    projectLink: "https://chases-chess.netlify.app",
    img: chessImg,
    type: "game",
    descList: [
      'Play Chess against a computer AI or your friends!',
      'Designed from the ground up with HTML, CSS, and JavaScript.',
      'AI understands how to play chess and checkmate you.',
      'Uses classes for each piece and algorithms to keep track of its position, along with its moves.',
      'The board will show you where you can move when you click on a piece.',
      'A game log keeps track of every move, capture, check, etc.',
      'You can castle, promote pawns, and more!',
    ],
  },
  forum: {
    codeLink: 'https://github.com/chase-palumbo/react-nfl-forum',
    projectLink: "",
    img: forumImg,
    type: "website",
    descList: [
      'A website that uses aunthentication to log users in and out.',
      'Designed with React functional components.',
      'Uses state management system designed with Redux slices to dispatch actions that update, modify, and store data.',
      'Users can explore the different topics, create threads, favorite a thread, or reply to posts.',
      'Keeps track of user data such as threads made, post count, profile picture, favorited threads, account data, and more.',
      'Routed with React Router v6.4, using Loader Functions to fetch data.',
      'All data is stored in a Firebase db, before I learned anything about SQL.  After later learning Flask and SQLAlchemy, I realized this project would have been a lot easier with an SQL db.',
    ],
  },
  space: {
    codeLink: 'https://github.com/chase-palumbo/space-invaders',
    projectLink: "",
    img: spaceImg,
    type: "game",
    descList: [
      'Play the remade Space Invaders arcade game in Python!',
      'This project taught me a lot about debugging and optimizing your code.',
      'Object-Oriented design using the Python Turtle library.',
      'Stores your high score.',
      'Player has three lives.  Getting hit 3 times or allowing the aliens to breach your defenses results in a game over.',
    ],
  },
};

const ProjectDetails = ({ projectName }) => {
  const project = details[projectName];

  return (
    <div className={classes.detailsBox}>
      <div className={classes.detailHeading}>
        <img src={project.img} alt="Picture relating to project" />
        <div className={classes.detailLinks}>
          <a href={project.projectLink} className={classes.playGameBtn}>
            <i class={"fa-solid fa-play " + classes.codeIcon}></i>
            {project.type == 'game' ? 'Play the Game' : 'Open Website'}
          </a>
          <a className={classes.seeCodeLink} href={project.codeLink}>
            <i class={"fa-solid fa-code " + classes.codeIcon}></i>
            See the Code 
          </a>
        </div>
      </div>

      <ul className={classes.detailsList}>
        {project.descList.map((item) => (
          <li className={classes.listItem}>
            <p>{item}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
