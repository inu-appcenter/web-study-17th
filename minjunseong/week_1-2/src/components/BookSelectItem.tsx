import styled from "styled-components";

interface BookType {
  title: string;
  author: string;
  image: string;
  description: string;
}

interface BookSelectItemProps {
  book: BookType;
  onAdd: (book: BookType) => void;
}

const BookSelectItem = ({ book, onAdd }: BookSelectItemProps) => {
  return (
    <ItemContainer>
      <BookImage src={book.image} alt={book.title} />
      <div>
        <TitleRow>
          <BookTitle>{book.title}</BookTitle>
          <LikeBtn onClick={() => onAdd(book)}>추가</LikeBtn>
        </TitleRow>
        <BookAuthor>{book.author}</BookAuthor>
        <BookDescription>{book.description}</BookDescription>
      </div>
    </ItemContainer>
  );
};

export default BookSelectItem;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  margin: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BookImage = styled.img`
  width: 155px;
  height: 210px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LikeBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #d9d9d9;
  &:hover {
    background-color: #c0c0c0;
  }
`;

const BookAuthor = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`;

const BookDescription = styled.p`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-top: 30px;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;
