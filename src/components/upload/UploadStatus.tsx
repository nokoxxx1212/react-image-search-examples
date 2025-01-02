import React from 'react';

interface UploadStatusProps {
  isUploading: boolean;
  progress: number;
}

const UploadStatus: React.FC<UploadStatusProps> = ({ isUploading, progress }) => {
  if (!isUploading && progress === 0) return null;

  return (
    <div className="mb-6">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-2 text-center text-gray-600">
        {isUploading
          ? `アップロード中... ${progress}%`
          : 'アップロード完了'}
      </div>
    </div>
  );
};

export default UploadStatus; 