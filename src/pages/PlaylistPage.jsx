import React, { useEffect, useState } from 'react';
import { StyledContainer } from '../components/styles/Container.style';
import { css } from '@emotion/react';
import { StyledLoading } from '../components/styles/Loading.style';
import { StyledCenter } from '../components/styles/Center.style';
import { StyledSongList } from '../components/styles/SongList.style';
import { StyledSongCard } from '../components/styles/SongCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { StyledAddSongCard } from '../components/styles/AddSongCard.style';
import { Link, useNavigate } from 'react-router-dom';
import { getMySongsAction } from '../store/songs/slices/getMy';
import { StyledConfirmDialog } from '../components/styles/ConfirmDialog.style';
import { deleteSongAction } from '../store/songs/slices';

export const PlaylistPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.mySongs.songs);
  const [showDialog, setShowDialog] = useState(false);
  const [songToDelete, setSongToDelete] = useState(null);
  const navigate = useNavigate();

  const handlePlay = (event, song) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('play', song);
  };

  const handleDelete = (event, song) => {
    event.preventDefault();
    event.stopPropagation();

    setShowDialog(true);
    setSongToDelete(song);
  };

  const handleEdit = (event, song) => {
    event.preventDefault();
    event.stopPropagation();

    navigate(`/edit/${song.id}`);
  };

  const deleteSong = () => {
    setShowDialog(false);
    dispatch(deleteSongAction({ song: songToDelete }));
  };

  useEffect(() => {
    dispatch(getMySongsAction());
  }, [dispatch]);

  return (
    <>
      {showDialog && (
        <StyledConfirmDialog
          message={'Would you like to delete?'}
          onYes={deleteSong}
          onNo={() => setShowDialog(false)}
        />
      )}
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
                <StyledSongCard
                  key={song.id}
                  song={song}
                  showButtons={true}
                  onPlay={(event) => handlePlay(event, song)}
                  onDelete={(event) => handleDelete(event, song)}
                  onEdit={(event) => handleEdit(event, song)}
                />
              ))}
            </StyledSongList>
          )}
        </div>
      </StyledContainer>
    </>
  );
};
