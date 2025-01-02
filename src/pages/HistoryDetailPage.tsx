import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HistoryDetail } from '../types';

const HistoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [historyDetail, setHistoryDetail] = useState<HistoryDetail | null>(null);

  useEffect(() => {
    // TODO: 実際のAPI呼び出しを実装
    // ダミーデータをセット
    setHistoryDetail({
      id: id || '1',
      // 検索履歴詳細（検索元）のダミー画像（梅おにぎり）
      uploadedImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3SfB9os9tkbaylMeadGSFfFp8KnMypX7ZNbTrV9G9hpL9R2chvAbU5MMoKWQO4tkVKfv77jFJ06Vw7CAnORaP-v1KKmAIiM0WvOW5Jp2tnhuq09NIq8bFMUfVaCnXvM47pVKdC_tGbY8/s800/onigiri_ume.png',
      searchDate: '2024-03-20 15:30',
      resultCount: 8,
      tracedCount: 2,
      searchResults: [
        {
          id: '1',
          // 検索履歴詳細（検索結果）のダミー画像（わかめおにぎり）
          imagePath: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidhK5jMguVWFpj6CE3KYAa34XxQEheP6ns2oO5WN-eP8K96owCFiL45TKfVwzZW2-AMyyFt9gcWfFHxXv2JYK57cEhJvh-QBMviuI0eRKfNHvVrnztF7PNAWD1j9-NK6gldL_7B6jc_I8/s800/onigiri_wakame.png',
          similarityScore: 0.85,
          isTraced: true
        },
        // ... 他のダミーデータ
      ]
    });
  }, [id]);

  if (!historyDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">検索履歴詳細</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <img
            src={historyDetail.uploadedImage}
            alt="アップロード画像"
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div className="ml-6">
            <div className="text-xl font-bold mb-2">検索情報</div>
            <div className="text-gray-600">検索日時: {historyDetail.searchDate}</div>
            <div className="text-gray-600">
              検索結果: {historyDetail.resultCount}件 / 
              トレース画像: {historyDetail.tracedCount}件
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historyDetail.searchResults.map(result => (
            <div key={result.id} className="bg-gray-50 rounded-lg p-4">
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
                  {result.isTraced ? 'トレース画像' : '非トレース画像'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryDetailPage; 