import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import LoginButton from './LoginButton';
import BasketButton from './BasketButton';


function Header() {
    return (
      <HeaderWrapper>
        <Logo>유니 기념품 상점</Logo>
        <NavContainer>
            <NavMenu>
            <DropdownMenu title="new" items={[]} />
            <DropdownMenu title="best" items={['best', 'sale']} />
            <DropdownMenu title="all" items={['문구', '인형', '학생작품', '리빙']} />
            <DropdownMenu title="catering" items={['케이터링 문의', '음료', '샌드위치', '베이커리']} />
            </NavMenu>
        </NavContainer>

        <ActionContainer>
            <LoginButton />
            <BasketButton />
        </ActionContainer>
        </HeaderWrapper>
    );
  }

const NavContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 20px;
`;

  
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
  justify-content: space-between;
  padding: 0 40px;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
`;
  
  export default Header;
  