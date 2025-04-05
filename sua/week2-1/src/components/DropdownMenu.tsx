import styled from 'styled-components';

type DropdownMenuProps = {
  title: string;
  items: string[];
};

function DropdownMenu({ title, items }: DropdownMenuProps) {
  return (
    <NavItem>
      {title}
      <DropdownList>
        {items.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownList>
    </NavItem>
  );
}

export default DropdownMenu;

// 스타일 컴포넌트 정의
const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  padding: 10px 15px;
  font-weight: bold;
  white-space: nowrap;
`;

// 기본은 숨김, NavItem 위에 마우스 올리면 보이게
const DropdownList = styled.ul`
  display: none;
  position: absolute;
  top: 100%; /* 아래로 붙이기 */
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 8px 0;
  margin: 0;
  min-width: 160px;
  z-index: 100;

  ${NavItem}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

