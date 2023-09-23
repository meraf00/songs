import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../components/styles/Button.style';
import { FullScreenContainer } from '../components/styles/Container.styled';
import { StyledInput } from '../components/styles/Input.styled';
import { LoginContainer } from '../components/styles/LoginContainer.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserAction } from '../store/auth/slices';
import { StyledBanner } from '../components/styles/Banner.style';

export const SignupPage = () => {
  const { data, errors } = useSelector((state) => state.signup.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('');

  useEffect(() => {
    if (data) {
      navigate('/');
    } else if (errors) {
      setBannerMessage(errors);
      setShowBanner(true);
      const ref = setTimeout(() => {
        setShowBanner(false);
      }, 3000);

      return () => clearTimeout(ref);
    }
  }, [data, errors]);

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    dispatch(
      createUserAction({
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
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
              <div>
                <StyledInput placeholder="Email" name="email" />
                <StyledInput
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <StyledButton>Sign up</StyledButton>
            </form>
          </div>
        </LoginContainer>
      </FullScreenContainer>
    </>
  );
};
