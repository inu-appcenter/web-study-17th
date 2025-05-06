// Header.tsx
import React from 'react';
import styled from 'styled-components';
import { PanelLeft, SquarePen, MessageCircleDashed, Smile } from 'lucide-react';
import { NewNote } from '../interface';
import ButtonGroup from './ButtonGroup';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between; /* 핵심 */
  align-items: center;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid #ddd;
`;

const Header = ({ setIsNewNote }: NewNote) => {
  const leftButtons = [
    {
      icon: <PanelLeft size={20} />,
      tooltip: '사이드바 열기',
      borderless: true,
    },
    {
      icon: <SquarePen size={20} />,
      tooltip: '새 노트를 작성합니다',
      borderless: true,
      onClick: () => setIsNewNote(true),
    },
    {
      label: 'ChatGPT',
      tooltip: '홈으로 이동',
      borderless: true,
    },
  ];

  const rightButtons = [
    {
      icon: <MessageCircleDashed size={20} />,
      label: '임시',
      tooltip: '임시 기능',
      borderless: false,
    },
    {
      icon:<Smile size={20}/>,
      //image: '/profile.jpg',
      tooltip: '프로필',
      borderless: false,
    },
  ];

  return (
<HeaderWrapper>
  <ButtonGroup buttons={leftButtons} gap="5px" position="left" />
  <ButtonGroup buttons={rightButtons} gap="17px" position="right" />
</HeaderWrapper>
  );
};
//현재 문제 : 오른쪽 그룹이 아예 화면 밖으로 나가버림.

export default Header;
