/** @jsx jsx */

import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { jsx } from '@emotion/core';

const FadeInOut = props => {
  const { name, children, duration, showFadeInOut, zIndex } = props;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'none',
    zIndex,
    display: 'none',
  };
  const transitionStyles = {
    entering: { opacity: 0, display: 'none' },
    entered: { opacity: 1, display: 'block' },
    exiting: { opacity: 0, display: 'block' },
    exited: { opacity: 0, display: 'none' },
  };
  return (
    <div key={name}>
      <Transition
        in={showFadeInOut}
        timeout={duration}
        key={name}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
};

FadeInOut.propTypes = {
  name: PropTypes.string,
  showFadeInOut: PropTypes.bool,
  duration: PropTypes.number,
  zIndex: PropTypes.number,
};

FadeInOut.defaultProps = {
  name: '',
  showFadeInOut: false,
  duration: 450,
  zIndex: 1,
};

export default FadeInOut;
