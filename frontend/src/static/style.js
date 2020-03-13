import facepaint from 'facepaint';
import { css } from '@emotion/core';

export const colors = {
  primaryText: '#4A4A4A',
  lightGrayText: 'rgba(200, 200, 200, 0.9)',
  backgroundWhite: '#FdFdFd',
  backgroundShadow: '#EEECE5',
  primaryGreen: '#1A3C34',
  greenButton: '#4dc156',
  highlightOrange: '#F79F22',
  hoverOrange: '#DD7812',
  buttonGlowOrange: '#F2C357',
  progressBar: '#ffd506',
  errorRed: '#e93710',
  lightBorder: '#BCBCBC',
  veryLightGray: 'rgba(0,0,0,0.1)',
};

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 720px)',
  '@media(min-width: 1000px)',
]);

export const scale = x => css(mq(x));

export const medium = scale({
  fontWeight: 500,
});

export const genericFlex = scale({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignContent: 'flex-start',
});

export const alignItemsBaseline = scale({
  alignItems: 'baseline',
});

export const marginAuto = scale({
  margin: 'auto',
});

export const maxWidth = max =>
  scale({
    maxWidth: max, //px
  });
