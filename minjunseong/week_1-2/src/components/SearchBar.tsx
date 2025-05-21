import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="책 이름을 입력하세요"
      />
      <Button onClick={onSearch}>
        <FaSearch size="20" />
      </Button>
    </Container>
  );
};

export default SearchBar;

// Styled components
const Container = styled.div`
  display: flex;
  position: relative;
  gap: 10px;
  align-items: center;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 8px 40px 8px 20px;
  border-radius: 4px;
  background-color: #d9d9d9;
  height: 50px;
  border-radius: 30px;
  width: 400px;
`;

const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: #d9d9d9;
  border: none;
  cursor: pointer;
  padding: 4px;
`;
