import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { LuLibraryBig } from "react-icons/lu";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookSelectItem from "../components/BookSelectItem";

interface BookType {
  title: string;
  author: string;
  image: string;
  description: string;
}

const Book = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<BookType[]>([]); // ts : 타입 지정
  const NaverClientID = import.meta.env.VITE_NAVERAPI_CLIENT_ID;
  const NaverClientSecret = import.meta.env.VITE_NAVERAPI_CLIENT_SECRET;

  const handleToBookCart = () => {
    navigate("/bookcart");
  };

  // 책 추가 버튼 클릭 시 localStorage에 책 정보를 저장하는 함수
  const handleAddToLibrary = (book: BookType) => {
    const existing = JSON.parse(localStorage.getItem("myLibrary") || "[]");
    const isDuplicate = existing.some((b: BookType) => b.title === book.title);

    if (isDuplicate) {
      toast.warning("중복된 책은 담을 수 없습니다.", {
        position: "top-center",
      });
      return;
    }

    const updated = [...existing, book];
    localStorage.setItem("myLibrary", JSON.stringify(updated));
    toast.success("서재에 추가되었습니다!", { position: "top-center" });
  };

  const fetchBookData = async () => {
    try {
      const response = await axios.get("v1/search/book.json?query=" + query, {
        headers: {
          "Content-Type": "application/json",
          "X-Naver-Client-Id": NaverClientID,
          "X-Naver-Client-Secret": NaverClientSecret,
        },
      });
      setBooks(response.data.items);
    } catch (error) {
      console.error("서버가 이상하군", error);
    }
  };

  return (
    <>
      <HeaderBar>
        <BookCartButton onClick={handleToBookCart}>
          <LuLibraryBig size="25" style={{ margin: "12px" }} />내 서재
        </BookCartButton>
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSearch={fetchBookData}
        />
      </HeaderBar>
      <BookListView>
        {books.map((book, index) => (
          <BookSelectItem key={index} book={book} onAdd={handleAddToLibrary} />
        ))}
      </BookListView>
      <ToastContainer />
    </>
  );
};

// using styled-components
// 상단쪽 감싸는 컨테이너
const HeaderBar = styled.div`
  width: 1020px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

// 내 서재 버튼 style 규칙
const BookCartButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  border-radius: 30px;
  width: 180px;
  height: 50px;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;

  &:hover {
    background-color: #cbcbcb;
  }
`;

const BookListView = styled.div`
  width: 980px;
  height: 700px;
  border-radius: 30px;
  background-color: #d9d9d9;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  -webkit-scrollbar {
    display: none;
  }
`;

export default Book;
