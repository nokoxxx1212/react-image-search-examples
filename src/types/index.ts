export interface UploadedImage {
  id: string;
  file: File;
  previewUrl: string;
}

export interface SearchResult {
  id: string;
  imagePath: string;
  similarityScore: number;
  isTraced: boolean;
}

export interface HistoryItem {
  id: string;
  uploadedImage: string;
  searchDate: string;
  resultCount: number;
  tracedCount: number;
}

export interface HistoryDetail extends HistoryItem {
  searchResults: SearchResult[];
} 