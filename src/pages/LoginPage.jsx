import { StyledButton } from '../components/styles/Button.styled';
import { FullScreenContainer } from '../components/styles/Container.styled';
import { StyledInput } from '../components/styles/Input.styled';
import { LoginContainer } from '../components/styles/LoginContainer.styled';

export const LoginPage = () => {
  return (
    <FullScreenContainer>
      <LoginContainer>
        <div>
          <h2>Login</h2>
          <form>
            <div>
              <StyledInput placeholder="Email" />
              <StyledInput type="password" placeholder="Password" />
            </div>
            <StyledButton>Login</StyledButton>
          </form>
        </div>
      </LoginContainer>
    </FullScreenContainer>
  );
};
