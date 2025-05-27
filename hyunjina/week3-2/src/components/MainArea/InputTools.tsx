// 하하단 아이콘
import styled from "styled-components";
import ToolButton from "./ToolButton";
import { Plus, Earth, Brush, Telescope } from "lucide-react";

const ToolGroup = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  color: #f9f9f9;
`;

export default function InputTools() {
  return (
    <ToolGroup>
      <ToolButton icon={Plus} />
      <ToolButton icon={Earth} label="검색" />
      <ToolButton icon={Telescope} label="심층 리서치" />
      <ToolButton icon={Brush} label="이미지 그리기" />
    </ToolGroup>
  );
}
