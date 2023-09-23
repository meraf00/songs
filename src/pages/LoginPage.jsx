import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../components/styles/Button.style';
import { FullScreenContainer } from '../components/styles/Container.styled';
import { StyledInput } from '../components/styles/Input.styled';
import { LoginContainer } from '../components/styles/LoginContainer.styled';
import { loginAction } from '../store/auth/slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate('/');
    }
  }, [data]);

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
  );
};
