import facepaint from 'facepaint';
import { css } from '@emotion/core';

const colors = {
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

const fontSizes = {
  caption: '9pt',
  button: '10pt',
  body: '11pt',
  bodyLarge: '12.5pt',
  smallHeader: '15pt',
  medium: '20pt',
  large: '24pt',
  header: '30pt',
  massive: '50pt',
};

const fonts = {
  Signika:
    "'Signika', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  PublicoBold:
    "'PublicoText-Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  PublicoSemibold:
    "'PublicoText-Semibold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  Sans:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  Monospace: "'Roboto Mono'",
};

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 720px)',
  '@media(min-width: 1000px)',
]);

export const scale = x => css(mq(x));

// const smallCaps = scale({
//   fontSize: ['11.5px', '14px'],
//   color: 'rgba(0,0,0,0.5)',
//   textTransform: 'uppercase',
//   letterSpacing: ['0.5px', '1px'],
//   fontWeight: [600, 700],
//   fontFamily: fonts.Sans,
//   marginBottom: '5px',
// });

// const title = scale({
//   fontSize: ['25px', '30px'],
//   lineHeight: ['30px', '40px'],
//   fontFamily: fonts.Publico,
//   marginBottom: '10px',
//   color: '#252729',
// });

// const titleDescription = scale({
//   fontSize: ['17px', '18px'],
//   lineHeight: ['22px', '24px'],
//   marginBottom: '8px',
//   color: 'rgba(0,0,0,0.6)',
//   fontWeight: 700,
// });

// const header = scale({
//   fontSize: ['23px', '30px', '30px', '35px'],
//   lineHeight: ['30px', '35px', '35px', '45px'],
//   fontFamily: fonts.Sans,
//   marginBottom: '5px',
// });

// const capsHeader = scale({
//   fontSize: ['15px', '18px', '18px', '18px'],
//   lineHeight: ['18px', '20px', '20px', '20px'],
//   letterSpacing: ['0px', '0px'],
//   fontWeight: [600, 700],
//   fontFamily: fonts.Sans,
//   marginBottom: '3px',
// });

// const capsHeaderWithUnderline = scale({
//   fontSize: ['17px', '20px', '20px', '20px'],
//   lineHeight: ['15px', '15px', '15px', '15px'],
//   fontWeight: [600, 700],
//   fontFamily: fonts.Sans,
//   marginBottom: '16px',
//   borderBottom: '2px solid #e2e2e2',
//   textIndent: '2px',
// });

// const thinHeader = scale({
//   fontSize: ['23px', '30px', '30px', '35px'],
//   lineHeight: ['30px', '35px', '35px', '45px'],
//   fontFamily: fonts.Sans,
//   fontWeight: 600,
//   marginBottom: '5px',
// });

// const subHeader = scale({
//   fontSize: ['20px', '25px'],
//   lineHeight: ['25px', '30px', '30px', '30px'],
//   margin: '30px 0px 10px 0px',
//   fontFamily: fonts.Sans,
// });

// const smallHeader = scale({
//   fontSize: ['18px', '20px', '20px', '20px'],
//   lineHeight: ['22px', '25px', '25px', '25px'],
//   marginBottom: '8px',
//   fontFamily: fonts.Sans,
//   fontWeight: 700,
// });

// const medium = scale({
//   fontWeight: 500,
// });

// const semibold = scale({
//   fontWeight: 600,
// });

// const uppercase = scale({
//   textTransform: 'uppercase',
// });

// const paragraph = scale({
//   fontFamily: fonts.Sans,
//   fontSize: ['15px', '18px'],
//   lineHeight: ['25px', '30px'],
//   color: '#34393b',
//   marginBottom: '10px',
//   li: {
//     marginBottom: '10px',
//   },
// });

// const smallParagraph = scale({
//   fontFamily: fonts.Sans,
//   opacity: 0.9,
//   color: '#333333',
//   lineHeight: ['16pt', '18pt'],
//   fontSize: ['11pt !important', '12pt !important'],
// });

// const boldSup = scale({
//   color: '#2f6d5b',
//   fontWeight: '800',
//   margin: 0,
// });

// const footnote = scale({
//   fontSize: ['13px', '15px'],
//   lineHeight: '20px',
//   color: '#4e565e',
//   marginBottom: '10px',
// });

// const caption = scale({
//   fontSize: ['12px', '14px'],
//   lineHeight: '18px',
//   color: '#566369',
//   margin: '10px auto',
// });

// const tinyText = scale({
//   fontSize: ['11px', '12px'],
//   lineHeight: '14px',
//   color: '#444444',
// });

// const orange = scale({
//   color: colors.highlightOrange,
// });

// const green = scale({
//   color: colors.greenButton,
// });

// const light = scale({
//   opacity: 0.7,
// });

// const center = scale({
//   textAlign: 'center',
// });

