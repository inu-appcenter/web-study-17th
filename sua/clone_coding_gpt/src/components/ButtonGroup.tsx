// ButtonGroup.tsx
import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButtons';

// ButtonGroup.tsx
const GroupWrapper = styled.div<{ gap: string; position?: 'left' | 'right' }>`
  display: flex;
  gap: ${({ gap }) => gap};
  justify-content: ${({ position }) =>
    position === 'right' ? 'flex-end' : 'flex-start'};
  flex: 1;
`;


interface ButtonProps {
  icon?: React.ReactNode;
  label?: string;
  tooltip: string;
  borderless?: boolean;
  onClick?: () => void;
  image?: string;
}

const ButtonGroup = ({
  buttons,
  gap = '10px',
  position = 'left',
}: {
  buttons: ButtonProps[];
  gap?: string;
  position?: 'left' | 'right';
}) => {
  return (
    <GroupWrapper gap={gap} position={position}>
      {buttons.map((button, index) => (
        <IconButton
          key={index}
          icon={button.icon}
          label={button.label}
          tooltip={button.tooltip}
          borderless={button.borderless}
          onClick={button.onClick}
        />
      ))}
    </GroupWrapper>
  );
};

export default ButtonGroup;
