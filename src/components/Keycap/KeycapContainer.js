import React, { useEffect, useState, useContext, useCallback } from 'react'
import PropTypes from 'prop-types'

import KeycapView from './KeycapView'
import { LightColorContext } from 'components/Keyboard/KeyboardView'

const sound = new Audio('/sound/gateron-blue.mp3')

const KeycapContainer = props => {
  const { code, onKeyPress, onMouseDown } = props
  const { isFNActive, setIsFNActive, handleChangeKeyboardColor } = useContext(LightColorContext)
  const [isKeydown, setIsKeydown] = useState(false)
  const [isCapslockActive, setIsCapslockActive] = useState(false)

  const playSound = () => {
    if (sound) {
      sound.currentTime = 0
      sound.play()
    }
  }

  const handleKeyDown = useCallback((e) => {
    if (e.code === code) {
      playSound()
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
  }, [code, handleChangeKeyboardColor, isFNActive, onKeyPress])

  const handleKeyDownReset = useCallback((e) => {
    if (e.code === code) {
      setIsKeydown(false)
    }
    if (e.code === 'CapsLock') {
      setIsCapslockActive(false)
    }
  }, [code])

  const handleMouseDown = (e) => {
    setIsKeydown(true)
    onMouseDown?.()
    playSound()
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
  }, [handleKeyDown, handleKeyDownReset])

  const viewProps = {
    ...props,
    handleMouseDown,
    handleMouseUp,
    isCapslockActive: isCapslockActive && code === 'CapsLock',
    isFNActive: isFNActive && code === 'FN',
    isKeydown,
  }
  return (
    <KeycapView {...viewProps} />
  )
}

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
}

export default KeycapContainer