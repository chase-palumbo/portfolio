import chessVideo from '../assets/videos/chess_loop.mp4';
import forumVideo from '../assets/videos/forum_loop.mp4';
import spaceVideo from '../assets/videos/space_loop.mp4';
import './Video.module.css';

const videos = {
  chess: chessVideo,
  forum: forumVideo,
  space: spaceVideo,
};

const Video = ({ videoName }) => {
  return (
    <video autoPlay muted loop>
      <source src={videos[videoName]} type="video/mp4" />
    </video>
  );
};

export default Video;
