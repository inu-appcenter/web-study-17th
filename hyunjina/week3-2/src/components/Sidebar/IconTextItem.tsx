import styled from "styled-components";
// import { LucideIcon } from "lucide-react";

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

  //background-color: red;
  height: 20px;

  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

interface IconTextItemProps {
  // icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export default function IconTextItem({
  // icon: Icon,
  label,
  onClick,
}: IconTextItemProps) {
  return (
    <ItemWrapper onClick={onClick}>
      {/* {Icon && <Icon />} */}
      {/* <Icon size={18} /> */}
      <span style={{ marginLeft: "0.5rem" }}>{label}</span>
    </ItemWrapper>
  );
}
