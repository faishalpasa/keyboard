import React, { useContext } from 'react';

import './Phrase.css';
import { LightColorContext } from '../KeyboardView';

const PLACEHOLDER = 'Type something...'

const PhraseView = ({ data }) => {
  const { color } = useContext(LightColorContext);
  return (
    <div className={`phrase ${color}`}>
      <i className={data ? 'text' : 'placeholder'}>
        {data || PLACEHOLDER}
      </i>
    </div>
  );
};

export default PhraseView;