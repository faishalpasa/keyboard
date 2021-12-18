import React, { useState } from 'react';

import KeyboardView from './KeyboardView';

const colorList = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const KeyboardContainer = () => {
  const [isCapslockActive, setIsCapslockActive] = useState(false);
  const [color, setColor] = useState(colorList[0]);

  const handleChangeKeyboardColor = () => {
    const colorIndex = colorList.indexOf(color)
    if (colorIndex >= 6) {
      setColor(colorList[0])
    } else {
      setColor(colorList[colorIndex + 1])
    }
  };

  const handleToggleCapslock = () => setIsCapslockActive(!isCapslockActive)

  const viewProps = {
    color,
    handleChangeKeyboardColor,
    handleToggleCapslock,
    isCapslockActive,
  };

  return <KeyboardView {...viewProps} />;
};

export default KeyboardContainer;