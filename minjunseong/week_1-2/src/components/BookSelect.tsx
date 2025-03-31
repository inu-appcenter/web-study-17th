import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 타입스크립트 인터페이스 : API로 가져온 데이터를 다룰 때 타입을 명시해줘야함
interface BookType {
  title: string;
  author: string;
  image: string;
  description: string;
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
      console.error(
        "빈 값을 보내거나 뭔가 잘못된 요청 : toast처리 해보자",
        error
      );
    }
  };

  // 해야되는 styled
  // 내 서재버튼 / 검색 input태그 component grouping
  // 하단 viewer는 검색했을 때 나오는 책의 정보들

  return (
    <ViewContainer>
      <HeaderBar>
        <BookCartButton onClick={handleToBookCart}>내 서재</BookCartButton>
        <SearchContainer>
          <StyledInput
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="책 이름을 입력하세요"
          />
          <SearchButton onClick={fetchBookData}>
            <img src="/search.png" alt="검색" />
          </SearchButton>
        </SearchContainer>
      </HeaderBar>
      <BookListView>
        {books.map((book, index) => (
          <BookItem key={index}>
            <BookImage src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>저자: {book.author}</p>
            <p>내용: {book.description}</p>
          </BookItem>
        ))}
      </BookListView>
    </ViewContainer>
  );
};

// using styled-components

// 뷰어 컨테이너 (전체를 감싸는 컨테이너)
const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

// 상단쪽 감싸는 컨테이너
const HeaderBar = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const BookCartButton = styled.button`
  padding: 8px 16px;
  color: black;
  border-radius: 30px;
  width: 180px;
  height: 50px;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;

  &:hover {
    background-color: #585858;
  }
`;

// 검색창 묶음
const SearchContainer = styled.div`
  display: flex;
  position: relative;
  gap: 10px;
  align-items: center;
`;

// ------- 검색창 내부 button과 input style
const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: #d9d9d9;
  border: none;
  cursor: pointer;
  padding: 4px;

  img {
    width: 20px;
    height: 20px;
  }
`;

const StyledInput = styled.input`
  padding: 8px 40px 8px 12px; // 오른쪽 패딩을 늘려서 아이콘 공간 확보
  border-radius: 4px;
  background-color: #d9d9d9;
  height: 50px;
  border-radius: 30px;
  width: 300px;
`;

// 받아오는 책 사진이 너무 제각각이어서 따로 스타일 지정을 해주었다.
const BookImage = styled.img`
  width: 170px;
  height: 225px;
`;

// ====하단 style 컴포넌트들====
// 전체 북 리스트에 대한 컨테이너뷰 styled
const BookListView = styled.div`
  width: 870px;
  height: 700px;
  border-radius: 30px;
  background-color: #d9d9d9;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
`;

// 각각의 책에 대한 정보들을 담고 있는 styled
const BookItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 20px;

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
