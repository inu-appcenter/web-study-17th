import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Login from './pages/Login';
import Basket from './pages/Basket';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>        
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;
