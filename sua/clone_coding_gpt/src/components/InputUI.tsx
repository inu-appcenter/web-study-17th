import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Plus, Globe, Lightbulb, Telescope, Brush, Ellipsis, Mic, AudioLines } from 'lucide-react';
import ButtonGroup from './ButtonGroup';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 가운데 정렬 */
  gap: 0px;
`;

const Container = styled.div<{ isNewNote: boolean }>`
  position: ${(props) => (props.isNewNote ? 'absolute' : 'fixed')};
  top: ${(props) => (props.isNewNote ? '50%' : 'auto')};
  bottom: ${(props) => (props.isNewNote ? 'auto' : '0')};
  left: 50%;
  transform: ${(props) =>
    props.isNewNote ? 'translate(-50%, -50%)' : 'translateX(-50%)'};
  width: 90%;
  max-width: 600px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 10   px;
  display: flex;
  flex-direction: column;
`;

const InputArea = styled.textarea<{ hasText: boolean }>`
  width: 97%;
  border: none;
  border-radius: 8px;
  padding: 6px;
  resize: none;
  font-size: 18px;
  background-color: rgb(255, 255, 255);
  outline: none;
  font-family: 'Noto Sans KR', sans-serif;
  color: ${(props) => (props.hasText ? 'black' : 'rgb(145, 145, 145)')};

  line-height: 24px; /* 각 줄의 높이 */
  overflow-y: auto; /* 내용이 많을 경우 세로로 스크롤 가능 */
  max-height: calc(24px * 7); /* 최대 7줄까지 확장 가능 (7 * line-height) */

  &::placeholder {
    color: rgb(145, 145, 145);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  height: 50px;
  gap: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const InputUI = ({ isNewNote }: { isNewNote: boolean }) => {
  const [text, setText] = useState('');
  const [position, setPosition] = useState<'fixed' | 'absolute'>('fixed');

  useEffect(() => {
    setPosition(isNewNote ? 'absolute' : 'fixed');
  }, [isNewNote]);

  const leftButtons = [
    {
      icon: <Plus size={20} />,
      tooltip: ' '
    },
    {
      icon: <Globe size={20} />,
      label : "검색",
      tooltip: '웹에서 검색'
    },
    {
      icon:<Lightbulb size={20}/>,
      label: '이성',
      tooltip: '응답 전에 생각하기'
    },
    {
      icon:<Telescope size={20}/>,
      label: '심층 리서치',
      tooltip: '어느 토픽에나 상세한 인사이트 생성'
    },
    {
      icon: <Ellipsis size={20} />,
      tooltip: '도구보기'
    }
  ];

  const rightButtons = [
    {
      icon: <Mic size={20} />,
      tooltip: '음성 입력',
      borderless: false,
    },
    {
      icon : <AudioLines size={20}/>,
      tooltip: '음성모드 사용',
      borderless: false,
    },
  ];

  return (
    <Wrapper>
      <Container isNewNote={isNewNote}>
        <InputArea
          placeholder="무엇이든 물어보세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
          hasText={text.trim().length > 0}
        />
        <ButtonRow>
          <ButtonGroup buttons={leftButtons} gap="5px" />
          <ButtonGroup buttons={rightButtons} gap="5px" />
        </ButtonRow>
      </Container>
    </Wrapper>
  );
};

export default InputUI;
