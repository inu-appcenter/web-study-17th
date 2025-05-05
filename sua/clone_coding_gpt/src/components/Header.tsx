// Header.tsx
import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButtons';
import { Menu, Info, Upload, MessageCircleDashed } from 'lucide-react';
import { NewNote } from '../interface';

const HeaderWrapper = styled.header`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 다른 요소 위에 뜨게 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  height: 36px; /* 높이 고정 */
`;

const LeftGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const RightGroup = styled.div`
  display: flex;
  gap: 17px;
`;

const Header = ({ setIsNewNote }: NewNote) => {
  return (
    <HeaderWrapper>
      {/* 왼쪽 버튼 그룹 */}
      <LeftGroup>
        <IconButton
          icon={<Menu size={20} />}
          tooltip="사이드바 열기"
          borderless
        />
        <IconButton
          icon={<Info size={20}/>}
          tooltip="새 노트를 작성합니다"
          borderless
          onClick={() => setIsNewNote(true)}
        />
        <IconButton
          label="ChatGPT"
          tooltip="홈으로 이동"
          borderless
        />
      </LeftGroup>

      {/* 오른쪽 버튼 그룹 */}
      <RightGroup>
        <IconButton
          icon={<MessageCircleDashed size={20} />}
          label="임시"
          tooltip="임시 기능"
          borderless={false}
        />
        <IconButton
          icon={
            <img
              src="/profile.jpg"
              alt="프로필"
              style={{ width: 24, height: 24, borderRadius: '9999px' }}
            />
          }
          tooltip="프로필"
          borderless={false}
        />
      </RightGroup>
    </HeaderWrapper>
  );
};

export default Header;
