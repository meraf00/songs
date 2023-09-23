import styled from '@emotion/styled';
import { Container } from '../Container';

export const StyledContainer = styled(Container)`
  padding: 2rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 5rem;
  }
`;
