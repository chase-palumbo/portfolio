import chessVideo from '../assets/videos/chess_loop.mp4';
import forumVideo from '../assets/videos/forum_loop.mp4';
import spaceVideo from '../assets/videos/space_loop.mp4';
import './Video.module.css';

interface VideoType {
  [video: string]: '*.mp4'
}

const videos: VideoType = {
  chess: chessVideo,
  forum: forumVideo,
  space: spaceVideo,
};

const Video: React.FC<{ videoName: string }> = ({ videoName }) => {
  return (
    <video autoPlay muted loop>
      <source src={videos[videoName]} type="video/mp4" />
    </video>
  );
};

export default Video;
