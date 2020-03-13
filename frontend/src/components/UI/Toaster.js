/** @jsx jsx */

import { useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import Toast from './Toast';

const Toaster = props => {
  const { toast } = props;
  const { text, type, isOnRight } = toast;

  const [ show, setShowToast ] = useState(toast.show);

  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        setShowToast(false);
      }, 20000);
    }
    if (!show) clearTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [show, toast.show]);

  return (
    <TransitionGroup name="toaster">
      <Toast
        toastIn={show}
        text={text}
        duration={300}
        type={type}
        isOnRight={isOnRight}
        closeAction={() => {
          setShowToast(false);
        }}
        isDismissable
      />
    </TransitionGroup>
  );
};

Toaster.defaultProps = {
  toast: {
    text: 'I’m a toast',
    type: 'success',
    show: false,
    isOnRight: false,
  },
};

Toaster.propTypes = {
  toast: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    show: PropTypes.bool,
    isOnRight: PropTypes.bool,
  }),
};

export default Toaster;
