// 원래 코드
import styled from "styled-components";
import { Mic, AudioLines } from "lucide-react";

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default function VoiceSendGroup({ onSend }) {
  return (
    <ButtonGroup>
      <IconButton title="음성 입력">
        <Mic size={16} />
      </IconButton>
      <IconButton title="보내기">
        <AudioLines size={16} />
      </IconButton>
    </ButtonGroup>
  );
}
