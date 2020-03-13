/** @jsx jsx */

import { jsx } from '@emotion/core';
import { scale, genericFlex, alignItemsBaseline } from '../static/style';

const outerContainer = scale({
  width: '100%',
  height: '50px',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '#ffffff',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.12)',
});

const innerContainer = scale({
  maxWidth: '1050px',
  padding: '10px',
  paddingTop: '15px',
  paddingLeft: '20px',
  margin: 'auto',
});

const Nav = () => (
  <div css={outerContainer}>
    <div css={[innerContainer, genericFlex, alignItemsBaseline]}>
      <h4><strong>Wren Take Home</strong></h4>
    </div>
  </div>
);

export default Nav;
