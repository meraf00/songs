import styled from '@emotion/styled';
import { SongForm } from '../SongForm';

export const StyledSongForm = styled(SongForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;

  & input {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    & input {
      max-width: 30rem;
    }
  }
`;
