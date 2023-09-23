import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../components/styles/Button.style';
import { FullScreenContainer } from '../components/styles/Container.styled';
import { StyledInput } from '../components/styles/Input.styled';
import { LoginContainer } from '../components/styles/LoginContainer.styled';
import { createUserAction } from '../store/auth/slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const data = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/');
    }
  }, [data]);

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
  );
};
