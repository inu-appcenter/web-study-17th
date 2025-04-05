// 추천 결과 보기
import React from "react";
import { DocumentItem } from "../types";

interface Props {
  documents: DocumentItem[];
  onClick: (doc: DocumentItem) => void;
}

const RecommendedList = ({ documents, onClick }: Props) => {
  return (
    <div>
      <h3>🔎 이런 자료도 추천해요!</h3>
      <ul>
        {documents.map((doc, index) => (
          <li
            key={index}
            onClick={() => onClick(doc)}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            {doc.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedList;
