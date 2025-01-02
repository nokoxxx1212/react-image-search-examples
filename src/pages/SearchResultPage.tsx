import React, { useState } from 'react';
import { SearchResult } from '../types';

const SearchResultPage: React.FC = () => {
  const [searchResults] = useState<SearchResult[]>([
    // ダミーデータ
    {
      id: '1',
      // 検索結果（チェック画面）のダミー画像（わかめおにぎり）
      imagePath: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidhK5jMguVWFpj6CE3KYAa34XxQEheP6ns2oO5WN-eP8K96owCFiL45TKfVwzZW2-AMyyFt9gcWfFHxXv2JYK57cEhJvh-QBMviuI0eRKfNHvVrnztF7PNAWD1j9-NK6gldL_7B6jc_I8/s800/onigiri_wakame.png',
      similarityScore: 0.85,
      isTraced: false
    },
    // ... 他のダミーデータ
  ]);

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSave = async () => {
    // TODO: 実際の保存処理を実装
    alert('チェック結果を保存しました');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">検索結果</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map(result => (
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
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems[result.id] || false}
                  onChange={() => handleCheck(result.id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">トレース画像</span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg"
        >
          チェック結果を保存
        </button>
      </div>
    </div>
  );
};

export default SearchResultPage; 