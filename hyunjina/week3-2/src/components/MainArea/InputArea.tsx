// src/components/MainArea/InputArea.tsx
import React, { useState } from "react";
import styled from "styled-components";
import InputTools from "./InputTools";
import VoiceSendGroup from "./VoiceSendGroup";

const InputWrapper = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;

  min-width: 0;
  // flex: 0 1 auto;

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  background: #fff;

  width: 100%;
  max-width: 600px;

  min-height: 60px;
  gap: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-width: 0;
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

  min-width: 0;
`;
const InputField = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  font-size: 12px;
  color: black;

  min-width: 0;

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
