// import React, { useState, useRef, useEffect } from "react";
// import styled from "styled-components";
// import { useOutletContext } from "react-router-dom";
// import { PanelLeftDashed } from "lucide-react";

// import Header from "./Header";
// import InputArea from "./InputArea";
// import ChatBubble from "./ChatBubble";
// import type { Message } from "../../data/ChatMessages";

// export interface OutletContextType {
//   selectedChatId: string | null;
//   messages: Message[];
//   toggleSidebar: () => void;
//   isSidebarOpen: boolean;
// }

// const MainContainer = styled.div`
//   //position: relative;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   background-color: #ffffff;
//   color: #000000;
//   //overflow: hidden;
// `;

// const ChatContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: 1rem;
// `;

// const TopBar = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 1rem;
//   gap: 0.5rem;
//   position: relative;

//   overflow: visible; /* 드롭다운을 자르지 않도록 */
//   z-index: 1;
// `;

// const Mainbtn = styled.button<{ $visible: boolean }>`
//   position: absolute;
//   top: 1rem;
//   left: 1rem;

//   width: 32px;
//   height: 32px;

//   display: ${({ $visible }) => ($visible ? "flex" : "none")};
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   color: black;
//   border: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f3f3f3;
//   }

//   // margin-right: 0.5rem;
// `;

// const ModelSelector = styled.div`
//   position: relative;
//   display: inline-block;
//   margin: 0; /* 전체 마진 제거 */
//   /* margin-left: 0.5rem;  // 토글 버튼과 좀 더 벌리고 싶으면 이 한 줄만 추가 */
// `;

// // GPT
// const SelectorButton = styled.button`
//   display: flex;
//   align-items: flex-start;

//   background: black;
//   color: black;
//   padding: 4px 8px;
//   border-radius: 10px;
//   // cursor: pointer;

//   font-weight: 400;
//   font-size: 12px;
// `;

// interface ModelItem {
//   id: string;
//   label: string;
//   description?: string;
// }

// const modelOptions: ModelItem[] = [
//   { id: "label", label: "모델" },
//   { id: "gpt4o", label: "GPT-4o", description: "대부분의 업무에 탁월함" },
//   { id: "o3", label: "o3", description: "고급 이성 사용" },
//   {
//     id: "o4mini",
//     label: "o4-mini",
//     description: "고급 및 시각적 이성에 탁월함",
//   },
//   {
//     id: "o4miniHigh",
//     label: "o4-mini-high",
//     description: "코딩 및 시각적 이성에 탁월함",
//   },
//   { id: "more", label: "더 많은 모델" },
// ];

// const Dropdown = styled.ul`
//   position: absolute;
//   left: 0;
//   margin-top: 4px;
//   padding: 0px 0;
//   width: 170px;

//   max-height: 220px;

//   background: black;
//   border-radius: 8px;
//   list-style: none;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   z-index: 10;
// `;

// interface DropdownItemProps {
//   isLabel?: boolean;
//   isSelected?: boolean;
// }
// const DropdownItem = styled.li<DropdownItemProps>`
//   display: flex;
//   flex-direction: column;
//   cursor: ${({ isLabel }) => (isLabel ? "default" : "pointer")};
//   background: ${({ isSelected }) => (isSelected ? "#f0f0f0" : "transparent")};

//   padding: 0px 10px;
//   margin: 7px 0;
//   border-radius: 8px;
//   text-align: left;
//   color: ${({ isLabel }) => (isLabel ? "gray" : "black")};
//   cursor: ${({ isLabel }) => (isLabel ? "default" : "pointer")};
//   //background: red;
//   // background: ${({ isLabel }) => (isLabel ? "transparent" : "#eeeeee")};
//   &:hover {
//     background: ${({ isLabel }) => (isLabel ? "transparent" : "#f3f3f3")};
//   }
// `;

// const ItemLabel = styled.span<DropdownItemProps>`
//   font-size: ${({ isLabel }) => (isLabel ? "9px" : "9px")};
//   font-weight: ${({ isLabel }) => (isLabel ? "400" : "400")};
//   color: ${({ isLabel }) => (isLabel ? "gray" : "black")};

//   // margin: 0px 0;

//   font-size: 10.5px;
// `;

// // 지피티 부가설명들
// const ItemDescription = styled.span`
//   font-size: 10px;
//   color: #666;
//   margin-top: 1.5px;
// `;

// export default function MainArea() {
//   const { selectedChatId, messages, toggleSidebar, isSidebarOpen } =
//     useOutletContext<OutletContextType>();

//   const [currentModel, setCurrentModel] = useState("ChatGPT-4o");
//   const [open, setOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     }
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <MainContainer>
//       <TopBar>
//         <Mainbtn onClick={toggleSidebar} $visible={!isSidebarOpen}>
//           <PanelLeftDashed size={16} />
//         </Mainbtn>

//         <ModelSelector ref={ref}>
//           <SelectorButton onClick={() => setOpen((v) => !v)}>
//             {currentModel} v
//           </SelectorButton>
//           {open && (
//             <Dropdown>
//               {modelOptions.map((option) => {
//                 const isLabel = option.id === "label";
//                 const isSelected = option.label === currentModel;

//                 return (
//                   <DropdownItem
//                     key={option.id}
//                     isLabel={isLabel}
//                     isSelected={isSelected}
//                     onClick={() => {
//                       if (!isLabel) {
//                         setCurrentModel(option.label);
//                         setOpen(false);
//                       }
//                     }}
//                   >
//                     <ItemLabel isLabel={isLabel}>{option.label}</ItemLabel>
//                     {!isLabel && option.description && (
//                       <ItemDescription>{option.description}</ItemDescription>
//                     )}
//                   </DropdownItem>
//                 );
//               })}
//             </Dropdown>
//           )}
//         </ModelSelector>
//       </TopBar>

//       <Header />

//       {selectedChatId && (
//         <ChatContainer>
//           {messages.map((msg) => (
//             <ChatBubble
//               key={msg.id}
//               sender={msg.sender}
//               content={msg.content}
//             />
//           ))}
//         </ChatContainer>
//       )}

//       {/* 2) 입력창: 항상 화면 하단에 */}
//       <InputArea />
//     </MainContainer>
//   );
// }

// src/components/MainArea/MainArea.tsx
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { PanelLeftDashed } from "lucide-react";

import Header from "./Header";
import InputArea from "./InputArea";
import ChatBubble from "./ChatBubble";
import type { Message } from "../../data/ChatMessages";

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

//--------------------------------------------
{
  /* <Header />

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
    </MainContainer> */
}
