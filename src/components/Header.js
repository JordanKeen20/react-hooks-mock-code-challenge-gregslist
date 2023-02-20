import React from "react";
import Search from "./Search";

function Header({setSearch, search, handleSubmit, items, sorting}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch = { setSearch } search = {search} handleSubmit = {handleSubmit} items = {items}/>
      <br/>
      <button onClick={sorting}>Sort by Locations</button>
    </header>
  );
}

export default Header;
