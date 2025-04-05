import { DocumentItem } from "../types";

interface ResultsProps {
  items: DocumentItem[];
}

const Results = ({ items }: ResultsProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            전문 보기
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Results;
