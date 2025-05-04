// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './layouts/Layout';
import Contents from './pages/Contents';

function App() {
  const [isNewNote, setIsNewNote] = useState<boolean>(true); // 새 노트 여부 상태

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isNewNote={isNewNote} setIsNewNote={setIsNewNote} />}>
          <Route index element={<Contents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
