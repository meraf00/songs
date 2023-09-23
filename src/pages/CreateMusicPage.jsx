import React from 'react';

import { StyledContainer } from '../components/styles/Container.style';

import { StyledSongForm } from '../components/styles/SongForm.style';
import { useDispatch } from 'react-redux';
import { createSongAction } from '../store/songs/slice';

export const CreateMusicPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.song.songs);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = { formData };
    dispatch(createSongAction(payload));
  };

  return (
    <StyledContainer>
      <h1>Upload music</h1>

      <StyledSongForm buttonLabel="Create song" onSubmit={handleSubmit} />
    </StyledContainer>
  );
};
