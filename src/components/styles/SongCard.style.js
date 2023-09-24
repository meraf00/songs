import styled from '@emotion/styled';
import { SongCard } from '../SongCard';

export const StyledSongCard = styled(SongCard)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  box-shadow: rgba(255, 555, 255, 0.042) 0.01rem 0.01rem 0.1rem 0.1rem;
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  flex-grow: 1;
  position: relative;
  border: 2px solid
    ${({ theme, currentSong }) =>
      currentSong ? theme.colors.blue : 'transparent'};

  &:hover {
    transform: translate(0, -0.3rem);

    h1 {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  & div {
    padding: 0.5rem;
  }

  & h1 {
    font-size: 1.2rem;
    transition: all ease-in-out 0.2s;
  }

  & span {
    font-size: 0.8rem;
    color: gray;
  }

  & div span {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-grow: 0;
    width: 13rem;
  }
`;

export const SongCardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  margin: 0 1rem;
`;
