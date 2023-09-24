/** @jsxImportSource @emotion/react */

import { faEdit, faMusic, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SongCardIcon } from './styles/SongCard.style';
import { StyledButton } from './styles/Button.style';
import { css, useTheme } from '@emotion/react';

export const SongCard = ({
  className,
  song,
  showButtons,
  onPlay,
  onDelete,
  onEdit,
}) => {
  const theme = useTheme();

  return (
    <div className={className} onClick={onPlay}>
      <SongCardIcon>
        <FontAwesomeIcon icon={faMusic} />
      </SongCardIcon>
      {showButtons && (
        <div
          css={css`
            display: flex;
            position: absolute;
            top: 0;
            right: 0;
            gap: 0.5rem;
          `}
        >
          <StyledButton
            onClick={onDelete}
            background={theme.colors.red}
            css={css`
              padding: 6px 12px;
            `}
          >
            <FontAwesomeIcon icon={faTrash} />
          </StyledButton>
          <StyledButton
            onClick={onEdit}
            css={css`
              padding: 6px 12px;
            `}
          >
            <FontAwesomeIcon icon={faEdit} />
          </StyledButton>
        </div>
      )}

      <div>
        <h1>{song.title}</h1>
      </div>
      <div>
        <span>{song.artist}</span>
        <span>{song.album}</span>
      </div>
    </div>
  );
};
