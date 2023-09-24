import React from 'react';
import { StyledButton } from './styles/Button.style';

export const ConfirmDialog = ({ className, message, onYes, onNo }) => {
  return (
    <div className={className}>
      <div>
        <span>{message}</span>
        <div>
          <StyledButton onClick={onYes}>Yes</StyledButton>
          <StyledButton onClick={onNo}>No</StyledButton>
        </div>
      </div>
    </div>
  );
};
