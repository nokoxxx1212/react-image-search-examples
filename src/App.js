import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import SearchResultPage from './pages/SearchResultPage';
import HistoryListPage from './pages/HistoryListPage';
import HistoryDetailPage from './pages/HistoryDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/history" element={<HistoryListPage />} />
          <Route path="/history/:id" element={<HistoryDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
*/
