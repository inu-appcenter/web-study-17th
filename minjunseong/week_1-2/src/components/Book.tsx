// 아직 수정중 ...

import axios from "axios";
import { useState } from "react";

const Book = () => {
  const [query, setQuery] = useState("책 이름을 입력하세요.");
  const NaverClientID = import.meta.env.VITE_NAVERAPI_CLIENT_ID;
  const NaverClientSecret = import.meta.env.VITE_NAVERAPI_CLIENT_SECRET;

  const fetchBookData = async () => {
    try {
      const response = await axios.get("v1/search/book.json?query=" + query, {
        headers: {
          "Content-Type": "application.json",
          "X-Naver-Client-Id": NaverClientID,
          "X-Naver-Client-Secret": NaverClientSecret,
        },
      });
      console.log(response.data);
      console.log(NaverClientID);
      console.log(NaverClientSecret);
      return response.data;
    } catch (error) {
      console.error("Error Occured!", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="책 이름을 입력하세요"
      />
      <button onClick={() => setQuery("")}>Clear</button>
      <button onClick={fetchBookData}>검색</button>
    </div>
  );
};

export default Book;
