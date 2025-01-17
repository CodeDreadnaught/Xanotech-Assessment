"use client";

import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();

  const submitHandler = async (formData: FormData) => {
    const searchQuery = formData.get("search") as string;
    router.push(`/?search=${encodeURIComponent(searchQuery)}`, {
      scroll: false,
    });
  };

  return (
    <form className="flex gap-4" action={submitHandler}>
      <input
        className="block bg-white rounded-md w-full px-3 py-1.5 text-sm/6 lg:text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"
        type="text"
        id="search"
        name="search"
        required
      />
      <button className="block px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
