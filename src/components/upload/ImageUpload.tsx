import React, { useRef } from 'react';
import { useImageUpload } from '../../hooks/useImageUpload';
import ImagePreview from './ImagePreview';
import UploadStatus from './UploadStatus';

const ImageUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { selectedImages, isUploading, uploadProgress, handleFileSelect, handleUpload } = useImageUpload();

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileSelect(e.target.files);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileInputChange}
          multiple
          accept="image/jpeg,image/png"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          画像を選択
        </button>
        <span className="ml-4 text-gray-600">
          最大5ファイル（JPEG/PNG、各10MBまで）
        </span>
      </div>

      {selectedImages.length > 0 && (
        <ImagePreview images={selectedImages} />
      )}

      <UploadStatus isUploading={isUploading} progress={uploadProgress} />

      <button
        onClick={handleUpload}
        disabled={selectedImages.length === 0 || isUploading}
        className={`w-full py-3 rounded-lg ${
          selectedImages.length === 0 || isUploading
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        アップロード開始
      </button>
    </div>
  );
};

export default ImageUpload; 