import { DocumentItem } from "../types";

interface ResultsProps {
  items: DocumentItem[];
  onItemClick: (item: DocumentItem) => void;
}

const Results = ({ items, onItemClick }: ResultsProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onItemClick(item)}
          style={{ cursor: "pointer" }}
        >
          <strong dangerouslySetInnerHTML={{ __html: item.title }}></strong>
        </li>
      ))}
    </ul>
  );
};

export default Results;
