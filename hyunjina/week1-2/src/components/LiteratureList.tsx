import { useEffect, useState } from "react";
import { fetchLiteratureItems } from "../api/api";

interface ItemType {
  GUBUN: string;
  TITLE: string;
  DESCRIPTION: string;
  URL: string;
  COLLECTED_DATE: string;
  AUTHOR: string;
}

const LiteratureList = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchLiteratureItems();
      setItems(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>문학광장 채널문장</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h2>{item.TITLE}</h2>
            <p>{item.DESCRIPTION}</p>
            <p>저자: {item.AUTHOR}</p>
            <a href={item.URL} target="_blank" rel="noopener noreferrer">
              바로가기
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiteratureList;
