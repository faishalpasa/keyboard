import React, { createContext } from 'react';
import PropTypes from 'prop-types';
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

import './Keyboard.css';
import Info from './Info';
import Keycap from './Keycap';
import Phrase from './Phrase';

export const LightColorContext = createContext(null);

const KeyboardView = ({
  color,
  contextValue,
  handleKeyPress,
  handleToggleKeyboardLight,
  isLightOn,
  phrase,
}) => {
  return (
    <LightColorContext.Provider value={contextValue}>
      <div className={`case ${color} ${isLightOn ? '' : 'transparent'}`}>
        <div className="row">
          <Keycap className="orange" label="esc" />
          <Keycap label="F1" />
          <Keycap label="F2" />
          <Keycap label="F3" />
          <Keycap label="F4" />
          <Keycap label="F5" />
          <Keycap label="F6" />
          <Keycap label="F7" />
          <Keycap label="F8" />
          <Keycap label="F9" />
          <Keycap label="F10" />
          <Keycap label="F11" />
          <Keycap label="F12" />
          <Keycap label={<CropIcon fontSize="inherit" />} />
          <Keycap label="del" />
          <Keycap label={<EmojiObjectsIcon fontSize="inherit" />} onMouseDown={handleToggleKeyboardLight} />
        </div>

        <div className="row">
          <Keycap onKeyPress={handleKeyPress} label="` ~" code="Backquote" />
          <Keycap onKeyPress={handleKeyPress} label="1 !" code="Digit1" />
          <Keycap onKeyPress={handleKeyPress} label="2 @" code="Digit2" />
          <Keycap onKeyPress={handleKeyPress} label="3 #" code="Digit3" />
          <Keycap onKeyPress={handleKeyPress} label="4 $" code="Digit4" />
          <Keycap onKeyPress={handleKeyPress} label="5 %" code="Digit5" />
          <Keycap onKeyPress={handleKeyPress} label="6 ^" code="Digit6" />
          <Keycap onKeyPress={handleKeyPress} label="7 &amp;" code="Digit7" />
          <Keycap onKeyPress={handleKeyPress} label="8 *" code="Digit8" />
          <Keycap onKeyPress={handleKeyPress} label="9 (" code="Digit9" />
          <Keycap onKeyPress={handleKeyPress} label="0 )" code="Digit0" />
          <Keycap onKeyPress={handleKeyPress} label="- _" code="Minus" />
          <Keycap onKeyPress={handleKeyPress} label="= +" code="Equal" />
          <Keycap
            onKeyPress={handleKeyPress}
            className="flex1"
            code="Backspace"
            label={<KeyboardBackspaceIcon className="icon" />}        
          />
          <Keycap
            onKeyPress={handleKeyPress}
            className="page-up-key"
            code="PageUp"
            label={['page', 'up']}
            labelClassName="font-small"        
          />
        </div>

        <div className="row">
          <Keycap
            onKeyPress={handleKeyPress}
            className="flex1"
            code="Tab"
            label="tab"
            labelClassName="font-small"        
          />
          <Keycap onKeyPress={handleKeyPress} label="Q" code="KeyQ" />
          <Keycap onKeyPress={handleKeyPress} label="W" code="KeyW" />
          <Keycap onKeyPress={handleKeyPress} label="E" code="KeyE" />
          <Keycap onKeyPress={handleKeyPress} label="R" code="KeyR" />
          <Keycap onKeyPress={handleKeyPress} label="T" code="KeyT" />
          <Keycap onKeyPress={handleKeyPress} label="Y" code="KeyY" />
          <Keycap onKeyPress={handleKeyPress} label="U" code="KeyU" />
          <Keycap onKeyPress={handleKeyPress} label="I" code="KeyI" />
          <Keycap onKeyPress={handleKeyPress} label="O" code="KeyO" />
          <Keycap onKeyPress={handleKeyPress} label="P" code="KeyP" />
          <Keycap onKeyPress={handleKeyPress} label="[ {" code="BracketLeft" />
          <Keycap onKeyPress={handleKeyPress} label="] }" code="BracketRight" />
          <Keycap onKeyPress={handleKeyPress} label="\ |" code="Backslash" className="flex1" />
          <Keycap onKeyPress={handleKeyPress}
            className="page-down-key"
            code="PageDown"
            label={['page', 'down']}
            labelClassName="font-small"        
          />
        </div>

        <div className="row">
          <Keycap onKeyPress={handleKeyPress}
            className="capslock-key"
            code="CapsLock"
            label="capslock"
            labelClassName="font-small"        
          />
          <Keycap onKeyPress={handleKeyPress} label="A" code="KeyA" />
          <Keycap onKeyPress={handleKeyPress} label="S" code="KeyS" />
          <Keycap onKeyPress={handleKeyPress} label="D" code="KeyD" />
          <Keycap onKeyPress={handleKeyPress} label="F" code="KeyF" />
          <Keycap onKeyPress={handleKeyPress} label="G" code="KeyG" />
          <Keycap onKeyPress={handleKeyPress} label="H" code="KeyH" />
          <Keycap onKeyPress={handleKeyPress} label="J" code="KeyJ" />
          <Keycap onKeyPress={handleKeyPress} label="K" code="KeyK" />
          <Keycap onKeyPress={handleKeyPress} label="L" code="KeyL" />
          <Keycap onKeyPress={handleKeyPress} label="; :" code="Semicolon" />
          <Keycap onKeyPress={handleKeyPress} label={`' "`} code="Quote" />
          <Keycap
            onKeyPress={handleKeyPress}
            className="flex1"
            code="Enter"
            label={<KeyboardReturnIcon className="icon" />}        
          />
          <Keycap onKeyPress={handleKeyPress} code="Home" label="home" labelClassName="font-small" />
        </div>

        <div className="row">
          <Keycap
            onKeyPress={handleKeyPress}
            className="flex1"
            code="ShiftLeft"
            label="shift"
            labelClassName="font-small"        
          />
          <Keycap onKeyPress={handleKeyPress} label="Z" code="KeyZ" />
          <Keycap onKeyPress={handleKeyPress} label="X" code="KeyX" />
          <Keycap onKeyPress={handleKeyPress} label="C" code="KeyC" />
          <Keycap onKeyPress={handleKeyPress} label="V" code="KeyV" />
          <Keycap onKeyPress={handleKeyPress} label="B" code="KeyB" />
          <Keycap onKeyPress={handleKeyPress} label="N" code="KeyN" />
          <Keycap onKeyPress={handleKeyPress} label="M" code="KeyM" />
          <Keycap onKeyPress={handleKeyPress} label=", <" code="Comma" />
          <Keycap onKeyPress={handleKeyPress} label=". >" code="Period" />
          <Keycap onKeyPress={handleKeyPress} label="/ ?" code="Slash" />
          <Keycap
            onKeyPress={handleKeyPress}
            className="right-shift-key"
            code="ShiftRight"
            label="shift"
            labelClassName="font-small"        
          />
          <Keycap onKeyPress={handleKeyPress} label={<KeyboardArrowUpIcon className="icon" />} code="ArrowUp" />
          <Keycap onKeyPress={handleKeyPress} label="end" code="End" labelClassName="font-small" />
        </div>

        <div className="row">
          <Keycap
            onKeyPress={handleKeyPress}
            className="control-key"
            code="ControlLeft"
            label="control"
            labelClassName="font-small"        
          />
          <Keycap
            onKeyPress={handleKeyPress}
            className="option-key"
            code="AltLeft"
            label="opt"
            labelClassName="font-small"        
          />
          <Keycap
            onKeyPress={handleKeyPress}
            className="command-key"
            code="MetaLeft"
            label="cmd"
            labelClassName="font-small"        
          />
          <Keycap
            onKeyPress={handleKeyPress}
            className="flex1"
            code="Space"
            label="____"
            labelClassName="font-small"        
          />
          <Keycap
            onKeyPress={handleKeyPress}
            label="cmd"
            code="MetaRight"
            labelClassName="font-small"        
          />
          <Keycap
            onKeyPress={handleKeyPress}
            className="fn-key"
            label="fn"
            code="FN"
            labelClassName="font-small"
          />
          <Keycap
            onKeyPress={handleKeyPress}
            className="control-key"
            code="ControlRight"
            label="control"
            labelClassName="font-small"        
          />
          <Keycap
            onKeyPress={handleKeyPress}
            label={<KeyboardArrowLeftIcon className="icon" />}
            code="ArrowLeft"
          />
          <Keycap
            onKeyPress={handleKeyPress}
            label={<KeyboardArrowDownIcon className="icon" />}
            code="ArrowDown"
          />
          <Keycap
            onKeyPress={handleKeyPress}
            label={<KeyboardArrowRightIcon className="icon" />}
            code="ArrowRight"
          />
        </div>
      </div>

      <Info />

      <Phrase data={phrase} />
    </LightColorContext.Provider>
  );
};

KeyboardView.propTypes = {
  color: PropTypes.string,
  contextValue: PropTypes.shape({}),
  handleChangeKeyboardColor: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleToggleKeyboardLight: PropTypes.func,
  isLightOn: PropTypes.bool,
};

export default KeyboardView;