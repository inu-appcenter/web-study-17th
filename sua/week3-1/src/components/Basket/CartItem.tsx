import styled from 'styled-components';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  onDelete: (id: number) => void;
  onChangeQuantity: (id: number, quantity: number) => void;
}

const CartItem = ({ item, onDelete, onChangeQuantity }: CartItemProps) => {
  return (
    <ItemWrapper>
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
      </ItemInfo>
      <QuantityControl>
        <Button onClick={() => onChangeQuantity(item.id, item.quantity - 1)}>-</Button>
        <Quantity>{item.quantity}</Quantity>
        <Button onClick={() => onChangeQuantity(item.id, item.quantity + 1)}>+</Button>
      </QuantityControl>
      <DeleteButton onClick={() => onDelete(item.id)}>삭제</DeleteButton>
    </ItemWrapper>
  );
};

export default CartItem;

// styled-components
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  margin: 4px 0 0;
  color: #888;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
  font-size: 16px;
`;

const Quantity = styled.span`
  font-size: 16px;
  min-width: 20px;
  text-align: center;
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
