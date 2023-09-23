import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './components/styles/Global.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserAction } from './store/auth/slice';
import { PlayerBar } from './components/PlayerBar';

const theme = {
  font: {},

  breakpoints: {
    xs: '320px',
    sm: '425px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  dimensions: {
    borderRadius: '5px',
  },

  colors: {
    white: '#fff',
    black: '#000',
    // orange: '#ff631c',
    // darkOrange: '#ff501d',
    background: '#181818',
    blue: '#376aed',
    saturatedBlue: '#2151cd',
    gray: '#474747',
  },
};

const App = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Outlet />
      <PlayerBar />
    </ThemeProvider>
  );
};

export default App;
