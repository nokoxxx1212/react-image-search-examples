import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HistoryItem } from '../types';

const HistoryListPage: React.FC = () => {
  const navigate = useNavigate();
  const [historyItems] = useState<HistoryItem[]>([
    // ダミーデータ
    {
      id: '1',
      // 履歴一覧のダミー画像（梅おにぎり）
      uploadedImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3SfB9os9tkbaylMeadGSFfFp8KnMypX7ZNbTrV9G9hpL9R2chvAbU5MMoKWQO4tkVKfv77jFJ06Vw7CAnORaP-v1KKmAIiM0WvOW5Jp2tnhuq09NIq8bFMUfVaCnXvM47pVKdC_tGbY8/s800/onigiri_ume.png',
      searchDate: '2024-03-20 15:30',
      resultCount: 8,
      tracedCount: 2
    },
    // ... 他のダミーデータ
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">検索履歴</h1>
      <div className="bg-white rounded-lg shadow-lg">
        {historyItems.map(item => (
          <div
            key={item.id}
            className="border-b last:border-b-0 p-4 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <img
                src={item.uploadedImage}
                alt="アップロード画像"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4 flex-grow">
                <div className="text-gray-600">{item.searchDate}</div>
                <div className="mt-1">
                  検索結果: {item.resultCount}件 / トレース画像: {item.tracedCount}件
                </div>
              </div>
              <button
                onClick={() => navigate(`/history/${item.id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                詳細を見る
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryListPage; 