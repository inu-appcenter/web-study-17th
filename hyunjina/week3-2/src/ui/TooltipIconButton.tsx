import styled from "styled-components";

const IconButton = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  color: gray;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(150, 149, 149, 0.1);
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  white-space: nowrap;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  z-index: 10;
`;

export default function TooltipIconButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <TooltipWrapper>
      <IconButton>{children}</IconButton>
      <Tooltip>{label}</Tooltip>
    </TooltipWrapper>
  );
}
