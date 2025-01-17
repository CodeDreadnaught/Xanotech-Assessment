import Link from "next/link";

const Header = () => {
  const currentDate = new Date(),
    day = currentDate.toLocaleDateString("en-us", { weekday: "long" }),
    month = currentDate.toLocaleDateString("en-us", { month: "short" }),
    year = currentDate.getFullYear();

  return (
    <header>
      <nav className="bg-[#ededed] pt-20 px-8 lg:px-40 flex flex-col lg:flex-row lg:justify-between items-center gap-1 h-fit">
        <section>
          <Link className="block font-pacifico font-bold text-2xl" href="/">
            PhotoSearch.
          </Link>
        </section>
        <section>{`${day}, ${month} ${year}`}</section>
      </nav>
    </header>
  );
};

export default Header;
