import styled from '@emotion/styled';
import { ConfirmDialog } from '../ConfirmDialog';

export const StyledConfirmDialog = styled(ConfirmDialog)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  z-index: 1100;
  backdrop-filter: blur(10px);
  box-shadow: rgba(255, 555, 255, 0.042) 0.01rem 0.01rem 0.1rem 0.1rem;

  & > div {
    flex-direction: column;
  }

  & div {
    display: flex;
    gap: 1rem;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.dimensions.borderRadius};
  }
`;
