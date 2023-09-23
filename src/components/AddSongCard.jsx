import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AddSongCard = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faUpload} />

        <span>Add Song</span>
      </div>
    </div>
  );
};
