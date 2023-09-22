import { StyledButton } from '../components/styles/Button.styled';
import { FullScreenContainer } from '../components/styles/Container.styled';
import { StyledInput } from '../components/styles/Input.styled';
import { LoginContainer } from '../components/styles/LoginContainer.styled';

export const SignupPage = () => {
  return (
    <FullScreenContainer>
      <LoginContainer>
        <div>
          <h2>Sign up</h2>
          <form>
            <div>
              <StyledInput placeholder="Email" />
              <StyledInput type="password" placeholder="Password" />
            </div>
            <StyledButton>Sign up</StyledButton>
          </form>
        </div>
      </LoginContainer>
    </FullScreenContainer>
  );
};
