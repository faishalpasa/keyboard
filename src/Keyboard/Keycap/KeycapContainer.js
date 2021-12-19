/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import KeycapView from './KeycapView';

const KeycapContainer = props => {
  const { code, onKeyPress } = props
  const [isKeydown, setIsKeydown] = useState(false);
  const [isCapslockActive, setIsCapslockActive] = useState(false);

  const handleKeyDown = (e) => {
    if (e.code === code) {
      setIsKeydown(true)
      onKeyPress(e)
    }
    if (e.code === 'CapsLock') {
      setIsCapslockActive(true)
    }
  };

  const handleKeyDownReset = (e) => {
    if (e.code === code) {
      setIsKeydown(false)
    }
    if (e.code === 'CapsLock') {
      setIsCapslockActive(false)
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyDownReset)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyDownReset)
    }
  }, [])

  const viewProps = {
    ...props,
    isCapslockActive,
    isKeydown,
  };
  return (
    <KeycapView {...viewProps} />
  );
};

KeycapContainer.propTypes = {
  className: PropTypes.string,
  code: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  labelClassName: PropTypes.string,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default KeycapContainer;