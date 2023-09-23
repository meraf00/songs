import React from 'react';

import { StyledContainer } from '../components/styles/Container.style';

import { StyledSongForm } from '../components/styles/SongForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { createSongAction } from '../store/songs/slices/create';

export const CreateMusicPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, errors } = useSelector(
    (state) => state.createSong.song
  );

  console.log(isLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = { formData };
    dispatch(createSongAction(payload));
  };

  return (
    <StyledContainer>
      <h1>Upload music</h1>

      <StyledSongForm
        buttonLabel="Create song"
        onSubmit={handleSubmit}
        disabled={isLoading}
      />
    </StyledContainer>
  );
};
