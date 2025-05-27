// src/page/ChatPage.tsx
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { PanelLeftDashed } from "lucide-react";
import { generateMultiTurn, ChatTurn } from "../services/geminiService";
import ChatBubble from "../components/MainArea/ChatBubble";
import InputArea from "../components/MainArea/InputArea";

interface Context {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const MainContainer = styled.div`
  // flex: 1;
  // display: flex;
  // flex-direction: column;
  // background: transparent;
  // position: relative;

  display: flex;
  flex-direction: column;
  /* 전체 높이는 상위 flex 레이아웃(MainContent)이 처리하니 생략해도 됩니다 */
  /* height: 100vh; */
  background: #ffffff; /* 흰색으로 고정 */
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

const Mainbtn = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #f3f3f3;
  }
`;

const ModelSelector = styled.div`
  position: relative;
  margin: 0 auto;
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
  top: calc(100% + 4px); /* 셀렉터 바로 아래 */
  left: 0; /* 왼쪽 모서리 딱 붙이기 */
  margin: 0;
  padding: 8px 0;
  background: white;
  border: 1px solid #e0e0e0; /* 연한 회색 테두리 */
  border-radius: 12px; /* 둥근 모서리 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  min-width: 180px; /* 필요에 따라 조정 */
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

  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.1rem;
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
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  gap: 1.5rem; /* 텍스트와 입력창 사이 여백 */
`;

// — 모델 옵션 정의 —
const modelOptions = [
  { id: "label", label: "모델" },
  { id: "gpt4o", label: "GPT-4o", description: "대부분의 업무에 탁월함" },
  { id: "o3", label: "o3", description: "고급 이성 사용" },
  { id: "o4mini", label: "o4-mini", description: "비주얼에 강함" },
  { id: "more", label: "더 많은 모델" },
];

export default function ChatPage() {
  const { toggleSidebar, isSidebarOpen } = useOutletContext<Context>();

  // 드롭다운 열림 상태 & 바깥 클릭으로 닫기 처리
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

  // 대화 기록 및 로딩 상태
  const [history, setHistory] = useState<ChatTurn[]>([
    { role: "system", text: "오늘은 무슨 생각을 하고 계신가요?" },
  ]);
  const [loading, setLoading] = useState(false);

  // 메시지 전송 핸들러
  const handleSend = async (msg: string) => {
    const updated = [...history, { role: "user", text: msg }];
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
        <Mainbtn onClick={toggleSidebar} $visible={!isSidebarOpen}>
          <PanelLeftDashed size={16} />
        </Mainbtn>

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

      {convo.length === 0 ? (
        <NoChatWrapper>
          <Welcome>{history[0].text}</Welcome>
          <InputArea onSend={handleSend} disabled={loading} />
        </NoChatWrapper>
      ) : (
        <>
          <ChatContainer>
            {convo.map((turn, i) => (
              <ChatBubble
                key={i}
                sender={turn.role === "user" ? "user" : "assistant"}
                content={turn.text}
              />
            ))}
            {loading && <div style={{ margin: 16, color: "#888" }}></div>}
          </ChatContainer>
          <InputArea onSend={handleSend} disabled={loading} />
        </>
      )}
    </MainContainer>
  );
}
