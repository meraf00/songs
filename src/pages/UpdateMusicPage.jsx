import React, { useEffect, useState } from 'react';

import { StyledContainer } from '../components/styles/Container.style';

import { StyledSongForm } from '../components/styles/SongForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { updateSongAction } from '../store/songs/slices/update';
import { StyledBanner } from '../components/styles/Banner.style';
import { useParams } from 'react-router-dom';
import { getSongAction } from '../store/songs/slices';

export const UpdateMusicPage = () => {
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.updateSong.song);
  const songState = useSelector((state) => state.song.song);
  const params = useParams();

  const [form, setForm] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('');

  useEffect(() => {
    dispatch(getSongAction({ songId: params.id }));
  }, []);

  useEffect(() => {
    if (updateState.data) {
      form.reset();
      setBannerMessage('Song updated successfully');
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    } else if (updateState.errors) {
      setBannerMessage('Unable to update song');
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    }
  }, [updateState.data, updateState.errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(event.target);
    const formData = new FormData(event.target);
    const payload = { formData, id: params.id };
    dispatch(updateSongAction(payload));
  };

  return (
    <>
      {showBanner && <StyledBanner>{bannerMessage}</StyledBanner>}

      <StyledContainer>
        <h1>Update music</h1>

        <StyledSongForm
          buttonLabel="Update song"
          onSubmit={handleSubmit}
          isLoading={updateState.isLoading}
          song={songState.data}
        />
      </StyledContainer>
    </>
  );
};
