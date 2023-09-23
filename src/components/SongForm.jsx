import React from 'react';
import { StyledInput } from '../components/styles/Input.styled';
import { StyledButton } from './styles/Button.style';

export const SongForm = ({ className, buttonLabel, onSubmit, disabled }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <div>
        <StyledInput placeholder="Title" name="title" />
      </div>
      <div>
        <StyledInput placeholder="Artist" name="artist" />
      </div>
      <div>
        <StyledInput placeholder="Album" name="album" />
      </div>
      <div>
        <StyledInput placeholder="Year" name="release_date" />
      </div>
      <div>
        <StyledInput
          placeholder="File"
          name="file"
          type="file"
          accept=".ogg,.mp3,.wav"
        />
      </div>
      <div>
        <StyledButton disabled={disabled}>{buttonLabel}</StyledButton>
      </div>
    </form>
  );
};
