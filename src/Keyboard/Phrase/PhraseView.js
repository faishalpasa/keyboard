import React, { useContext } from 'react';

import './Phrase.css';
import { LightColorContext } from '../KeyboardView';

const PLACEHOLDER = 'Type something...'

const PhraseView = ({ data }) => {
  const { color } = useContext(LightColorContext);
  console.log(data)
  return (
    <div className={`phrase ${color}`}>
      <pre className={data ? 'text' : 'placeholder'}>
        {data || PLACEHOLDER}<i className="caret">|</i>
      </pre>
    </div>
  );
};

export default PhraseView;