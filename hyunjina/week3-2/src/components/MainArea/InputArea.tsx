// src/components/MainArea/InputArea.tsx
import React, { useState } from "react";
import styled from "styled-components";
import InputTools from "./InputTools";
import VoiceSendGroup from "./VoiceSendGroup";

const InputWrapper = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  /* 기존 스타일 그대로 */
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 60%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 220px;
`;
const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.5rem;
  width: 100%;
`;
const InputField = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  font-size: 12px;
  color: black;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

interface InputAreaProps {
  onSend?: (text: string) => void;
  disabled?: boolean;
}

export default function InputArea({ onSend, disabled }: InputAreaProps) {
  const [text, setText] = useState("");

  const submit = () => {
    if (disabled || !text.trim() || typeof onSend !== "function") return;
    onSend(text.trim());
    setText("");
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit();
  };

  return (
    <InputWrapper>
      <InputContainer>
        <InputRow>
          <InputField
            placeholder="무엇이든 물어보세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={disabled}
          />
        </InputRow>
        <TopRow>
          <InputTools />
          <VoiceSendGroup onSend={submit} disabled={disabled} />
        </TopRow>
      </InputContainer>
    </InputWrapper>
  );
}

// 원래 코드
// import styled from "styled-components";
// import InputTools from "./InputTools";
// import VoiceSendGroup from "./VoiceSendGroup";

// import type { OutletContext } from "../MainArea/MainArea";
// import { useOutletContext } from "react-router-dom";

// const InputWrapper = styled.div
//   padding: 1rem 1.5rem;
//   width: 100%;
//   //height: 100vh;
//   display: flex;

//   justify-content: center;
//   flex-direction: column;

//   align-items: center;
// ;

// const InputContainer = styled.div
//   border: 1px solidrgb(20, 20, 139);
//   border-radius: 15px;
//   padding: 10px;
//   border: 1px solidrgba(249, 249, 249, 0.74);
//   box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
//   background-color: rgb(255, 255, 255);
//   width: 60%;
//   height: 60px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
// ;
// // 심층리서치+검색+이미지그리기
// const TopRow = styled.div
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: black;
//   background-color: rgb(255, 255, 255);
//   gap: 220px;
// ;

// const InputRow = styled.div
//   display: flex;
//   align-items: center;

//   gap: 0.5rem;
//   color: red;
//   background-color: rgb(255, 255, 255);
//   padding-left: 0.5rem;

//   // flex-direction: column;
//   // align-items: center;
//   justify-content: flex-start;

//   width: 100%;
// ;

// const InputTitleRow = styled.div
//   flex-direction: column;
//   align-items: center;
//   display: flex;
// ;
// // 무슨 작업을 하고 계세요?
// const InputTitle = styled.div
//   font-size: 20px;
//   margin-bottom: 2rem;

//   color: black;
// ;

// // 무엇이든 물어보세요
// const InputField = styled.input
//   flex: 1;
//   background: transparent;
//   border: none;
//   color: black;
//   font-size: 12px;

//   text-align: left;

//   &::placeholder {
//     color: gray;
//   }

//   &:focus {
//     outline: none;
//   }
// ;

// export default function InputArea() {
//   const { selectedChatId } = useOutletContext<OutletContextType>();

//   return (
//     <InputWrapper>
//       {!selectedChatId && (
//         <InputTitleRow>
//           <InputTitle>무슨 작업을 하고 계세요?</InputTitle>
//         </InputTitleRow>
//       )}

//       <InputContainer>
//         <InputRow>
//           <InputField placeholder="무엇이든 물어보세요" autoFocus />
//         </InputRow>
//         <TopRow>
//           <InputTools />
//           <VoiceSendGroup />
//         </TopRow>
//       </InputContainer>
//     </InputWrapper>
//   );
// }
