import React, { useState } from 'react';
import {
  EmojiObjects as EmojiObjectsIcon,
  Crop as CropIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  KeyboardReturn as KeyboardReturnIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
} from '@material-ui/icons';

const colorList = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const App = () => {
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

  return (
    <div className={`case ${color}`}>
      <div className="row">
        <button className="keycap orange">
          <i>esc</i>
        </button>
        <button className="keycap">
          <i>F1</i>
        </button>
        <button className="keycap">
          <i>F2</i>
        </button>
        <button className="keycap">
          <i>F3</i>
        </button>
        <button className="keycap">
          <i>F4</i>
        </button>
        <button className="keycap">
          <i>F5</i>
        </button>
        <button className="keycap">
          <i>F6</i>
        </button>
        <button className="keycap">
          <i>F7</i>
        </button>
        <button className="keycap">
          <i>F8</i>
        </button>
        <button className="keycap">
          <i>F9</i>
        </button>
        <button className="keycap">
          <i>F10</i>
        </button>
        <button className="keycap">
          <i>F11</i>
        </button>
        <button className="keycap">
          <i>F12</i>
        </button>
        <button className="keycap">
          <i>del</i>
        </button>
        <button className="keycap">
          <i><CropIcon className='icon' /></i>
        </button>
        <button className="keycap" onClick={handleChangeKeyboardColor}>
          <i><EmojiObjectsIcon className='icon' /></i>
        </button>
      </div>

      <div className="row">
        <button className="keycap">
          <i>` ~</i>
        </button>
        <button className="keycap">
          <i>1 !</i>
        </button>
        <button className="keycap">
          <i>2 @</i>
        </button>
        <button className="keycap">
          <i>3 #</i>
        </button>
        <button className="keycap">
          <i>4 $</i>
        </button>
        <button className="keycap">
          <i>5 %</i>
        </button>
        <button className="keycap">
          <i>6 ^</i>
        </button>
        <button className="keycap">
          <i>7 &amp;</i>
        </button>
        <button className="keycap">
          <i>8 *</i>
        </button>
        <button className="keycap">
          <i>9 (</i>
        </button>
        <button className="keycap">
          <i>0 )</i>
        </button>
        <button className="keycap">
          <i>- _</i>
        </button>
        <button className="keycap">
          <i>= +</i>
        </button>
        <button className="keycap flex1">
          <i><KeyboardBackspaceIcon className="icon" /></i>
        </button>
        <button className="keycap">
          <i className="font-small" style={{ textAlign: 'left' }}>page <br/> up</i>
        </button>
      </div>

      <div className="row">
        <button className="keycap flex1">
          <i className="font-small">tab</i>
        </button>
        <button className="keycap">
          <i>Q</i>
        </button>
        <button className="keycap">
          <i>W</i>
        </button>
        <button className="keycap">
          <i>E</i>
        </button>
        <button className="keycap">
          <i>R</i>
        </button>
        <button className="keycap">
          <i>T</i>
        </button>
        <button className="keycap">
          <i>Y</i>
        </button>
        <button className="keycap">
          <i>U</i>
        </button>
        <button className="keycap">
          <i>I</i>
        </button>
        <button className="keycap">
          <i>O</i>
        </button>
        <button className="keycap">
          <i>P</i>
        </button>
        <button className="keycap">
          <i>[ &#123;</i>
        </button>
        <button className="keycap">
          <i>] &#125;</i>
        </button>
        <button className="keycap flex1">
          <i>\ |</i>
        </button>
        <button className="keycap">
          <i className="font-small" style={{ textAlign: 'left' }}>page <br/> down</i>
        </button>
      </div>

      <div className="row">
        <button style={{ width: '140px' }} className={`keycap ${isCapslockActive ? 'capslock-active' : ''}`} onClick={handleToggleCapslock}>
          <i className="font-small">caps lock</i>
        </button>
        <button className="keycap">
          <i>A</i>
        </button>
        <button className="keycap">
          <i>S</i>
        </button>
        <button className="keycap">
          <i>D</i>
        </button>
        <button className="keycap">
          <i>F</i>
        </button>
        <button className="keycap">
          <i>G</i>
        </button>
        <button className="keycap">
          <i>H</i>
        </button>
        <button className="keycap">
          <i>J</i>
        </button>
        <button className="keycap">
          <i>K</i>
        </button>
        <button className="keycap">
          <i>L</i>
        </button>
        <button className="keycap">
          <i>; :</i>
        </button>
        <button className="keycap">
          <i>' "</i>
        </button>
        <button className="keycap flex1">
          <i><KeyboardReturnIcon className="icon" /></i>
        </button>
        <button className="keycap">
          <i className="font-small" style={{ textAlign: 'left' }}>home</i>
        </button>
      </div>

      <div className="row">
        <button className="keycap flex1">
          <i className="font-small">shift</i>
        </button>
        <button className="keycap">
          <i>Z</i>
        </button>
        <button className="keycap">
          <i>X</i>
        </button>
        <button className="keycap">
          <i>C</i>
        </button>
        <button className="keycap">
          <i>V</i>
        </button>
        <button className="keycap">
          <i>B</i>
        </button>
        <button className="keycap">
          <i>N</i>
        </button>
        <button className="keycap">
          <i>M</i>
        </button>
        <button className="keycap">
          <i>, &#60;</i>
        </button>
        <button className="keycap">
          <i>. &#62;</i>
        </button>
        <button className="keycap">
          <i>/ ?</i>
        </button>
        <button className="keycap" style={{ width: '140px' }}>
          <i className="font-small">shift</i>
        </button>
        <button className="keycap">
          <i><KeyboardArrowUpIcon className="icon" /></i>
        </button>
        <button className="keycap">
          <i className="font-small">end</i>
        </button>
      </div>

      <div className="row">
        <button className="keycap" style={{ width: '100px' }}>
          <i className="font-small">control</i>
        </button>
        <button className="keycap" style={{ width: '100px' }}>
          <i className="font-small">opt</i>
        </button>
        <button className="keycap" style={{ width: '100px' }}>
          <i className="font-small">cmd</i>
        </button>
        <button className="keycap flex1" />
        <button className="keycap">
          <i className="font-small">cmd</i>
        </button>
        <button className="keycap">
          <i className="font-small">fn</i>
        </button>
        <button className="keycap">
          <i className="font-small">control</i>
        </button>
        <button className="keycap">
          <i><KeyboardArrowLeftIcon className="icon" /></i>
        </button>
        <button className="keycap">
          <i><KeyboardArrowDownIcon className="icon" /></i>
        </button>
        <button className="keycap">
          <i><KeyboardArrowRightIcon className="icon" /></i>
        </button>
      </div>
    </div>
  )
}

export default App;
