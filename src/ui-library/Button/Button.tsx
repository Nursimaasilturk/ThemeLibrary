// src/ui-library/Button.tsx
import React, {ButtonHTMLAttributes} from 'react';
import { useTheme } from '../../context/ThemeContext';
import { getButtonStyles ,ButtonVariant} from '../../styles/buttonStyles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  variant?:ButtonVariant;
}

const SmButton: React.FC<ButtonProps> = ({ label, onClick,className,variant='default',...props }) => {
  const {theme} = useTheme();
  return (
    <button 
    onClick={onClick}
    className={`${getButtonStyles(theme,variant)} ${className}`}
    {...props}
    >
      {label}
    </button>
  );
};

export default SmButton;
