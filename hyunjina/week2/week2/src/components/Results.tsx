// 검색결과 리스트
import React from "react";
import { DocumentItem } from "../types";

interface Props {
  items: DocumentItem[];
  onClick: (item: DocumentItem) => void;
}

const Results = ({ items, onClick }: Props) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onClick(item)}
          style={{ cursor: "pointer", marginBottom: "10px" }}
        >
          <span dangerouslySetInnerHTML={{ __html: item.title }} />
        </li>
      ))}
    </ul>
  );
};

export default Results;
