/** @jsx jsx */

import { jsx } from '@emotion/core';
import { scale, genericFlex, alignItemsBaseline } from '../static/style';

const outerContainer = scale({
  width: '100%',
  height: '50px',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'transparent',
  borderBottom: '1px solid #ccc',
});

const innerContainer = scale({
  maxWidth: '900px',
  padding: '10px',
  paddingTop: '15px',
  paddingLeft: '20px',
  margin: 'auto',
});

const Nav = () => (
  <div css={outerContainer}>
    <div css={[innerContainer, genericFlex, alignItemsBaseline]}>
      <h4>Wren | Offset your purchases</h4>
      <a href="https://twitter.com/project_wren" target="_blank">
        @project_wren
      </a>
    </div>
  </div>
);

export default Nav;
