import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 12px;
`;

const Name = styled.h3`
  font-size: 16px;
  margin: 8px 0 4px;
`;

const Price = styled.p`
  color: #555;
  font-size: 14px;
`;

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Info>
    </Card>
  );
}

export default ProductCard;
