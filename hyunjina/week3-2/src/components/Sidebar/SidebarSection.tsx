// 왼쪽 사이드바 + 오늘, 지난 7일, 프로젝트 -- 등

import styled from "styled-components";
import IconTextItem from "./IconTextItem";
import { LucideIcon } from "lucide-react";

const SectionContainer = styled.div`
  margin-top: 1rem;
`;

// 날짜
const SectionTitle = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  padding: 0;
  text-align: left;
  margin-left: 12px;
  margin-bottom: 10px;
`;

export interface SidebarItem {
  label: string;
  icon: LucideIcon;
  imageUrl?: string;

  onClick?: () => void;
}

interface SidebarSectionProps {
  title: string;
  items: SidebarItem[];
}

export default function SidebarSection({ title, items }: SidebarSectionProps) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {items.map((item, index) => (
        <IconTextItem
          key={index}
          // icon={item.icon}
          label={item.label}
          onClick={item.onClick}
        />
      ))}
    </SectionContainer>
  );
}
