import React from 'react';
import PropTypes from 'prop-types';

import './Keycap.css';

const KeycapView = ({
  className = '',
  isKeydown,
  isCapslockActive,
  label,
  labelClassName,
  onMouseDown,
}) => {
  return (
    <button className={`keycap ${className} ${isKeydown ? 'active' : ''} ${isCapslockActive ? 'keycap-active' : ''}`} onMouseDown={onMouseDown}>
      {Array.isArray(label) ? (
        label.map(labelItem => (
          <i className={labelClassName} key={labelItem}>{labelItem}</i>
        ))
      ) : (
        <i className={labelClassName}>{label}</i>
      )}
    </button>
  );
};

KeycapView.propTypes = {
  className: PropTypes.string,
  isKeydown: PropTypes.bool,
  isCapslockActive: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  labelClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default KeycapView;