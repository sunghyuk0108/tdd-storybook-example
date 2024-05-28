import React from 'react';

import './index.scss';

type TestButtonProps = {
  label?: string | React.ReactNode;
  intent?: 'primary' | 'secondary' | 'destructive';
  onClick?: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

// otherProps외에 꺼내쓰면 제외됨
const TestButton: React.FC<TestButtonProps> = ({
  label,
  onClick,
  intent,
  ...otherProps
}) => {
  return (
    <button
      className="test-button"
      onClick={onClick}
      data-intent={intent}
      {...otherProps}>
      {label}
    </button>
  );
};

export default TestButton;
