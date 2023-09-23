/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const sidebar = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-right: 1px solid gray;
  height: 100%;
  padding: 2rem 0;

  & * {
    color: white;
  }
`;

export const Sidebar = () => {
  return (
    <div css={sidebar}>
      <Link>Home</Link>
      <Link>Home</Link>
      <Link>Home</Link>
      <Link>Home</Link>
      <Link>Home</Link>
    </div>
  );
};
