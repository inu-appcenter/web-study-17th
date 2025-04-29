import { useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Item[]>([
    { id: 1, name: '문구 세트', price: 15000, quantity: 2 },
    { id: 2, name: '인형', price: 30000, quantity: 1 },
    { id: 3, name: '학생 작품', price: 20000, quantity: 3 },
  ]);

  const handleDelete = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    //setCartItem 안에 arrow 함수.
  };

  const handleChangeQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return; // 수량은 1 이하로 못 줄이게
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
        //item의 속성 다 풀어서 quantitiy 속성만 덮어씀.
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <CartWrapper>
        <h2>장바구니</h2>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onChangeQuantity={handleChangeQuantity}
          />
        ))}
        <TotalPrice>총합: {getTotalPrice().toLocaleString()}원</TotalPrice>
      </CartWrapper>
    </Container>  
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center;     /* 세로 중앙 */
  height: 100vh;           /* 화면 전체 높이 */
  padding-top: 60px;       /* 헤더가 있으면 살짝 내려주기 */
  box-sizing: border-box;
`;

// styled-components
const CartWrapper = styled.div`
  max-width: 600px;
  width: 100%
  padding: 20px;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;
