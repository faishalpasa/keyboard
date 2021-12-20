/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import KeycapView from './KeycapView';
import { LightColorContext } from '../KeyboardView';

const sound = new Audio('/sound/gateron-blue.mp3');

const KeycapContainer = props => {
  const { code, onKeyPress, onMouseDown } = props;
  const { isFNActive, setIsFNActive, handleChangeKeyboardColor } = React.useContext(LightColorContext);
  const [isKeydown, setIsKeydown] = useState(false);
  const [isCapslockActive, setIsCapslockActive] = useState(false);

  const handleKeyDown = (e) => {
    sound?.play?.()
    if (e.code === code) {
      setIsKeydown(true)
      onKeyPress?.(e)
    }
    if (e.code === 'CapsLock') {
      setIsCapslockActive(true)
    }
    // Handle change light color
    // when pressing arrow left or right
    if (isFNActive && (code === 'ArrowLeft' || code === 'ArrowRight')) {
      handleChangeKeyboardColor(code)
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

  const handleMouseDown = (e) => {
    setIsKeydown(true)
    onMouseDown?.()
    sound?.play?.()
    if (code === 'FN') {
      setIsFNActive(!isFNActive)
    }
    // Handle change light color
    // when clicking arrow left or right
    if (isFNActive && (code === 'ArrowLeft' || code === 'ArrowRight')) {
      handleChangeKeyboardColor(code)
    }
  }

  const handleMouseUp = () => {
    setIsKeydown(false)
  }

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
    handleMouseDown,
    handleMouseUp,
    isCapslockActive: isCapslockActive && code === 'CapsLock',
    isFNActive: isFNActive && code === 'FN',
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
  onKeyPress: PropTypes.func,
  onMouseDown: PropTypes.func,
};

export default KeycapContainer;