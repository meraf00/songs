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
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #181918;
          background: linear-gradient(120deg, #181918 0%, 75%, #000000 100%);

          background-repeat: no-repeat;
          background-size: cover;
          min-height: 100vh;
          color: white;

          background-attachment: fixed;

          position: relative;
        }
      `}
    />
  );
};
