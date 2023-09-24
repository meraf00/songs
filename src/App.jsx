/** @jsxImportSource @emotion/react */

import { Outlet } from 'react-router-dom';
import { ThemeProvider, css } from '@emotion/react';
import { GlobalStyles } from './components/styles/Global.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PlayerBar } from './components/PlayerBar';
import { Navbar } from './layout/Navbar';
import { getUserAction } from './store/auth/slices';

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
    red: '#dd0000',
    background: '#181818',
    blue: '#376aed',
    saturatedBlue: '#2151cd',
    gray: '#474747',
  },
};

const sticky = css`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div css={sticky}>
        <Navbar />
      </div>
      <Outlet />

      <PlayerBar />
    </ThemeProvider>
  );
};

export default App;
