// 상세보기
import { DocumentItem } from "../types";
import RecommendedList from "./RecommendedList";
import { recommendedDocuments } from "../data/RecommendData";

interface Props {
  item: DocumentItem;
  onBack: () => void;
  onSelect: (item: DocumentItem) => void; // 추천 문서 클릭 시 선택
}

const DocumentDetail = ({ item, onBack, onSelect }: Props) => {
  return (
    <div>
      <button onClick={onBack}>← 뒤로가기</button>

      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>

      <p>
        <strong>발행일:</strong> {item.pubDate || "발행일 정보 없음"}
      </p>
      <p>
        <strong>작성자:</strong> {item.author || "작성자 정보 없음"}
      </p>
      <p>
        <strong>발행처:</strong> {item.publisher || "발행처 정보 없음"}
      </p>
      <p>
        <strong>ISBN:</strong> {item.isbn || "ISBN 정보 없음"}
      </p>
      <p>
        <strong>분류:</strong> {item.category || "분류 정보 없음"}
      </p>
      <p>
        <strong>파일 형식:</strong> {item.format || "파일 형식 정보 없음"}
      </p>

      <a href={item.link} target="_blank" rel="noopener noreferrer">
        네이버에서 보기
      </a>

      <hr />

      <RecommendedList documents={recommendedDocuments} onClick={onSelect} />
    </div>
  );
};

export default DocumentDetail;
