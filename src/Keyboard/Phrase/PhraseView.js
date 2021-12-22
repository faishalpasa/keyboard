import React, { useContext } from 'react';

import './Phrase.css';
import { LightColorContext } from '../KeyboardView';

const PLACEHOLDER = 'Type something...'

const PhraseView = ({ data }) => {
  const { color } = useContext(LightColorContext);
  return (
    <div className={`phrase ${color}`}>
      <pre className={data ? 'text' : 'placeholder'}>
        {!!data ? (
          <>{data}<i className="caret">|</i></>
        ) : (
          <><i className="caret">|</i>{PLACEHOLDER}</>
        )}
      </pre>
    </div>
  );
};

export default PhraseView;