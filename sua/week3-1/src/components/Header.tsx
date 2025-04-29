import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HeaderWrapper>
      
      <LeftContainer>
        <Logo to="/">유니 기념품 상점</Logo>
      </LeftContainer>

      <NavContainer>
        <NavMenu>
            <DropdownMenu title="new" items={[]} />
            <DropdownMenu title="best" items={['best', 'sale']} />
            <DropdownMenu title="all" items={['문구', '인형', '학생작품', '리빙']} />
            <DropdownMenu title="catering" items={['케이터링 문의', '음료', '샌드위치', '베이커리']} />
        </NavMenu>
      </NavContainer>

      <RightContainer>
        <StyledLink to="/basket">장바구니</StyledLink>
        <StyledLink to="/login">로그인</StyledLink>
      </RightContainer>

    </HeaderWrapper>
  );
}

export default Header;

  
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between; /* 양끝 정렬 이걸 해줘야 밖으로 안 삐져나가는듯.*/
  padding: 0 40px;
  box-sizing: border-box;
`;

const NavContainer = styled.div`
  flex: 1 1 auto; //가운데 메뉴 남는 공간 모두 차지
  display: flex;
  justify-content: center; 
`;

const RightContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  gap: 20px;
`;

const LeftContainer = styled.div`
  flex: 0 0 auto; // 고정 크기 (logo는 크기 변화 없음)
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  /*버튼같이 안보이게*/
  text-decoration: none;  /* 밑줄 없애기 */
  color: inherit;          /* 부모 색상 그대로 */

  /* 이거 없으면 마우스 올릴 시, 브라우저 기본 스타일인 파란색으로 글씨 변함*/
  &:hover {
  transform: scale(1.5);
}

`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
`;
  
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;