import type { ImageResult } from "./models";

const BASE_URL = process.env.NEXT_PUBLIC_UNSPLASH_API_URL as string;

const defaultHeaders: HeadersInit = {
  Accept: "application/json",
  Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CDNLKM}`,
};

interface RequestOptions extends Omit<RequestInit, "method"> {
  options: {
    headers: {
      Authorization: string;
    };
  };
}

interface ApiError extends Error {
  status: number;
  details?: unknown;
}

const fetchImages = async <T>(
  endpoint: string,
  options: RequestOptions
): Promise<T> => {
  const { headers, ...rest } = options;
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { ...defaultHeaders, ...headers },
      ...rest,
    });

    if (!response.ok) {
      const errorDetails = await response.json().catch(() => ({}));
      const error = new Error(response.statusText) as ApiError;
      error.status = response.status;
      error.details = errorDetails;
      throw error;
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

const fetchDefaultImages = async (
  page = 1,
  query = "Chelsea"
): Promise<ImageResult> => {
  try {
    return fetchImages<ImageResult>(
      `/search/photos?query=${query}&page=${page}&per_page=16`,
      {
        options: {
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CDNLKM}`,
          },
        },
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { fetchImages, fetchDefaultImages };
