import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const navbar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  box-shadow: rgba(255, 255, 255, 0.042) 0.1rem 0.05rem 0.2rem 0.2rem;
  background: #181818;
`;

export const Logo = styled.div`
  display: flex;
  padding: 0.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 9999rem;
  width: 25px;
  height: 25px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
`;
