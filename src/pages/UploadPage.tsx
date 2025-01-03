import React from 'react';
import ImageUpload from '../components/upload/ImageUpload';
import SearchResult from '../components/SearchResult';

const UploadPage: React.FC = () => {
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);

  const handleUploadComplete = (results: SearchResult[]) => {
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        類似画像検索システム
      </h1>
      <ImageUpload onUploadComplete={handleUploadComplete} />
      {searchResults.length > 0 && <SearchResult results={searchResults} />}
    </div>
  );
};

export default UploadPage; 