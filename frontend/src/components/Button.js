/** @jsx jsx */

import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import LoadingSpinner from './UI/LoadingSpinner';
import FadeInOut from './UI/FadeInOut';
import { scale } from '../static/style';

const marginAuto = scale({
  margin: 'auto',
});

const fitWidth = scale({
  width: 'fit-content',
  MozAppearanceMinWidth: 'fit-content',
  WebkitAppearanceMinWidth: 'fit-content',
});

const noWrapFlex = scale({
  display: 'flex',
  flexWrap: 'nowrap',
  width: 'fit-content',
  maxWidth: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

const loadingStyle = scale({
  marginRight: 5,
});

const buttonStyle = scale({
  fontWeight: 600,
  textAlign: 'center',
  backgroundColor: '#4dc156',
  fontSize: '10pt',
  color: 'white',
  borderRadius: '3px',
  border: '1px solid #4dc156',
  cursor: 'pointer',
  padding: ['4px 6px', '6px 8px'],
  width: '100%',
  minWidth: 'fit-content',
  transition: 'all 0.3s ease',
  padding: '10px 16px !important',
  fontSize: '12pt',
  minHeight: '20px',
  '&:hover': {
    backgroundColor: '#3cb045',
    border: '1px solid #3cb045',
    boxShadow: 'none',
  },
});

const Button = props => {
  const { text, loading, children } = props;
  const [delayedLoad, setDelayedLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedLoad(loading);
    }, 50);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <button
      css={buttonStyle}
      tabIndex={0}
      type="submit"
    >
      <div
        css={[
          noWrapFlex,
          marginAuto,
          fitWidth,
        ]}
      >
        <TransitionGroup>
          <FadeInOut name="loading" showFadeInOut={delayedLoad} duration={50}>
            <div css={loadingStyle}>
              <LoadingSpinner color='white' width="12px" />
            </div>
          </FadeInOut>
        </TransitionGroup>
        {children || text}
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFn: PropTypes.func,
  submit: PropTypes.bool,
};

Button.defaultProps = {
  onClickFn: undefined,
  submit: false,
};

export default Button;
