/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { navbar, Logo } from '../components/styles/Navbar.styled';
import { StyledButton } from '../components/styles/Button.styled';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { StyledAvatar } from '../components/styles/Avatar.styled';

const flex = css`
  display: flex;
  gap: 1rem;
`;

export const Navbar = () => {
  const {
    isLoggedIn,
    user: { data },
  } = useSelector((state) => state.auth);

  return (
    <div css={navbar}>
      <Logo>
        <Link to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
      </Logo>

      <div css={flex}>
        {isLoggedIn ? (
          <Link to="/myplaylist">
            <StyledAvatar>
              {(data.email[0] + data.email[1]).toUpperCase()}
            </StyledAvatar>
          </Link>
        ) : (
          <>
            <StyledButton>Login</StyledButton>
            <StyledButton>Sign up</StyledButton>
          </>
        )}
      </div>
    </div>
  );
};
