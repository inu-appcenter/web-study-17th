import styled from "styled-components";
import SidebarHeader from "./SidebarHeader";
import SidebarSection from "./SidebarSection";
import NavSection, { NavItem } from "./NavSection";
import { chatListData } from "../../data/ChatListData";
import { FileText, FileImage } from "lucide-react";
import { groupChatsByDate } from "../../utils/groupChatByData";
import GPT from "../../assets/GPT.png";
import GPTSORA from "../../assets/GPTSORA.png";
//import { CSSTransition } from "react-transition-group";

interface SidebarProps {
  onSelectChat?: (id: string) => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const SidebarContainer = styled.div`
  width: 193px;
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
`;

// export interface NavItem {
//   label: string;
//   icon?: LucideIcon;
//   imageUrl?: string;
//   onClick?: () => void;
// }

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
  const grouped = groupChatsByDate(chatListData);

  return (
    <SidebarContainer>
      <SidebarHeader
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <NavSection items={gptNav} />
      {Object.entries(grouped).map(([sectionTitle, chats]) => (
        <SidebarSection
          key={sectionTitle}
          title={sectionTitle}
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
