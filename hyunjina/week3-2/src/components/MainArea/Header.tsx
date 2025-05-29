import styled from "styled-components";
import { PanelLeftDashed, ChevronDown } from "lucide-react";
import { useOutletContext } from "react-router-dom";

interface OutletContextType {
  toggleSidebar: () => void;
}

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  overflow: visible;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #f2f2f2;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background: #e0e0e0;
  }
`;

const Title = styled.h1`
  flex: 1;
  font-size: 1.25rem;
  color: #333;
`;

export default function Header() {
  const { toggleSidebar } = useOutletContext<OutletContextType>();

  return (
    <HeaderContainer>
      <ToggleButton onClick={toggleSidebar}>
        <PanelLeftDashed size={20} stroke="#555" />
      </ToggleButton>

      <Title>GPT-Clone</Title>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span>GPT-4o</span>
        <ChevronDown size={16} style={{ marginLeft: 4, stroke: "#333" }} />
      </div>
    </HeaderContainer>
  );
}
