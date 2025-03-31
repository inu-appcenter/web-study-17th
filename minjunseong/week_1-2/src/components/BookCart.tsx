// import { useState, useEffect } from "react";
import BookSelect from "./BookSelect";
import styled from "styled-components";

// const BookImage = styled.img`
//   width: 180px;
//   height: 270px;
// `;

// 지금 해야하는 거 :
// 홈 버튼 / 내 서재 label component grouping
// 하단 viewer
// 위 두개를 적절한 배치

const BookCart = () => {
  return (
    <ViewContainer>
      <BookCartViewer>test</BookCartViewer>
    </ViewContainer>
  );
};
export default BookCart;

// 근데 이 ViewContainer를 어차피 BookSelect에서도 사용하는데
// 이걸 따로 빼서 import해서 쓰는게 좋을까?
// 아니면 App.tsx에서 전역으로 설정해주는게 좋을까?
const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const BookCartViewer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 870px;
  height: 700px;
  border-radius: 30px;
  background-color: #d9d9d9;
`;
