import TestButton from '@/shared/components/test-button';
import React from 'react';

function ButtonsWidget() {
  return (
    <div className="button-wrap">
      <h2>button components</h2>
      <div className="buttons">
        <TestButton
          label="test button"
          intent="primary"
          onClick={() => {
            console.log('primary bt click');
          }}
        />
        <TestButton label="test button" intent="secondary" />
        <TestButton label="test button" intent="destructive" />
        <TestButton label="test button" disabled={true} />
        <TestButton
          label="test button"
          intent="primary"
          onClick={() => {
            console.log('primary bt click');
          }}
        />
      </div>
    </div>
  );
}

export default ButtonsWidget;
