import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createSongAction,
  getSongByIdAction,
  getSongsAction,
} from './store/songs/slice';
import { useParams } from 'react-router-dom';

const App = () => {
  const { data, isLoading, errors } = useSelector(
    (state) => state.createSong.song
  );

  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    dispatch(createSongAction({ formData }));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="album" name="album" />
        <input type="text" placeholder="artist" name="artist" />
        <input type="date" placeholder="release date" name="release_date" />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
