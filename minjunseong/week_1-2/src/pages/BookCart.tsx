import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCartItem from "../components/BookCartItem";

interface BookType {
  title: string;
  author: string;
  image: string;
  description: string;
}

const BookCart = () => {
  const navigate = useNavigate();

  const handleToBookSelect = () => {
    navigate("/");
  };

  const [savedBooks, setSavedBooks] = useState<BookType[]>([]);
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("myLibrary") || "[]");
      setSavedBooks(data);
    } catch (err) {
      console.error("잘못된 JSON 형식", err);
      setSavedBooks([]);
    }
  }, []);

  return (
    <div>
      <HeaderBar>
        <HomeButton onClick={handleToBookSelect}>
          <FaHome size="20" />
        </HomeButton>
        <TitleLabel>내 서재</TitleLabel>
      </HeaderBar>
      <BookCartViewer>
        {savedBooks.map((book, index) => (
          <BookCartItem key={index} book={book} />
        ))}
      </BookCartViewer>
    </div>
  );
};

const HeaderBar = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HomeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #cbcbcb;
  }
`;

const TitleLabel = styled.div`
  width: 400px;
  height: 50px;
  background-color: #d9d9d9;
  display: flex;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
`;

const BookCartViewer = styled.div`
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  height: 700px;
  border-radius: 30px;
  background-color: #d9d9d9;
  padding: 20px;
  overflow-y: auto;
`;

export default BookCart;
