import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18以降ではこちらを使用
import './index.css';
import App from './App';

// React 18以降の新しい方法
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);