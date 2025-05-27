import styled from "styled-components";
import { LucideIcon } from "lucide-react";

const Button = styled.button`

  background: none;
  border: none;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 15px;
  height: 25px;

  
  font-size: 10px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;

  &:hover {
  &:active {
    background: transparent;
    color: #333;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
 
`;

interface ToolButtonProps {
  icon?: LucideIcon;
  label?: string;
}

const Label = styled.span`
  color: gray;
`;

export default function ToolButton({ icon: Icon, label }: ToolButtonProps) {
  return (
    <Button>
      {Icon && <Icon size={16} color="gray" />}
      {label && <Label>{label}</Label>}
    </Button>
  );
}
