// 하단 아이콘
import styled from "styled-components";

import {
  ThumbsUp,
  ThumbsDown,
  File,
  RefreshCw,
  Sparkles,
  Speech,
} from "lucide-react";

const ActionRow = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-left: 0.5rem;
`;

const IconButton = styled.button`
  width: 20px;
  height: 20px;

  background: none;
  border: none;
  color: gray;
  cursor: pointer;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(150, 149, 149, 0.1); // 살짝 어두운 배경
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

// 재사용 가능!!아님
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

export default function ChatActions() {
  return (
    <ActionRow>
      <TooltipIconButton label="복사">
        <File size={14} />
      </TooltipIconButton>

      <TooltipIconButton label="좋은 응답">
        <ThumbsUp size={14} />
      </TooltipIconButton>

      <TooltipIconButton label="별로인 응답">
        <ThumbsDown size={14} />
      </TooltipIconButton>

      <TooltipIconButton label="소리 내어 읽기">
        <Speech size={14} />
      </TooltipIconButton>

      <TooltipIconButton label="캔버스에서 편집">
        <Sparkles size={14} />
      </TooltipIconButton>

      <TooltipIconButton label="모델 바꾸기">
        <RefreshCw size={14} />
      </TooltipIconButton>
    </ActionRow>
  );
}
