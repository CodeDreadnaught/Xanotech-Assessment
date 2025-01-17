import { Suspense } from "react";
import SearchSection from "./components/ui/search-section";
import NoResult from "./components/ui/no-result";
import SearchResult from "./components/ui/search-result";
import { fetchDefaultImages } from "./lib/services";

type SearchParams = {
  [key: string]: string[] | string | undefined;
};

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const params = await searchParams,
    { search } = params,
    searchQuery = search ? (search as string) : "Chelsea",
    defaultImages = await fetchDefaultImages(1, searchQuery);

  return (
    <main>
      <SearchSection />
      <Suspense
        fallback={<section className="text-4xl">Actively Loading...</section>}
      >
        {defaultImages.total === 0 ? (
          <NoResult searchedWord={searchQuery} />
        ) : (
          <SearchResult
            key={searchQuery}
            searchQuery={searchQuery}
            defaultImages={defaultImages.results}
          />
        )}
      </Suspense>
    </main>
  );
};

export default Home;
