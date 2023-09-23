import styled from '@emotion/styled';

export const ProgressBar = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height ?? '2px'};
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Progress = styled.div`
  width: ${({ progress }) => progress};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
`;
