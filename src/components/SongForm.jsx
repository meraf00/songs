import React from 'react';
import { StyledInput } from '../components/styles/Input.styled';
import { StyledButton } from '../components/styles/Button.styled';

export const SongForm = () => {
  return (
    <form>
      <div>
        <StyledInput placeholder="Title" />
      </div>
      <div>
        <StyledInput placeholder="Artist" />
      </div>
      <div>
        <StyledInput placeholder="Album" />
      </div>
      <div>
        <StyledInput placeholder="Year" />
      </div>
      <div>
        <StyledInput placeholder="Title" />
      </div>
      <div>
        <StyledInput placeholder="Title" type="file" accept=".ogg,.mp3,.wav" />
      </div>
      <div>
        <StyledButton>Upload</StyledButton>
      </div>
    </form>
  );
};
