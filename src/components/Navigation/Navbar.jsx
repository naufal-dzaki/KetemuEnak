import Searchbar from "./Searchbar";
import Profilebar from "./Profilebar";

const Navbar = () => {
  return (
    <header className="flex h-20 md:h-24 lg:h-28 w-full items-center content-center">
      <nav className="flex w-full justify-between px-4 sm:px-6 md:px-8 lg:px-10 items-center h-16">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-ke-brand">
          Ketemu Enak
        </h1>
        <div className="flex gap-x-5 items-center h-full">
          <Searchbar />
          <Profilebar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
