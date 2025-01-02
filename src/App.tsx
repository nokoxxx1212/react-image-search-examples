import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import SearchResultPage from './pages/SearchResultPage';
import HistoryListPage from './pages/HistoryListPage';
import HistoryDetailPage from './pages/HistoryDetailPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen bg-gray-100 flex-grow">
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/search-result" element={<SearchResultPage />} />
            <Route path="/history" element={<HistoryListPage />} />
            <Route path="/history/:id" element={<HistoryDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 