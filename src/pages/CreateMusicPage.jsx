import React from 'react';

import { StyledContainer } from '../components/styles/Container.style';

import { SongForm } from '../components/SongForm';

export const CreateMusicPage = () => {
  return (
    <StyledContainer>
      <h1>Upload music</h1>

      <SongForm />
    </StyledContainer>
  );
};
