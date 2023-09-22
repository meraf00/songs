import authReducer from './auth/slice';
import songReducer from './songs/slice';

const rootReducer = {
  auth: authReducer,
  song: songReducer,
};

export default rootReducer;
