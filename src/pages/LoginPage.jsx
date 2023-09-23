import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../components/styles/Button.style';
import { FullScreenContainer } from '../components/styles/Container.styled';
import { StyledInput } from '../components/styles/Input.styled';
import { LoginContainer } from '../components/styles/LoginContainer.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginAction } from '../store/auth/slices';
import { StyledBanner } from '../components/styles/Banner.style';

export const LoginPage = () => {
  const { data, errors } = useSelector((state) => state.login.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('');

  useEffect(() => {
    if (data) {
      navigate('/');
    } else if (errors) {
      setBannerMessage('Invalid credentials');
      setShowBanner(true);
      const ref = setTimeout(() => {
        setShowBanner(false);
      }, 3000);

      return () => clearTimeout(ref);
    }
  }, [data, errors]);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    dispatch(
      loginAction({
        email: formData.get('email'),
        password: formData.get('password'),
      })
    );
  };

  return (
    <>
      {showBanner && <StyledBanner>{bannerMessage}</StyledBanner>}
      <FullScreenContainer>
        <LoginContainer>
          <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div>
                <StyledInput placeholder="Email" name="email" />
                <StyledInput
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <StyledButton>Login</StyledButton>
            </form>
          </div>
        </LoginContainer>
      </FullScreenContainer>
    </>
  );
};
