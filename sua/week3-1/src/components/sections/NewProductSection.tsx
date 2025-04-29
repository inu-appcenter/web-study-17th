import styled from 'styled-components';
import Card from './ProductCard';

const products = [
  { image: '/productimg/cookie.png', name: '횟불런', price: '12,000원' },
  { image: '/productimg/graduate.png', name: '졸축', price: '7,000원' },
];

function NewProductSection() {
  return (
    <Wrapper>
      <Title>신규 상품</Title>
      <CardList>
        {products.map((p, index) => (
          <Card key={index} image={p.image} name={p.name} price={p.price} />
        ))}
      </CardList>
    </Wrapper>
  );
}

export default NewProductSection;

const Wrapper = styled.section`
  padding: 100px 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
`;

const CardList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* 필요 시 줄바꿈 */
  justify-content: center; /* 가운데 정렬 */
`;