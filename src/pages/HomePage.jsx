/** @jsxImportSource @emotion/react */

import { SearchBar } from '../components/SearchBar';
import { css } from '@emotion/react';
import { StyledSongCard } from '../components/styles/SongCard.style';
import { StyledSongList } from '../components/styles/SongList.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { StyledLoading } from '../components/styles/Loading.style';
import { StyledCenter } from '../components/styles/Center.style';
import { StyledContainer } from '../components/styles/Container.style';
import { getSongsAction } from '../store/songs/slices/getAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { StyledButton } from '../components/styles/Button.style';
import { setSongAction } from '../store/player/slice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { page, hasNext, hasPrev, data, isLoading } = useSelector(
    (state) => state.allSongs.songs
  );
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [queryString, setQueryString] = useState();
  const player = useSelector((state) => state.player.player);

  useEffect(() => {
    dispatch(getSongsAction());
  }, [dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    setQueryString(form.get('queryString'));

    if (form.get('queryString')) {
      setShowSearchResult(true);
    } else {
      setShowSearchResult(false);
    }

    dispatch(
      getSongsAction({
        queryString: form.get('queryString'),
      })
    );
  };

  const handleNext = (event) => {
    event.preventDefault();

    dispatch(
      getSongsAction({
        queryString,
        page: page + 1,
      })
    );
  };

  const handlePrev = (event) => {
    event.preventDefault();

    dispatch(
      getSongsAction({
        queryString,
        page: page - 1,
      })
    );
  };

  return (
    <>
      <StyledContainer>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <SearchBar onSearch={handleSearch}></SearchBar>
          <div
            css={css`
              display: flex;
              gap: 1rem;
            `}
          >
            {hasPrev ? (
              <StyledButton onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </StyledButton>
            ) : (
              ''
            )}
            {hasNext ? (
              <StyledButton onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </StyledButton>
            ) : (
              ''
            )}
          </div>
        </div>

        <div
          css={css`
            padding: 2rem 0;
          `}
        >
          <h2>{showSearchResult ? 'Search results' : 'Songs'}</h2>

          {isLoading ? (
            <StyledCenter>
              <StyledLoading />
            </StyledCenter>
          ) : (
            <StyledSongList>
              {data.map((song) => (
                <StyledSongCard
                  key={song.id}
                  song={song}
                  onPlay={() => dispatch(setSongAction({ song }))}
                  currentSong={player.song?.id === song.id}
                />
              ))}
            </StyledSongList>
          )}
        </div>
      </StyledContainer>
    </>
  );
};
