import styled from '@emotion/styled';
import { Loading } from '../Loading';
import { bounce } from './Animations.styled';

export const StyledLoading = styled(Loading)`
  display: flex;
  gap: 5px;

  & div {
    border-radius: 999px;
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
  }

  & div:nth-of-type(1) {
    animation: ${bounce} 0.6s infinite;
  }

  & div:nth-of-type(2) {
    animation: ${bounce} 0.6s infinite;
    animation-delay: 0.1s;
  }

  & div:nth-of-type(3) {
    animation: ${bounce} 0.6s infinite;
    animation-delay: 0.3s;
  }
`;
