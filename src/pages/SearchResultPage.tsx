import React, { useState } from 'react'; 
import { SearchResult } from '../types';

const SearchResultPage: React.FC = () => {
  const [searchResults] = useState<SearchResult[]>([
    // 検索結果のダミーデータ
    {
      id: '1',
      imagePath: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidhK5jMguVWFpj6CE3KYAa34XxQEheP6ns2oO5WN-eP8K96owCFiL45TKfVwzZW2-AMyyFt9gcWfFHxXv2JYK57cEhJvh-QBMviuI0eRKfNHvVrnztF7PNAWD1j9-NK6gldL_7B6jc_I8/s800/onigiri_wakame.png', // 検索結果の画像
      similarityScore: 0.85,
      isTraced: true
    },
    {
      id: '2',
      imagePath: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidhK5jMguVWFpj6CE3KYAa34XxQEheP6ns2oO5WN-eP8K96owCFiL45TKfVwzZW2-AMyyFt9gcWfFHxXv2JYK57cEhJvh-QBMviuI0eRKfNHvVrnztF7PNAWD1j9-NK6gldL_7B6jc_I8/s800/onigiri_wakame.png', // 他の検索結果の画像
      similarityScore: 0.75,
      isTraced: false
    },
    // ... 他のダミーデータ
  ]);

  const [uploadedImage] = useState<string>('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3SfB9os9tkbaylMeadGSFfFp8KnMypX7ZNbTrV9G9hpL9R2chvAbU5MMoKWQO4tkVKfv77jFJ06Vw7CAnORaP-v1KKmAIiM0WvOW5Jp2tnhuq09NIq8bFMUfVaCnXvM47pVKdC_tGbY8/s800/onigiri_ume.png'); // アップロードした画像のダミー

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({}); // チェックボックスの状態を管理

  const handleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id] // チェックボックスの状態をトグル
    }));
  };

  const handleSave = () => {
    // 保存処理をここに実装
    console.log('保存されたチェック結果:', checkedItems);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">検索結果</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <img
            src={uploadedImage} // アップロードした画像を表示
            alt="検索元画像"
            className="w-40 h-40 object-cover rounded-lg" // サイズを揃える
          />
          <div className="ml-6">
            <div className="text-xl font-bold mb-2">検索情報</div>
            <div className="text-gray-600">検索日時: {new Date().toLocaleString()}</div> {/* 現在の日時を表示 */}
            <div className="text-gray-600">
              検索結果: {searchResults.length}件 / 
              類似画像: {searchResults.filter(result => result.isTraced).length}件
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(result => (
            <div key={result.id} className="bg-gray-50 rounded-lg p-4">
              <img
                src={result.imagePath}
                alt="検索結果"
                className="w-full h-48 object-cover rounded-lg mb-4" // 検索結果画像のサイズ
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
                  <span className="ml-2 text-gray-700">類似画像</span>
                </label>
              </div>
            </div>
          ))}
        </div>
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