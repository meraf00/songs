import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SongCardIcon } from './styles/SongCard.style';

export const SongCard = ({ className, song }) => {
  return (
    <div className={className}>
      <SongCardIcon>
        <FontAwesomeIcon icon={faMusic} />
      </SongCardIcon>
      <div>
        <h1>{song.title}</h1>
      </div>
      <div>
        <span>{song.artist}</span>
        <span>{song.album}</span>
      </div>
    </div>
  );
};
