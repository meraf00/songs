import styled from '@emotion/styled';
import { AddSongCard } from '../AddSongCard';

export const StyledAddSongCard = styled(AddSongCard)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  box-shadow: rgba(255, 555, 255, 0.042) 0.01rem 0.01rem 0.1rem 0.1rem;
  padding: 0.5rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  flex-grow: 1;
  display: flex;

  &:hover {
    transform: translate(0, -0.3rem);

    color: ${({ theme }) => theme.colors.blue};
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
    border: 2px dashed ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.dimensions.borderRadius};
    padding: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-grow: 0;
    width: 13rem;
  }
`;
