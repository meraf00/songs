import styled from '@emotion/styled';
import { Button } from '../Button';

export const StyledButton = styled(Button)`
  border: none;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  background-color: ${({ theme, background }) =>
    background ?? theme.colors.blue};
  color: ${({ theme, color }) => color ?? theme.colors.white};
  padding: 8px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.saturatedBlue};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
