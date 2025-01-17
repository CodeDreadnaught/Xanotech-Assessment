type UploadInfo = {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_image: {
    large: string;
    medium: string;
    small: string;
  };
};

type ImageInfo = {
  id: string;
  slug: string;
  width: number;
  height: number;
  color: string;
  description?: string;
  likes: number;
  alt_description?: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: UploadInfo;
};

type ImageResult = {
  total: number;
  total_pages: number;
  results: ImageInfo[];
};

export type { UploadInfo, ImageInfo, ImageResult };
