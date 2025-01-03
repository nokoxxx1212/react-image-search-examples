import React from 'react';
import { SearchResult as SearchResultType } from '../types';

interface SearchResultProps {
  results: SearchResultType[];
}

const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">検索結果</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(result => (
          <div key={result.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={result.imagePath}
              alt="検索結果"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                類似度: {(result.similarityScore * 100).toFixed(1)}%
              </span>
              <span className={`px-3 py-1 rounded-full ${
                result.isTraced
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {result.isTraced ? '類似画像' : '非類似画像'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult; 