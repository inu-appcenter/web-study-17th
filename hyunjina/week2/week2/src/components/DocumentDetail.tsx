import { DocumentItem } from "../types";

interface Props {
  item: DocumentItem;
  onBack: () => void;
}

const DocumentDetail = ({ item, onBack }: Props) => {
  return (
    <div>
      <button onClick={onBack}>← 뒤로가기</button>
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        네이버에서 보기
      </a>
    </div>
  );
};

export default DocumentDetail;
