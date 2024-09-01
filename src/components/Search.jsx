import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        value={search}
        placeholder="City name"
        className="w-2/3 p-2 text-sm bg-slate-200 rounded-md text-black"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-lime-400 p-2.5 rounded-md ml-1 text-xs">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
