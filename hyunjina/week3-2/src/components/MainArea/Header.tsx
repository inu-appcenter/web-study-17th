// src/components/MainArea/Header.tsx
// import React from "react";
import styled from "styled-components";
import { PanelLeftDashed, ChevronDown } from "lucide-react";
import { useOutletContext } from "react-router-dom";

interface OutletContextType {
  toggleSidebar: () => void;
  // isSidebarOpen는 여기서 사용하지 않으니 빼줍니다
}

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  overflow: visible;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #f2f2f2;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background: #e0e0e0;
  }
`;

const Title = styled.h1`
  flex: 1;
  font-size: 1.25rem;
  color: #333;
`;

export default function Header() {
  // isSidebarOpen 제거!
  const { toggleSidebar } = useOutletContext<OutletContextType>();

  return (
    <HeaderContainer>
      <ToggleButton onClick={toggleSidebar}>
        <PanelLeftDashed size={20} stroke="#555" />
      </ToggleButton>

      <Title>GPT-Clone</Title>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span>GPT-4o</span>
        <ChevronDown size={16} style={{ marginLeft: 4, stroke: "#333" }} />
      </div>
    </HeaderContainer>
  );
}

// // 공유하기 버튼(sidebar없을때만 렌더링)

// import styled from "styled-components";
// import { Share2 } from "lucide-react";

// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 1.5rem;
// `;

// const ShareButton = styled.button`
//   background: none;
//   border: none;
//   color: black;
//   display: flex;
//   align-items: center;
//   gap: 0.4rem;
//   font-size: 14px;
//   cursor: pointer;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// export default function Header() {
//   return (
//     <HeaderContainer>
//       {/* <ShareButton>
//         <Share2 size={16} />
//         공유하기
//       </ShareButton> */}
//     </HeaderContainer>
//   );
// }
