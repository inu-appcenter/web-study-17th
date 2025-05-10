import BookSelect from "./pages/BookSelect";
import styled from "styled-components";
import BookCart from "./pages/BookCart";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ViewContainer>
        <Routes>
          <Route path="/" element={<BookSelect />} />
          <Route path="/bookcart" element={<BookCart />} />
        </Routes>
      </ViewContainer>
    </BrowserRouter>
  );
}

export default App;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
