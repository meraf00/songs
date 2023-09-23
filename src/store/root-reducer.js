import authReducer from './auth/slice';
import getAllSongsReducer from './songs/slices/getAll';
import getMySongsReducer from './songs/slices/getMy';
import getSongReducer from './songs/slices/get';
import createSongReducer from './songs/slices/create';
import deleteSongReducer from './songs/slices/delete';
import updateSongReducer from './songs/slices/update';

const rootReducer = {
  auth: authReducer,
  allSongs: getAllSongsReducer,
  mySongs: getMySongsReducer,
  song: getSongReducer,
  createSong: createSongReducer,
  deleteSong: deleteSongReducer,
  updateSong: updateSongReducer,
};

export default rootReducer;
