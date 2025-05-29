import styled from "styled-components";
import SidebarHeader from "./SidebarHeader";
import SidebarSection from "./SidebarSection";
import NavSection, { NavItem } from "./NavSection";

import { FileText, FileImage } from "lucide-react";
import { groupChatsByDate } from "../../utils/groupChatByData";
import GPT from "../../assets/GPT.png";
import GPTSORA from "../../assets/GPTSORA.png";

import type { ChatListItem } from "../AppLayout";

import type { GroupedChat } from "../../utils/groupChatByData";

import React, { useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";

interface SidebarProps {
  onSelectChat?: (id: string) => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;

  chatList: ChatListItem[]; // ← 추가
  setChatList: React.Dispatch<React.SetStateAction<ChatListItem[]>>;
}

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: 193px;
  min-width: 0;

  background-color: #f9f9f9;
  color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eeeeee;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaaaaa;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease;
  }
`;

const gptNav: NavItem[] = [
  { label: "ChatGPT", imageUrl: GPT, onClick: () => {} },
  { label: "Sore", imageUrl: GPTSORA, onClick: () => {} },
  {
    label: "라이브러리",
    icon: FileImage,
    onClick: () => {},
  },
];

export default function Sidebar({
  toggleSidebar,
  onSelectChat,
  isSidebarOpen,
}: SidebarProps) {
  console.log("Sidebar props:", onSelectChat);

  // });

  const [chatList] = useState<ChatListItem[]>(() => {
    const raw = localStorage.getItem("chat_list");
    if (!raw) return [];
    return (JSON.parse(raw) as Partial<ChatListItem>[]).map((item) => ({
      id: item.id!,
      title: item.title!,
      updatedAt: item.updatedAt ?? new Date().toISOString(), // ← updatedAt 보장
    }));
  });

  // 2) chatList가 바뀔 때마다 로컬에 저장
  useEffect(() => {
    localStorage.setItem("chat_list", JSON.stringify(chatList));
  }, [chatList]);

  // 3) 날짜별 그룹핑

  const grouped: GroupedChat[] = groupChatsByDate(chatList);

  return (
    <SidebarContainer $isOpen={isSidebarOpen}>
      <SidebarHeader
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <NavSection items={gptNav} />

      {grouped.map(({ date, chats }) => (
        <SidebarSection
          key={date}
          title={date}
          items={chats.map((chat) => ({
            label: chat.title,
            icon: FileText,
            onClick: () => onSelectChat?.(chat.id),
          }))}
        />
      ))}
    </SidebarContainer>
  );
}
