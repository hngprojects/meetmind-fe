import type { ReactNode } from 'react';
import { Button } from '../ui/button';
import '../../index.css';

interface Props {
  style?: string;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  type: 'reset' | 'submit' | 'button';
}

const Buttons = ({ style, text, onClick, disabled, type, icon }: Props) => {
  return (
    <div>
      <Button
        variant="default"
        className={`${style} w-full hover:cursor-pointer scale `}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {icon}
        {text}
      </Button>
    </div>
  );
};

export default Buttons;
