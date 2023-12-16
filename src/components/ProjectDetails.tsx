import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import newsImg from '../assets/images/news.png';
import chessImg from '../assets/images/chess-img.png';
import forumImg from '../assets/images/football.gif';
import spaceImg from '../assets/images/spaceship.png';
import classes from './ProjectDetails.module.css';

interface DetailsType {
  [project: string]: {
    codeLink: string;
    projectLink?: string;
    img: string;
    type: string;
    descList: string[];
  };
}

const details: DetailsType = {
  news: {
    codeLink: 'https://github.com/chase-palumbo/news-website',
    img: newsImg,
    type: 'website',
    descList: [
      'Discover up-to-date stories published by the top news sources in the US.',
      'Search for articles using the search box.',
      'Filter articles by different categories such as sports, entertainment, and business.',
      'Click the title to visit the article\'s webpage.',
      'Made with vanilla JavaScript, CSS, and HTML.'
    ]
  },
  chess: {
    codeLink: 'https://github.com/chase-palumbo/ChessV2',
    projectLink: 'https://chases-chess.netlify.app',
    img: chessImg,
    type: 'game',
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
    projectLink: 'https://nfl-forum.netlify.app/',
    img: forumImg,
    type: 'website',
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
    img: spaceImg,
    type: 'game',
    descList: [
      'Play a re-imagined version of the Space Invaders arcade game!',
      'This project taught me a lot about debugging and optimizing your code.',
      'Object-Oriented design using the Python Turtle library.',
      'All sprites created myself.',
      'Stores your high score.',
      'Player has three lives.  Getting hit 3 times or allowing the aliens to breach your defenses results in a game over.',
    ],
  },
};

interface ProjectDetailsProps {
  projectName: string;
  show: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectName,
  show,
}) => {
  const project = details[projectName];
  const nodeRef = useRef<HTMLDivElement>(null);

  const projectLinkBtn = (
    <a href={project.projectLink} className={classes.playGameBtn}>
      <i className={'fa-solid fa-play ' + classes.codeIcon}></i>
      {project.type === 'game' ? 'Play the Game' : 'Open Website'}
    </a>
  );

  return (
    <CSSTransition
      in={show}
      timeout={600}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: classes.DetailsOpen,
        exit: '',
        exitActive: classes.DetailsClose,
      }}
    >
      <div ref={nodeRef} className={classes.detailsBox}>
        <div className={classes.detailHeading}>
          <img src={project.img} alt="" />
          <div className={classes.detailLinks}>
            {project.projectLink && projectLinkBtn}
            <a className={classes.seeCodeLink} href={project.codeLink}>
              <i className={'fa-solid fa-code ' + classes.codeIcon}></i>
              See the Code
            </a>
          </div>
        </div>

        <ul className={classes.detailsList}>
          {project.descList.map((item: string, index: number) => (
            <li className={classes.listItem} key={index}>
              <p>{item}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </CSSTransition>
  );
};

export default ProjectDetails;
