import React, { useEffect } from 'react';
import { StyledContainer } from '../components/styles/Container.style';
import { css } from '@emotion/react';
import { StyledLoading } from '../components/styles/Loading.style';
import { StyledCenter } from '../components/styles/Center.style';
import { StyledSongList } from '../components/styles/SongList.style';
import { StyledSongCard } from '../components/styles/SongCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { getMySongsAction, getSongsAction } from '../store/songs/slice';
import { AddSongCard } from '../components/AddSongCard';
import { StyledAddSongCard } from '../components/styles/AddSongCard.style';
import { Link } from 'react-router-dom';

export const PlaylistPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.song.songs);

  useEffect(() => {
    dispatch(getMySongsAction());
  }, [dispatch]);

  return (
    <StyledContainer>
      <h1>My Playlist</h1>
      <div
        css={css`
          padding: 2rem 0;
        `}
      >
        {isLoading ? (
          <StyledCenter>
            <StyledLoading />
          </StyledCenter>
        ) : (
          <StyledSongList>
            <Link to="/new">
              <StyledAddSongCard />
            </Link>
            {data.map((song) => (
              <StyledSongCard key={song.id} song={song} />
            ))}
          </StyledSongList>
        )}
      </div>
    </StyledContainer>
  );
};