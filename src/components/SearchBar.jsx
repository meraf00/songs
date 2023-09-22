/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { StyledInput } from './styles/Input.styled';
import { StyledButton } from './styles/Button.styled';

const searchBar = css`
  position: relative;
  width: 100%;
  max-width: 25rem;
`;

const absolute = css`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
`;

export const SearchBar = () => {
  return (
    <div css={searchBar}>
      <StyledInput
        css={css`
          width: 100%;
        `}
      />
      <div css={absolute}>
        <StyledButton></StyledButton>
      </div>
    </div>
  );
};
