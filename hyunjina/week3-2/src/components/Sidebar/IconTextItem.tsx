import styled from "styled-components";

// 글 item만
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  padding: 0;
  gap: 0.6rem;
  color: rgb(0, 0, 0);
  font-size: 9px;
  font-weight: 400;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;

  height: 20px;

  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

interface IconTextItemProps {
  label: string;
  onClick?: () => void;
}

export default function IconTextItem({ label, onClick }: IconTextItemProps) {
  return (
    <ItemWrapper onClick={onClick}>
      <span style={{ marginLeft: "0.5rem" }}>{label}</span>
    </ItemWrapper>
  );
}
