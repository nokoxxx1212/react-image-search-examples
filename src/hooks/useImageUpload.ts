import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UploadedImage {
  id: string;
  file: File;
  previewUrl: string;
}

export const useImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState<UploadedImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const validateFile = (file: File): boolean => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const validTypes = ['image/jpeg', 'image/png'];
    
    if (!validTypes.includes(file.type)) {
      alert('JPEGまたはPNG形式の画像のみアップロード可能です。');
      return false;
    }
    
    if (file.size > maxSize) {
      alert('ファイルサイズは10MB以下にしてください。');
      return false;
    }
    
    return true;
  };

  const handleFileSelect = (files: FileList) => {
    if (files.length > 5) {
      alert('一度に最大5ファイルまでアップロードできます。');
      return;
    }

    const validFiles = Array.from(files).filter(validateFile);
    const newImages: UploadedImage[] = validFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      previewUrl: URL.createObjectURL(file)
    }));

    setSelectedImages(newImages);
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // TODO: 実際のアップロード処理を実装
      // ローカルでの動作確認用にタイマーでシミュレート
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setUploadProgress(i);
      }

      // アップロード完了後、検索結果画面に遷移
      navigate('/search-result');
    } catch (error) {
      alert('アップロードに失敗しました。');
    } finally {
      setIsUploading(false);
    }
  };

  return {
    selectedImages,
    isUploading,
    uploadProgress,
    handleFileSelect,
    handleUpload
  };
}; 