import React from 'react'
import PropTypes from 'prop-types'

import './Keycap.css'

const KeycapView = ({
  className = '',
  isCapslockActive,
  isFNActive,
  isKeydown,
  label,
  labelClassName,
  handleMouseDown,
  handleMouseUp,
}) => (
  <button
    className={`keycap ${className} ${isKeydown ? 'active' : ''} ${isCapslockActive || isFNActive ? 'keycap-active' : ''}`}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    type="button"
  >
    {Array.isArray(label) ? (
      label.map(labelItem => (
        <i className={labelClassName} key={labelItem}>{labelItem}</i>
      ))
    ) : (
      <i className={labelClassName}>{label}</i>
    )}
  </button>
)

KeycapView.propTypes = {
  className: PropTypes.string,
  isCapslockActive: PropTypes.bool,
  isFNActive: PropTypes.bool,
  isKeydown: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  labelClassName: PropTypes.string,
  handleMouseDown: PropTypes.func,
  handleMouseUp: PropTypes.func,
}

export default KeycapView