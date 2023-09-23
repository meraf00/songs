import styled from '@emotion/styled';
import { SongList } from '../SongList';

export const StyledSongList = styled(SongList)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0 5rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
