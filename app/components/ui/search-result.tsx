"use client";

import { useState } from "react";
import type { ImageResult } from "@/app/lib/models";
import { fetchDefaultImages } from "@/app/lib/services";
import Card from "./card";

interface SearchResultProps {
  defaultImages: ImageResult["results"];
  searchQuery: string;
}

const SearchResult = ({ defaultImages, searchQuery }: SearchResultProps) => {
  const [images, setImages] = useState(defaultImages),
    [isLoading, setIsLoading] = useState(false),
    [hasNextPage, setHasNextPage] = useState(true),
    [currentpage, setCurrentPage] = useState(1);

  const imageCards = images.map((imageCard, index) => (
    <Card key={imageCard.id} image={imageCard} index={index} />
  ));

  const showMoreImages = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const nextPage = currentpage + 1;
      const result = await fetchDefaultImages(nextPage, searchQuery);

      const hasNextPage = nextPage < result.total_pages;
      if (result.results.length > 0) {
        setImages(prev => [...prev, ...result.results]);
        setCurrentPage(nextPage);
      }
      setHasNextPage(hasNextPage);
    } catch (error) {
      console.warn("We are unable to load this page due to " + error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-8 lg:px-40">
      <h1 className="text-2xl mb-8">
        Showing results for{" "}
        <span className="font-bold border-b border-dotted border-black capitalize">
          {searchQuery}
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {imageCards}
      </div>
      {hasNextPage && (
        <div className="flex justify-center mt-8">
          <button
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={showMoreImages}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
