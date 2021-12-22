/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import {
  Info as InfoIcon,
  EmojiObjects as EmojiObjectsIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
} from '@material-ui/icons'

import './Info.css'

const InfoView = () => {
  const [isPopupActive, setIsPopupActive] = useState(false)

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      setIsPopupActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="info-wrapper">
      <button className="info-button" type="button" onClick={() => setIsPopupActive(true)}>
        <InfoIcon />
        Info
      </button>
      
      {isPopupActive && (
        <div className="info-popup" onClick={() => setIsPopupActive(false)}>
          <div className="info-popup-content">
            <ul>
              <li>Turn off the keyboard light by clicking <EmojiObjectsIcon fontSize="small" /> icon</li>
              <li>Change backlight keyboard color by clicking <b>fn</b>, then click <KeyboardArrowLeftIcon fontSize="small" /> to change previous color and <KeyboardArrowRightIcon fontSize="small" /> to change next color </li>
              <li>Type anything on your keyboard!</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default InfoView