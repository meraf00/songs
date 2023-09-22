import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

        * {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}
    />
  );
};