import styled from '@emotion/styled';
import { Input } from '../Input';

export const StyledInput = styled(Input)`
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  padding: 0.5rem 1rem;
  caret-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;

  &:focus {
    border-color: rgb(129, 129, 129);
  }
`;
