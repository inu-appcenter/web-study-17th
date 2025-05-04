import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Basket from './pages/Basket';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        {/* 헤더 높이만큼 여백 추가 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
