import React, { useState } from "react";

import searchImg from "../assets/images/icon-search.svg";
import { useContext } from "react";
import { SearchContext } from "../context/Search";

function SearchBar({ text }) {
  const { setSearch } = useContext(SearchContext);

  const [wordValue, setWordValue] = useState("");

  const handleChangeWord = (e) => {
    setWordValue(e.target.value);
  };

  const handleSendWord = () => {
    setSearch(wordValue);
    setWordValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendWord();
  };

  return (
    <section className="w-full flex justify-start items-center relative mb-4">
      <input
        type="text"
        placeholder={text}
        className="w-90 outline-none bg-neutral-200 text-xl py-2 px-3 rounded-l-xl"
        spellCheck="false"
        onChange={handleChangeWord}
        onKeyDown={handleKeyDown}
        value={wordValue}
      />
      <div className="h-full flex justify-center items-center absolute right-0 bg-neutral-200 w-[11%] rounded-r-xl z-10">
        <img src={searchImg} alt="search-icon" onClick={handleSendWord} />
      </div>
    </section>
  );
}

export default SearchBar;
