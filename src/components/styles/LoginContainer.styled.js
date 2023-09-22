import styled from '@emotion/styled';
import { spin } from './Animations.styled';

export const LoginContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 60%;
  max-width: 23rem;
  margin: auto;
  padding: 0.1rem;
  border-radius: 10px;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;

    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    box-shadow: rgba(255, 255, 255, 0.042) 0.1rem 0.1rem 0.3rem 0.3rem;
    padding: 1.5rem;
  }

  & ::after {
    content: '';
    position: absolute;
    background: conic-gradient(#376aed, #ff501d00 20%);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    width: 150%;
    height: 150%;
    z-index: -10;
    animation: ${spin} 3s infinite forwards;
    transform-origin: 50% 50%;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    width: 100%;
    margin: 2rem;
  }

  & form div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
`;
