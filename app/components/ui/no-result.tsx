import Image from "next/image";

interface NoResultProps {
  searchedWord: string;
}

const NoResult = ({ searchedWord }: NoResultProps) => {
  return (
    <div className=" px-8 lg:px-40">
      <section className="relative bottom-8 py-12 bg-white shadow border border-gray-200 rounded-lg center">
        <Image
          src="./assests/images/no-results.svg"
          alt="No results found"
          width={200}
          height={200}
        />
        <h1 className="mt-6 text-xl text-center lg:text-left">
          We have 0 results for the word
          <span className="font-bold border-b border-dotted border-black inline-block ml-1.5">
            {`${searchedWord}`}
          </span>
          .
        </h1>
      </section>
    </div>
  );
};

export default NoResult;
