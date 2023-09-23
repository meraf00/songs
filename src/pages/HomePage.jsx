/** @jsxImportSource @emotion/react */

import { SearchBar } from '../components/SearchBar';
import { css } from '@emotion/react';
import { StyledSongCard } from '../components/styles/SongCard.style';
import { StyledSongList } from '../components/styles/SongList.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StyledLoading } from '../components/styles/Loading.style';
import { StyledCenter } from '../components/styles/Center.style';
import { StyledContainer } from '../components/styles/Container.style';
import { getSongsAction } from '../store/songs/slices/getAll';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.allSongs.songs);

  useEffect(() => {
    dispatch(getSongsAction());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        <SearchBar></SearchBar>

        <div
          css={css`
            padding: 2rem 0;
          `}
        >
          <h2>Songs</h2>

          {isLoading ? (
            <StyledCenter>
              <StyledLoading />
            </StyledCenter>
          ) : (
            <StyledSongList>
              {data.map((song) => (
                <StyledSongCard key={song.id} song={song} />
              ))}
            </StyledSongList>
          )}
        </div>
      </StyledContainer>
    </>
  );
};
