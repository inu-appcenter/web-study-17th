import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

type IconButtonProps = {
  icon: React.ReactNode;
  label?: string;
  tooltip?: string;
  borderless?: boolean;
};

//위치 고정 해제, 콘텐츠 따라 버튼 크기조정, 세로방향중앙 정렬 
const ButtonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

//가로배치, 세로중앙 정렬, 텍스트가 있을 경우 여백 없으면 정사각형,
const StyledButton = styled.button<{ hasLabel: boolean, borderless?: boolean }>`
  display: flex; 
  align-items: center;
  gap: 8px;
  padding: ${({ hasLabel, borderless }) =>
    !hasLabel && borderless ? "5px" : hasLabel ? "8px 12px" : "3px"};
  background-color: white;
  border: ${({ borderless }) => (borderless ? "none" : "1px solid #ccc")};
  border-radius: ${({ hasLabel, borderless }) => ( !hasLabel && borderless ? "9px" : "9999px")};
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
    border: ${({ borderless }) => (borderless ? "none" : "1px solid #ccc")};
  }
`;
//버튼 누르는 기능까지 추가하면 이거 넣기. 지금은 버튼 누르면 검은색 테두리 생김
/*&:active {
    background-color: #f0f0f0;  // hover 때와 같은 색
    border-color: #ccc;         // 테두리도 유지
  }*/
  


const IconContainer = styled.div<{ hasLabel: boolean }>`
  width: ${({ hasLabel }) => (hasLabel ? "20px" : "32px")};
  height: ${({ hasLabel }) => (hasLabel ? "20px" : "32px")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

const Label = styled.span`
  font-size: 14px;
  color: #333;
`;

//버튼 기중 아래쪽 중앙 정렬
const TooltipWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  z-index: 10;
`;

//말풍선
const TooltipBox = styled.div`
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 6px;
  position: relative;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background-color: black;
    transform: translateX(-50%) rotate(45deg);
  }
`;

const IconButton = ({ icon, label, borderless, tooltip }: IconButtonProps) =>  {
  const [hovered, setHovered] = useState(false);    //hover 상태 파악
  const showTooltip = hovered && tooltip;           //hover에 따른 설명 말풍선 나타냄 여부

  return (
    <ButtonWrapper>
      <StyledButton
        hasLabel={!!label}
        borderless={borderless}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <IconContainer hasLabel={!!label}>{icon}</IconContainer>
        {label && <Label>{label}</Label>}
      </StyledButton>

      <AnimatePresence>
        {showTooltip && (
          <TooltipWrapper
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 4 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <TooltipBox>{tooltip}</TooltipBox>
          </TooltipWrapper>
        )}
      </AnimatePresence>
    </ButtonWrapper>
  );
}


export default IconButton;