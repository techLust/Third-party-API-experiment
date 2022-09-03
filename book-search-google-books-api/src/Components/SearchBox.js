import React, { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import TextField from "@mui/material/TextField";

const SearchBox = () => {
  const [search, setSearch] = React.useState("");
  const searchHandler = (event) => setSearch(console.log(event.target.value));

  // useEffect(() => {
  //   axios
  //     .get("https://www.googleapis.com/books/v1/volumes?q=usa")
  //     .then((res) => {
  //       console.log(res);
  //       setSearch()
  //       // return res.data;
  //     });
  // }, []);

  // const searchBook = () => {
  //   axios
  //     .get("https://www.googleapis.com/books/v1/volumes?q=usa")
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
        maxWidth: 800,
      }}
    />

    // <TextField
    //   id="standard-basic"
    //   label="Search here"
    //   variant="standard"
    //   value={search}
    //   onChange={searchHandler}
    // />
  );
};

export default SearchBox;