// const alignRight = scale({
//   textAlign: 'right',
// });

// const alignLeft = scale({
//   textAlign: 'left',
// });

// const noLineHeight = scale({
//   lineHeight: 0,
// });

// const navLink = scale({
//   marginLeft: '2px',
//   marginRight: '2px',
//   fontSize: '15px',
//   padding: '4px 8px',
//   borderRadius: '3px',
//   fontWeight: 600,
// });

// const noStyleLink = {
//   textDecoration: 'none',
//   fontWeight: 400,
// };

// const markdown = scale({
//   fontFamily: fonts.Sans,
//   fontWeight: 400,
//   margin: 'auto',
//   color: '#333333',
//   p: smallParagraph,
//   li: smallParagraph,
//   h1: {
//     fontSize: fontSizes.bodyLarge,
//     fontWeight: 600,
//     margin: 0,
//     lineHeight: '18pt',
//   },
//   img: {
//     padding: '15px 0 15px 0',
//     maxWidth: '100%',
//     borderRadius: '5px',
//   },
//   a: {
//     color: '#333333',
//     textDecoration: 'underline',
//     fontWeight: 600,
//   },
//   'a:hover': {
//     color: 'black',
//   },
// });

// const highlight = color =>
//   scale({
//     backgroundColor: color || '#FFFF00',
//     width: 'fit-content',
//     padding: '0px 5px',
//   });

// const simpleListStyle = scale({
//   li: {
//     marginBottom: '10px !important',
//     fontSize: `${fontSizes.bodyLarge} !important`,
//     lineHeight: '20pt !important',
//     position: 'relative',
//   },
//   a: {
//     color: '#333333',
//     textDecoration: 'underline',
//     ':hover': {
//       color: 'black',
//     },
//   },
// });

export const genericFlex = scale({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignContent: 'flex-start',
});

// const flexReverseOnSmall = scale({
//   flexDirection: ['column-reverse', 'column-reverse', 'row', 'row'],
// });

// const justifyContentStart = scale({
//   justifyContent: 'flex-start',
// });

// const justifyContentEnd = scale({
//   justifyContent: 'flex-end',
// });

// const justifyContentSpaceBetween = scale({
//   justifyContent: 'space-between',
// });

// const justifyContentCenter = scale({
//   justifyContent: 'center',
// });

// const flexUntilMobile = scale({
//   display: ['block', 'flex'],
// });

// const flexUntilSmall = scale({
//   display: ['block', 'block', 'flex'],
// });

// const flexOnMedium = scale({
//   display: ['block', 'block', 'flex', 'block'],
// });

// const flexCenter = scale({
//   alignItems: 'center',
//   textAlign: 'center',
// });

// const alignStretch = scale({
//   alignItems: 'stretch',
// });

// const noWrapFlex = scale({
//   display: 'flex',
//   flexWrap: 'nowrap',
//   width: 'fit-content',
//   maxWidth: '100%',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// });

// const flexText = scale({
//   display: 'flex',
//   justifyContent: ['center', 'center', 'flex-start'],
//   flexWrap: 'wrap',
//   alignItems: 'baseline',
// });

// const flexGrid = scale({
//   display: 'flex',
//   justifyContent: ['center', 'center', 'flex-start'],
//   flexWrap: 'wrap',
//   margin: '-10px',
// });

// const twoColumnFlex = scale({
//   display: ['block', 'block', 'flex'],
//   flexBasis: '45%',
//   flexWrap: ['wrap', 'nowrap'],
//   justifyContent: 'space-between',
// });

// const twoColumnFlexItem = scale({
//   position: 'relative',
//   width: ['100%', '100%', '48%', '48%'],
// });

// const flexGrow = scale({
//   flexGrow: 1,
// });

// const rowReverse = scale({
//   display: ['block', 'block', 'flex', 'flex'],
//   flexWrap: 'wrap',
//   flexDirection: 'row-reverse',
//   justifyContent: 'flex-start',
// });

// const alignItemsStart = scale({
//   alignItems: 'flex-start',
// });

export const alignItemsBaseline = scale({
  alignItems: 'baseline',
});

// const threeColumnGrid = scale({
//   display: 'flex',
//   flexBasis: '33%',
//   flexWrap: 'wrap',
//   margin: [0, '0 -10px'],
// });

// const threeColumnGridItem = scale({
//   position: 'relative',
//   minWidth: '200px',
//   width: ['100%', '100%', '45%', '30%'],
//   margin: ['10px auto', '10px'],
// });


// const clickable = scale({
//   cursor: 'pointer',
// });

// const fullWidth = scale({
//   width: '100%',
// });

// const marginRight = num =>
//   scale({
//     marginRight: num || '10px',
//   });

// const noMargin = scale({
//   margin: 0,
// });

export const marginAuto = scale({
  margin: 'auto',
});

