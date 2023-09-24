import loginReducer from './auth/slices/login';
import signUpReducer from './auth/slices/signup';
import userReducer from './auth/slices/user';
import getAllSongsReducer from './songs/slices/getAll';
import getMySongsReducer from './songs/slices/getMy';
import getSongReducer from './songs/slices/get';
import createSongReducer from './songs/slices/create';
import deleteSongReducer from './songs/slices/delete';
import updateSongReducer from './songs/slices/update';
import playerReducer from './player/slice';

const rootReducer = {
  login: loginReducer,
  signup: signUpReducer,
  user: userReducer,
  allSongs: getAllSongsReducer,
  mySongs: getMySongsReducer,
  song: getSongReducer,
  createSong: createSongReducer,
  deleteSong: deleteSongReducer,
  updateSong: updateSongReducer,
  player: playerReducer,
};

export default rootReducer;
