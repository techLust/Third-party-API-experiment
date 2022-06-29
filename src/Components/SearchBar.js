import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

export default function CustomizedInputBase() {
  const [search, setSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showCloseButton, setShowCloseButton] = React.useState(false);

  //Handling search box input
  const searchHandler = (e) => {
    e.target.value.length
      ? setShowCloseButton(true)
      : setShowCloseButton(false);
    setSearch(e.target.value);
  };

  // Clear search input
  const clearInput = () => {
    setSearch("");
    setShowCloseButton(false);
    setIsLoading(false);
  };
  // Calling Pokemon API
  const searchPokemon = () => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
        value={search ? search : ""}
        onChange={searchHandler}
      />

      {showCloseButton ? (
        <IconButton
          onClick={() => clearInput()}
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <></>
      )}

      {isLoading ? (
        <div sx={{ p: "10px" }}>
          <CircularProgress size="2rem" />
        </div>
      ) : (
        <IconButton
          onClick={() => searchPokemon()}
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
}
