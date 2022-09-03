import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar setBooks={setBooks} />
        <br></br>
        <BookList books={books} />
      </header>
    </div>
  );
}

const SearchBar = ({ setBooks }) => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const getSearchValue = (e) => {
    e.target.value.length
      ? setShowCloseButton(true)
      : setShowCloseButton(false);
    setSearch(e.target.value);
  };

  const clearInputText = () => {
    setSearch("");
    setShowCloseButton(false);
    setIsLoading(false);
    console.log(isLoading);
  };

  const searchBooks = () => {
    setIsLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then(({ data }) => {
        // console.log(data?.items);
        setBooks(data?.items);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (search.length) {
      searchBooks();
    }
  }, [search]);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <LibraryBooksIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books"
        inputProps={{ "aria-label": "search books" }}
        value={search ? search : ""}
        onChange={getSearchValue}
      />

      {showCloseButton ? (
        <IconButton
          sx={{ p: "10px" }}
          aria-label="close"
          onClick={clearInputText}
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
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={searchBooks}
        >
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
};

const BookList = ({ books }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "horizontal",
        "& > :not(style)": {
          m: 1,
          width: 800,
          // height: 220,
        },
      }}
    >
      {books?.map((item, i) => (
        <Card key={i} sx={{ maxWidth: 245 }}>
          <CardMedia
            component="img"
            height="120"
            image={
              item?.volumeInfo?.imageLinks?.thumbnail
                ? item?.volumeInfo?.imageLinks?.thumbnail
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            alt="book"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {item?.volumeInfo?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.volumeInfo?.subtitle}
            </Typography>
            {/* <Stack direction="row" spacing={1}>
                {
                  item?.volumeInfo?.categories?.map((category) => (
                    <Chip key={i} label={category} variant="outlined" />
                  ))
                }
              </Stack> */}
            <div>
              {item?.volumeInfo?.authors?.map((author, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <PersonIcon />
                  <Typography variant="body2" color="text.secondary">
                    {author}
                  </Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default App;
