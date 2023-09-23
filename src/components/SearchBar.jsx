/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { StyledInput } from './styles/Input.styled';
import { StyledButton } from './styles/Button.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchBar = css`
  position: relative;
  width: 100%;
  max-width: 25rem;
`;

export const SearchBar = () => {
  return (
    <div css={searchBar}>
      <StyledInput
        css={css`
          width: 100%;
          padding-top: 0.6rem;
          padding-bottom: 0.6rem;
          padding-right: 4rem;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          display: flex;
        `}
      >
        <StyledButton>
          <FontAwesomeIcon icon={faSearch} />
        </StyledButton>
      </div>
    </div>
  );
};
