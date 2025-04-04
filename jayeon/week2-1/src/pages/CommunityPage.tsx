import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommunityPage: React.FC = () => {
  return (
    <Wrapper>
      <h1>💬 Community Page (커뮤니티)</h1>
    </Wrapper>
  );
};

export default CommunityPage;
