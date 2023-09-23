/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { Progress, ProgressBar } from './styles/ProgressBar.styled';

const playerBar = css`
  position: fixed;
  bottom: 0;
  padding: 0.8rem 2rem;
  background: #000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const PlayerBar = ({ song }) => {
  return (
    <div css={playerBar}>
      <div
        css={css`
          flex-grow: 1;
          gap: 0.8rem;
          display: flex;
          flex-direction: column;
        `}
      >
        <span>Title</span>
        <ProgressBar width="100%">
          <Progress progress="40%" />
        </ProgressBar>
      </div>
      <FontAwesomeIcon icon={faPlay} />
      <FontAwesomeIcon icon={faStop} />
    </div>
  );
};
