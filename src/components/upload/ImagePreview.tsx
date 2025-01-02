import React from 'react';
import { UploadedImage } from '../../types';

interface ImagePreviewProps {
  images: UploadedImage[];
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {images.map(image => (
        <div key={image.id} className="relative aspect-square">
          <img
            src={image.previewUrl}
            alt="プレビュー"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagePreview; 