/** @jsxImportSource @emotion/react */

import { Navbar } from '../layout/Navbar';
import { SearchBar } from '../components/SearchBar';
import { css } from '@emotion/react';
import { StyledSongCard } from '../components/styles/SongCard.style';
import { StyledSongList } from '../components/styles/SongList.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSongsAction } from '../store/songs/slice';
import { Loading } from '../components/Loading';

const home = css`
  display: block;
  height: 100vh;
`;

const sticky = css`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HomePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.song.songs);

  useEffect(() => {
    dispatch(getSongsAction());
  }, [dispatch]);

  return (
    <div css={home}>
      <div css={sticky}>
        <Navbar />
      </div>

      <div
        css={css`
          padding: 2rem 2rem;
        `}
      >
        <SearchBar></SearchBar>

        <div
          css={css`
            padding: 2rem 0;
          `}
        >
          <h2>Songs</h2>
          <Loading />

          {isLoading ? (
            <Loading />
          ) : (
            <StyledSongList>
              {data.map((song) => (
                <StyledSongCard key={song.id} song={song} />
              ))}
            </StyledSongList>
          )}
        </div>
      </div>
    </div>
  );
};
