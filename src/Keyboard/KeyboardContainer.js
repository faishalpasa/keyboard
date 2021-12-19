import React, { useState } from 'react';

import KeyboardView from './KeyboardView';

const COLOR_LIST = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple'];
const ACCEPTED_KEY_CODES = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Minus', 'Equal',
  'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
  'Space',
]

const KeyboardContainer = () => {
  const [color, setColor] = useState(COLOR_LIST[0]);
  const [phrase, setPhrase] = useState('')

  const handleChangeKeyboardColor = () => {
    const colorIndex = COLOR_LIST.indexOf(color)
    if (colorIndex >= 7) {
      setColor(COLOR_LIST[0])
    } else {
      setColor(COLOR_LIST[colorIndex + 1])
    }
  };

  const handleKeyPress = (e) => {
    if (ACCEPTED_KEY_CODES.includes(e?.code) && !e.altKey && !e.metaKey) {
      setPhrase((phrase) => phrase + e.key)
    }
    if (e.code === 'Backspace') {
      setPhrase((phrase) => phrase.slice(0, -1))
    }
  }

  const viewProps = {
    color,
    handleChangeKeyboardColor,
    handleKeyPress,
    phrase,
  };

  return <KeyboardView {...viewProps} />;
};

export default KeyboardContainer;