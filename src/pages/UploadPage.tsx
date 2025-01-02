import React from 'react';
import ImageUpload from '../components/upload/ImageUpload';

const UploadPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        類似画像検索システム
      </h1>
      <ImageUpload />
    </div>
  );
};

export default UploadPage; 