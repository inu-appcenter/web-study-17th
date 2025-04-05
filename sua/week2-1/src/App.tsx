import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Main from './pages/Main';
import Login from './pages/Login';
import Basket from './pages/Basket';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        {/* 헤더 높이만큼 여백 추가 */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
