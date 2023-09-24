import React from 'react';
import { StyledInput } from '../components/styles/Input.styled';
import { StyledButton } from './styles/Button.style';
import { StyledLoading } from './styles/Loading.style';
import { StyledCenter } from './styles/Center.style';

export const SongForm = ({
  className,
  buttonLabel,
  onSubmit,
  isLoading,
  song,
}) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <div>
        <StyledInput
          placeholder="Title"
          name="title"
          defaultValue={song?.title}
        />
      </div>
      <div>
        <StyledInput
          placeholder="Artist"
          name="artist"
          defaultValue={song?.artist}
        />
      </div>
      <div>
        <StyledInput
          placeholder="Album"
          name="album"
          defaultValue={song?.album}
        />
      </div>
      <div>
        <StyledInput
          placeholder="Year"
          name="release_date"
          defaultValue={song?.release_date}
        />
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
        {isLoading ? (
          <StyledCenter>
            <StyledLoading />
          </StyledCenter>
        ) : (
          <StyledButton disabled={isLoading}>{buttonLabel}</StyledButton>
        )}
      </div>
    </form>
  );
};
