/** @jsx jsx */

import { jsx } from '@emotion/core';
import { scale, genericFlex, alignItemsBaseline } from '../static/style';

const outerContainer = scale({
  width: '100%',
  height: '50px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  backgroundColor: '#f7f7f7',
});

const innerContainer = scale({
  maxWidth: '1050px',
  padding: '10px',
  paddingTop: '15px',
  paddingLeft: '20px',
  margin: 'auto',
});

const Footer = () => (
  <div css={outerContainer}>
    <div css={[innerContainer, genericFlex, alignItemsBaseline]}>
      <div>Wren - 2020</div>
      <a href="https://twitter.com/project_wren" target="_blank">
        @project_wren
      </a>
    </div>
  </div>
);

export default Footer;
