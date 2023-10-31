import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  const [seachValue, setSeachValue] = useState("");

  return (
    <div className="flex border border-gray-400 bg-gray-200 h-9 md:h-10 lg:h-11 rounded-full items-center w-60 sm:w-64 md:w-72 lg:w-80 px-4">
      <MagnifyingGlassIcon className="block w-4 h-4" />
      <input
        type="text"
        placeholder="search"
        className="border-0 bg-transparent flex-grow focus:outline-none focus:border-0 focus:ring-0 focus:ring-transparent appearance-none peer mx-4"
        value={seachValue}
        onChange={(e) => setSeachValue(e.target.value)}
      />
      {seachValue !== "" && (
        <XMarkIcon
          className="block w-4 h-4 cursor-pointer "
          onClick={() => setSeachValue("")}
        />
      )}
    </div>
  );
};

export default Searchbar;
