import styled from "styled-components";
import { Search, Pencil, PanelLeftDashed } from "lucide-react";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem;

  // background: red;

  color: black;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 적용안됨.

const AnimatedHeader = styled(HeaderWrapper)<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(-10px)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 26px;
  height: 26px;

  padding: 2px;
  background: none;
  border: none;
  border-radius: 30%;
  cursor: pointer;

  margin-top: 7px;

  margin-left: 7px;
  color: rgb(101, 101, 101);

  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(150, 149, 149, 0.1); /* 눈에 잘 띄는 투명도 */
  }

  & > svg {
    display: block; /* inline-svg의 여백 제거 */
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
  font-size: 8px;
  white-space: nowrap;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  z-index: 10;
`;

interface SidebarHeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

function TooltipIconButton({
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

export default function SidebarHeader({
  toggleSidebar,
  isSidebarOpen,
}: SidebarHeaderProps) {
  const handletogglebtn = () => {
    toggleSidebar();
  };
  return (
    // <AnimatedHeader $visible={isSidebarOpen}>
    <AnimatedHeader $visible={isSidebarOpen}>
      <LeftSide>
        <TooltipIconButton label="사이드바 닫기">
          <PanelLeftDashed size={17} onClick={handletogglebtn} />
        </TooltipIconButton>
      </LeftSide>
      <RightSide>
        <TooltipIconButton label="채팅 검색 ctrl k">
          <Search size={17} />
        </TooltipIconButton>
        <TooltipIconButton label="새 채팅">
          <Pencil size={17} />
        </TooltipIconButton>
      </RightSide>
    </AnimatedHeader>
    // </AnimatedHeader>
  );
}
