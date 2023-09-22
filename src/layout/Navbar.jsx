/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { navbar, Logo } from '../components/styles/Navbar.styled';
import { SearchBar } from '../components/SearchBar';

export const Navbar = () => {
  return (
    <div css={navbar}>
      <Logo>
        <Link to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
      </Logo>

      <SearchBar></SearchBar>
      <div>1</div>
    </div>
  );
};
