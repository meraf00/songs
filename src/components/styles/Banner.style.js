import styled from '@emotion/styled';
import { Banner } from '../Banner';
import { fadeIn } from './Animations.styled';

export const StyledBanner = styled(Banner)`
  position: fixed;
  top: 5rem;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1000;
  padding: 0.7rem;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};

  text-align: center;
  width: 80vw;

  background-color: ${({ theme, background }) =>
    background ?? theme.colors.blue};

  color: ${({ theme, color }) => color ?? theme.colors.white};

  animation: ${fadeIn} 3s forwards;
`;
