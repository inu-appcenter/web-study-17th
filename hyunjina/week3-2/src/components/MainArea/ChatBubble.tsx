// 말풍선
import styled from "styled-components";
import ChatActions from "./ChatActions";

interface ChatBubbleProps {
  sender: string;
  content: string;
}

const BubbleWrapper = styled.div<{ $isUser: boolean }>`
  display: flex;
  flex-direction: column;

  align-items: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
  gap: 0.3rem;

  padding: 0 12rem;

  margin-bottom: 1.5rem;

  // width: 100%;
`;

// 말풍선 속
const BubbleBox = styled.div<{ $isUser: boolean }>`
  ${({ $isUser }) =>
    $isUser
      ? `
    background-color:#f4f4f4;
    border-radius: 1.5rem 1.5rem 1.5rem 1.5rem;
    height:1rem;
    `
      : `
    color: black;
  padding: 1rem;
    `}

  color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 11px;
  line-height: 1.5;
  // max-width: 80%;
`;

export default function ChatBubble({ sender, content }: ChatBubbleProps) {
  const isUser = sender === "user";

  return (
    <BubbleWrapper $isUser={isUser}>
      <BubbleBox $isUser={isUser}>{content}</BubbleBox>
      {!isUser && <ChatActions />} {/* GPT일 때만 아이콘 */}
    </BubbleWrapper>
  );
}
