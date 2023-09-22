import styled from '@emotion/styled';

export const StyledButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.saturatedBlue};
  }
`;
