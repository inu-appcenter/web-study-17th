import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function LoginButton() {
  return <Button to="/login">로그인</Button>;
}

export default LoginButton;
