import styled from "styled-components";

interface BookType {
  title: string;
  author: string;
  image: string;
  description: string;
}

const CartBookItem = ({ book }: { book: BookType }) => {
  return (
    <BookItem>
      <BookImage src={book.image} alt={book.title} />
      <BookTitle>{book.title}</BookTitle>
    </BookItem>
  );
};

export default CartBookItem;

const BookItem = styled.div`
  width: 250px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
`;

const BookImage = styled.img`
  max-width: 300px;
  max-height: 200px;
`;

const BookTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  max-width: 200px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
