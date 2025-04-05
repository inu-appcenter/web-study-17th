import styled from 'styled-components';
import { Link } from 'react-router-dom';

function BasketButton() {
    return <Button to="/basket">장바구니</Button>;
}

export default BasketButton;


const Button = styled(Link)`
  padding: 8px 12px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  font-weight: bold;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #0070f3;
  }
`;