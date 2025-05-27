// NavSection.tsx
import React from "react";
import styled from "styled-components";
import { LucideIcon } from "lucide-react";

const SectionContainer = styled.div`
  margin-top: 0.5rem;

  left: 0;
`;

const SectionTitle = styled.div``;

// 각각 버튼들 툴
const ItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;

  //background: none;
  border: none;
  cursor: pointer;
  width: 180px;

  font-size: 10px;
  font-weight: 400;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

//아이콘 이미지들
const ImgIcon = styled.img`
  width: 13px;
  height: 13.5px;
  border-radius: 50%;
  object-fit: cover;
`;

export interface NavItem {
  label: string;
  icon?: string;
  imageUrl?: string;
  onClick?: () => void;
}

interface NavSectionProps {
  title: string;
  items: NavItem[];
}

export default function NavSection({ title, items }: NavSectionProps) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {items.map((item, i) => (
        <ItemButton key={i} onClick={item.onClick}>
          {item.icon && <item.icon size={12} />}
          {item.imageUrl && <ImgIcon src={item.imageUrl} alt={item.label} />}
          <span>{item.label}</span>
        </ItemButton>
      ))}
    </SectionContainer>
  );
}
