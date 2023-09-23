/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { navbar, Logo } from '../components/styles/Navbar.styled';
import { StyledButton } from '../components/styles/Button.style';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { StyledAvatar } from '../components/styles/Avatar.styled';

const flex = css`
  display: flex;
  gap: 1rem;
`;

export const Navbar = () => {
  const { data, isLoggedIn } = useSelector((state) => state.user.user);

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
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
            <Link to="/signup">
              <StyledButton>Sign up</StyledButton>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