// const marginHorizontalAuto = scale({
//   marginLeft: 'auto',
//   marginRight: 'auto',
// });

// const marginAutoOnWide = scale({
//   margin: [0, 0, 0, 'auto'],
// });

// const fitHeight = scale({
//   height: 'fit-content',
//   MozAppearanceMinHeight: 'fit-content',
//   WebkitAppearanceMinHeight: 'fit-content',
// });

// const fitWidth = scale({
//   width: 'fit-content',
//   MozAppearanceMinWidth: 'fit-content',
//   WebkitAppearanceMinWidth: 'fit-content',
// });

// const minWidth = (min, width) =>
//   scale({
//     minWidth: min, //px
//     width, //px
//   });

// const minHeight = (min, width) =>
//   scale({
//     minHeight: min, //px
//     width, //px
//   });

// const marginTop = num =>
//   scale({
//     marginTop: num || '10px',
//   });

// const marginBottom = num =>
//   scale({
//     marginBottom: num || '10px',
//   });

export const maxWidth = max =>
  scale({
    maxWidth: max, //px
  });

// const hideOnMobile = scale({
//   display: ['none', 'block'],
// });

// const showOnMobile = scale({
//   display: ['block', 'none'],
// });

// const hideOnSmall = scale({
//   display: ['none', 'none', 'block'],
// });

// const showOnSmall = scale({
//   display: ['block', 'block', 'none'],
// });

// const hideOnMedium = scale({
//   display: ['none', 'none', 'none', 'block'],
// });

// const showOnMedium = scale({
//   display: ['block', 'block', 'block', 'none'],
// });

// const noStyle = scale({
//   backgroundColor: 'transparent',
//   width: '100%',
//   cursor: 'pointer',
//   border: 'none',
//   padding: 0,
// });

// const noStyleButton = scale({
//   backgroundColor: 'transparent',
//   color: 'rgba(0,0,0,0.6)',
//   cursor: 'pointer',
//   border: 'none',
//   width: 'fit-content',
//   transition: 'background-color 200ms ease-in-out',
//   borderRadius: '3px',
//   '&:hover': {
//     backgroundColor: 'rgba(0,0,0,0.04)',
//   },
//   '&:focus': {
//     backgroundColor: 'rgba(0,0,0,0.04)',
//   },
// });

// const hover = scale({
//   backgroundColor: 'transparent',
//   '&:hover': {
//     backgroundColor: 'rgba(0,0,0,0.04)',
//   },
//   '&:focus': {
//     backgroundColor: 'rgba(0,0,0,0.04)',
//   },
// });

// const opacity = opacity => ({
//   opacity,
// });

// const clickableX = scale({
//   color: colors.highlightOrange,
//   fontWeight: 'bold',
//   fontSize: '24px',
//   cursor: 'pointer',
// });

// const verticalBar = scale({
//   position: 'relative',
//   width: '3px',
//   backgroundColor: 'rgba(0,0,0,0.08)',
//   minHeight: '80px',
// });

// module.exports = {
//   colors,
//   fontSizes,
//   fonts,
//   scale,
  // smallCaps,
  // subHeader,
  // footnote,
  // smallHeader,
  // title,
  // titleDescription,
  // header,
  // thinHeader,
  // capsHeader,
  // capsHeaderWithUnderline,
  // paragraph,
  // smallParagraph,
  // caption,
  // light,
  // orange,
  // green,
  // noLineHeight,
  // center,
  // boldSup,
  // navLink,
  // tinyText,
  // alignRight,
  // medium,
  // semibold,
  // uppercase,
  // alignLeft,
  // markdown,
  // noStyleLink,
  // highlight,
  // simpleListStyle,
  // genericFlex,
  // flexGrow,
  // flexUntilMobile,
  // flexUntilSmall,
  // flexGrid,
  // flexText,
  // twoColumnFlex,
  // twoColumnFlexItem,
  // threeColumnGrid,
  // threeColumnGridItem,
  // justifyContentStart,
  // justifyContentEnd,
  // justifyContentSpaceBetween,
  // justifyContentCenter,
  // noWrapFlex,
  // flexCenter,
  // alignStretch,
  // alignItemsStart,
  // alignItemsBaseline,
  // rowReverse,
  // flexReverseOnSmall,
  // flexOnMedium,
  // clickable,
  // opacity,
  // marginRight,
  // fullWidth,
  // fitHeight,
  // fitWidth,
  // marginAutoOnWide,
  // minWidth,
  // minHeight,
  // maxWidth,
  // noMargin,
  // marginAuto,
  // marginHorizontalAuto,
  // noStyle,
  // noStyleButton,
  // marginTop,
  // marginBottom,
  // hideOnMobile,
  // showOnMobile,
  // hideOnSmall,
  // showOnSmall,
  // hideOnMedium,
  // showOnMedium,
  // hover,
  // verticalBar,
  // clickableX,
// };
