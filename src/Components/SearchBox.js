import React, { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import TextField from "@mui/material/TextField";

const SearchBox = () => {
  const [search, setSearch] = React.useState("");
  const searchHandler = (event) => setSearch(console.log(event.target.value));

  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then((res) => {
  //       console.log(res);
  //       setSearch()
  //       // return res.data;
  //     });
  // }, []);

  // const searchBook = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then((res) => {
  //       console.log(res);
  //       setSearch();
  //       // return res.data;
  //     });
  // };

  return (
    <SearchBar
      className="searchBox"
      placeholder="Search Here...."
      value={search}
      onChange={searchHandler}
      // onChange={() => console.log("onChange")}
      // onRequestSearch={() => console.log("onRequestSearch")}
      style={{
        margin: "0 auto",
        maxWidth: 900,
      }}
    />
  );
};

export default SearchBox;
