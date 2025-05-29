// src/pages/ChatPage.tsx
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { PanelLeftDashed } from "lucide-react";

import { generateMultiTurn, ChatTurn } from "../services/geminiService";
import ChatBubble from "../components/MainArea/ChatBubble";
import InputArea from "../components/MainArea/InputArea";

//
// 1) AppLayout에서 내려 주는 컨텍스트 타입 확장
//
export interface ChatListItem {
  id: string;
  title: string;
  updatedAt: string;
}

interface Context {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  chatList: ChatListItem[];
  setChatList: React.Dispatch<React.SetStateAction<ChatListItem[]>>;
}

//
// 2) 스타일 정의 (원본과 동일)
//
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  flex: 1;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
  overflow: visible; /* 드롭다운 잘리지 않게 */
  z-index: 1;
`;

const ModelSelector = styled.div`
  position: relative;
  margin-left: 3rem;
`;

const SelectorButton = styled.button`
  background: white;
  color: black;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 400;
  cursor: pointer;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  margin: 0;
  padding: 8px 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  min-width: 180px;
  z-index: 10;
  text-align: left;
`;

const DropdownItem = styled.li<{ isLabel?: boolean; isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ isLabel }) => (isLabel ? "4px 13px" : "8px 13px")};
  font-size: ${({ isLabel }) => (isLabel ? "8px" : "9px")};
  color: ${({ isLabel, isSelected }) =>
    isLabel ? "#888" : isSelected ? "#111" : "#333"};
  background: ${({ isSelected }) => (isSelected ? "#f5f5f5" : "transparent")};
  cursor: ${({ isLabel }) => (isLabel ? "default" : "pointer")};
  &:hover {
    background: ${({ isLabel }) => (isLabel ? "transparent" : "#fafafa")};
    border-radius: 13px;
    background-color: rgb(246, 246, 246);
  }
  margin: 0.1rem 0.2rem;
`;

const ItemDescription = styled.span`
  font-size: 8px;
  color: #666;
  margin-top: 2px;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 2rem 0 2rem;
  background-color: white;
`;

const Welcome = styled.div`
  font-size: 24px;
  color: #333;
`;

const NoChatWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 */
  justify-content: center; /* 세로 중앙 */
  gap: 1.5rem;
`;

//
// 3) 모델 옵션 (원본과 동일)
//
const modelOptions = [
  { id: "label", label: "모델" },
  { id: "gpt4o", label: "GPT-4o", description: "대부분의 업무에 탁월함" },
  { id: "o3", label: "o3", description: "고급 이성 사용" },
  { id: "o4mini", label: "o4-mini", description: "비주얼에 강함" },
  { id: "more", label: "더 많은 모델" },
];

//
// 4) 실제 컴포넌트
//
export default function ChatPage() {
  // ✔️ 기존 토글 컨텍스트 + 새로 추가된 chatList 컨텍스트
  const { toggleSidebar, isSidebarOpen, chatList, setChatList } =
    useOutletContext<Context>();

  // 드롭다운 제어
  const [dropOpen, setDropOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  // 메시지 히스토리 + 로딩
  const [history, setHistory] = useState<ChatTurn[]>([
    { role: "system", text: "오늘은 무슨 생각을 하고 계신가요?" },
  ]);
  const [loading, setLoading] = useState(false);

  // — 첫 메시지 전송 시 자동으로 새 세션 생성 —
  const handleSend = async (msg: string) => {
    if (history.length === 1) {
      const id = Date.now().toString();
      setChatList([
        { id, title: msg, updatedAt: new Date().toISOString() },
        ...chatList,
      ]);
    }

    const updated: ChatTurn[] = [...history, { role: "user", text: msg }];
    setHistory(updated);
    setLoading(true);

    try {
      let raw = await generateMultiTurn(updated);
      raw = raw.replace(/^Assistant:\s*/i, "");
      setHistory((h) => [...h, { role: "assistant", text: raw }]);
    } catch (e) {
      console.error("API 호출 실패:", e);
    } finally {
      setLoading(false);
    }
  };

  // 시스템 메시지 제외
  const convo = history.filter((t) => t.role !== "system");

  return (
    <MainContainer>
      <TopBar>
        {/* 토글 버튼: 사이드바 닫혀있을 때만 보여 주기 */}
        {!isSidebarOpen && (
          <PanelLeftDashed
            size={16}
            color="currentColor"
            strokeWidth={2}
            onClick={toggleSidebar}
          />
        )}

        {/* 모델 선택 드롭다운 */}
        <ModelSelector ref={ref}>
          <SelectorButton onClick={() => setDropOpen((v) => !v)}>
            {modelOptions[1].label} v
          </SelectorButton>
          {dropOpen && (
            <Dropdown>
              {modelOptions.map((opt) => (
                <DropdownItem
                  key={opt.id}
                  isLabel={opt.id === "label"}
                  isSelected={opt.id === "gpt4o"}
                  onClick={() => {
                    if (opt.id !== "label") setDropOpen(false);
                  }}
                >
                  {opt.label}
                  {opt.description && (
                    <ItemDescription>{opt.description}</ItemDescription>
                  )}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </ModelSelector>
      </TopBar>

      {/* 첫 대화일 때 환영 화면 */}
      {convo.length === 0 ? (
        <NoChatWrapper>
          <Welcome>{history[0].text}</Welcome>
          <InputArea onSend={handleSend} disabled={loading} />
        </NoChatWrapper>
      ) : (
        <>
          {/* 실제 채팅 뷰 */}
          <ChatContainer>
            {convo.map((turn, i) => (
              <ChatBubble
                key={i}
                sender={turn.role === "user" ? "user" : "assistant"}
                content={turn.text}
              />
            ))}
            {loading && <div style={{ margin: 16, color: "#888" }} />}
          </ChatContainer>

          {/* 입력창 */}
          <InputArea onSend={handleSend} disabled={loading} />
        </>
      )}
    </MainContainer>
  );
}
