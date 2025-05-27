import { BrowserRouter, Routes, Route } from "react-router-dom";
//import MainArea from "./components/MainArea/MainArea";
import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./components/AppLayout";
import ChatPage from "./page/ChatPage";
import "./global.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* <Route index element={<MainArea />} /> */}
            <Route index element={<ChatPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// <Route index element={<MainArea />} /> 원래 MainPage랜더링
