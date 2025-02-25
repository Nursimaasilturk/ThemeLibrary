// src/ui-library/Button.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ label, onClick,color,size = 'medium' }) => {
  const {theme} = useTheme();
  const buttonSize =
    size === "small" ? "8px 16px" : size === "large" ? "14px 28px" : "10px 20px";
  return (
    <button onClick={onClick} style={{
      backgroundColor: color || theme.colors.accent,
      color:theme.colors.text,
      padding:buttonSize,
      border:"none",
      borderRadius:"4px",
      cursor:"pointer",
      fontSize:theme.typography.size.base,
      fontFamily:theme.typography.primary
    }}>
      {label}
    </button>
  );
};

export default Button;
