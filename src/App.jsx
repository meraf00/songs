import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './components/styles/Global.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserAction } from './store/auth/slice';

const theme = {
  font: {},

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
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;