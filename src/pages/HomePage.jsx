/** @jsxImportSource @emotion/react */

import { Navbar } from '../layout/Navbar';
import { SearchBar } from '../components/SearchBar';
import { css } from '@emotion/react';
import { Sidebar } from '../layout/Sidebar';

const grid = css`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
  height: 100%;

  & div {
    display: flex;
    flex-direction: column;
  }
`;

const home = css`
  display: block;
  height: 100vh;
`;

const sticky = css`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HomePage = () => {
  return (
    <div css={home}>
      <div css={sticky}>
        <Navbar />
      </div>
      <div css={grid}>
        <Sidebar></Sidebar>
        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
};
