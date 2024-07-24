import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

function NavigationBar() {
  const [searchedKeywords, setSearchedKeywords] = useState("");
  const navigate = useNavigate();

  function handleKeyDown(event) {
    if (event.key == "Enter") {
      // execute search procedure
      console.log("search executed via enter key");
      // redirect("/results?q=");
      executeSearch();
    }
  }

  function executeSearch() {
    navigate("/results?q="+searchedKeywords);
  }

  return (
    <div className="flex px-4 py-2 justify-evenly align-middle">
      <div className="name">
        <a href="./">
          <span className="text-white hidden lg:block">MadTube</span>
        </a>
      </div>
      <div className="logo ml-1">
        <a href="/">
          <img
            src="src/assets/film-solid.svg"
            alt="site logo"
            className="w-6"
          />
        </a>
      </div>
      <div className="flex-grow"></div>
      <div className="searchField">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            if (event.target) setSearchedKeywords(event.target.value);
            console.log(event.target.value);
          }}
          className="w-32 rounded-lg px-4 py-1 h-7"
          placeholder="Search..."
        />
      </div>
      <div
        className="searchLogo"
        onClick={(e) => {
          console.log("search executed via icon");
          executeSearch();
        }}
      >
        <i class="fa-solid fa-magnifying-glass ml-2"></i>
      </div>
    </div>
  );
}

export default NavigationBar;

/* 
Components of the navigation bar ->
1. Logo, Project Icon, Click to go to home
2. Search input field, Input, Type and press enter to search for movies and tv shows
3. Magnifying glass Icon, click to initiate a search of string in the search field
*/
