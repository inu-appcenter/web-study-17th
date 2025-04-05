import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 스타일 있는 경우

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
