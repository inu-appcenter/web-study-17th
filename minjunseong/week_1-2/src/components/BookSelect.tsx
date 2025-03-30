import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface BookType {
  title: string;
  author: string;
  publisher: string;
  image: string;
  discount: string;
}

const Book = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<BookType[]>([]);
  const NaverClientID = import.meta.env.VITE_NAVERAPI_CLIENT_ID;
  const NaverClientSecret = import.meta.env.VITE_NAVERAPI_CLIENT_SECRET;

  const handleToBookCart = () => {
    navigate("/bookcart");
  };

  const fetchBookData = async () => {
    try {
      const response = await axios.get("v1/search/book.json?query=" + query, {
        headers: {
          "Content-Type": "application.json",
          "X-Naver-Client-Id": NaverClientID,
          "X-Naver-Client-Secret": NaverClientSecret,
        },
      });
      setBooks(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.error("Error Occured!", error);
    }
  };

  // 해야되는 styled
  // 내 서재버튼 / 검색 input태그 component grouping
  // 하단 viewer는 검색했을 때 나오는 책의 정보들

  return (
    <div>
      <button onClick={handleToBookCart}>내 서재</button>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="책 이름을 입력하세요"
      />
      <button onClick={fetchBookData}>검색</button>
      <BookListView>
        {books.map((book, index) => (
          <BookItem key={index}>
            <BookImage src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>저자: {book.author}</p>
            <p>출판사: {book.publisher}</p>
            <p>가격: {book.discount}원</p>
          </BookItem>
        ))}
      </BookListView>
    </div>
  );
};

// using styled-components
const BookImage = styled.img`
  width: 180px;
  height: 270px;
  overflow-y: true;
`;

const BookListView = styled.div`
  width: 1420px;
  height: 806px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
`;

const BookItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 10px 0;
    font-size: 18px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }
`;
export default Book;
