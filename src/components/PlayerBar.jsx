/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { Progress, ProgressBar } from './styles/ProgressBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  pauseSongAction,
  playSongAction,
  stopSongAction,
} from '../store/player/slice';
import { useEffect, useState } from 'react';

const playerBar = css`
  position: fixed;
  bottom: 0;
  padding: 0.8rem 2rem;
  background: #000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const PlayerBar = () => {
  const { song, isPlaying } = useSelector((state) => state.player.player);
  const dispatch = useDispatch();
  const [audio, setAudio] = useState(null);
  const [progress, setProgress] = useState('0');

  useEffect(() => {
    if (!song) return;

    if (audio) {
      audio.pause();
    }

    const _audio = new Audio(song.file);
    _audio.loop = false;
    setAudio(_audio);
    setProgress('0');

    _audio.play();

    const updateTime = (event) => {
      let percentProgress = (100 * _audio.currentTime) / _audio.duration;

      if (percentProgress > 100) {
        percentProgress = 100;
      }

      setProgress(`${percentProgress}%`);
    };

    _audio.addEventListener('timeupdate', updateTime);

    return () => _audio.removeEventListener('timeupdate', updateTime);
  }, [song]);

  const handlePlay = () => {
    if (audio) {
      audio.play();
    }
    dispatch(playSongAction());
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
    }
    dispatch(pauseSongAction());
  };

  const handleStop = () => {
    dispatch(stopSongAction());
    if (audio) {
      audio.pause();
      setAudio(null);
    }
  };

  const handleSeekPosition = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!audio) return;

    const { clientX } = event;
    const { left, width } = event.target.getBoundingClientRect();
    const percent = (clientX - left) / width;
    const seekTime = audio.duration * percent;
    audio.currentTime = seekTime;
  };

  if (!song) return;

  return (
    <div css={playerBar}>
      <div
        css={css`
          flex-grow: 1;
          gap: 0.8rem;
          display: flex;
          flex-direction: column;
        `}
      >
        <span>{song.title}</span>
        <ProgressBar width="100%" onMouseDown={handleSeekPosition}>
          <Progress progress={progress} />
        </ProgressBar>
      </div>
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} onClick={handlePause} />
      ) : (
        <FontAwesomeIcon icon={faPlay} onClick={handlePlay} />
      )}

      <FontAwesomeIcon icon={faStop} onClick={handleStop} />
    </div>
  );
};
