// ButtonGroup.tsx
import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButtons';

const GroupWrapper = styled.div`
  display: flex;
  gap: ${(props: { gap: string }) => props.gap};
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
}: {
  buttons: ButtonProps[];
  gap?: string;
}) => {
  return (
    <GroupWrapper gap={gap}>
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
