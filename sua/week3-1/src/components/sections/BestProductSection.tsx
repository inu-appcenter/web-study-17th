import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 100px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
`;


function BestProductSection() {
  return (
    <Wrapper>
      <Title>이번 달의 베스트 상품</Title>
      {/* 상품 리스트 */}
    </Wrapper>
  );
}

export default BestProductSection;
