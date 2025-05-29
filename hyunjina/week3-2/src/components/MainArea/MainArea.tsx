import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { PanelLeftDashed } from "lucide-react";

import Header from "./Header";
import InputArea from "./InputArea";
import ChatBubble from "./ChatBubble";
import type { Message } from "../../data/ChatMessages";

import { breakpoints } from "../../styles/theme";

export interface OutletContextType {
  selectedChatId: string | null;
  messages: Message[];
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ffffff;
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: #ffffff;
`;

const TopBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Mainbtn = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 1rem;
  left: 1rem;

  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  /* padding 만으로 버튼 크기 잡기 */
  padding: 8px;

  background-color: white;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.875rem;
    padding: 0.4rem 0.8rem;
  }
`;

export default function MainArea() {
  const { selectedChatId, messages, toggleSidebar, isSidebarOpen } =
    useOutletContext<OutletContextType>();

  return (
    <MainContainer>
      <TopBar>
        <Mainbtn onClick={toggleSidebar} $visible={!isSidebarOpen}>
          <PanelLeftDashed size={16} color="black" />
        </Mainbtn>
        <Header />
      </TopBar>

      {selectedChatId ? (
        <ChatContainer>
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              sender={msg.sender}
              content={msg.content}
            />
          ))}
        </ChatContainer>
      ) : (
        <InputArea />
      )}
    </MainContainer>
  );
}
