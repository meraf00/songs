import styled from '@emotion/styled';
import { Avatar } from '../Avatar';

export const StyledAvatar = styled(Avatar)`
  border-radius: 999rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.saturatedBlue};
  }
`;
