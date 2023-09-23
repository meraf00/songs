import React, { useEffect, useState } from 'react';

import { StyledContainer } from '../components/styles/Container.style';

import { StyledSongForm } from '../components/styles/SongForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { createSongAction } from '../store/songs/slices/create';
import { StyledBanner } from '../components/styles/Banner.style';

export const CreateMusicPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, errors } = useSelector(
    (state) => state.createSong.song
  );

  const [form, setForm] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState('');

  useEffect(() => {
    if (data) {
      form.reset();
      setBannerMessage('Song created successfully');
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    } else if (errors) {
      setBannerMessage('Unable to create song');
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    }
  }, [data, errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(event.target);
    const formData = new FormData(event.target);
    const payload = { formData };
    dispatch(createSongAction(payload));
  };

  return (
    <>
      {showBanner && <StyledBanner>{bannerMessage}</StyledBanner>}

      <StyledContainer>
        <h1>Upload music</h1>

        <StyledSongForm
          buttonLabel="Create song"
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </StyledContainer>
    </>
  );
};
