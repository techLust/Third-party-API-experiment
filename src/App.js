import React, { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      console.log(res?.data?.results);
      setPokemons(res?.data?.results);
    });
  }, []);

  return (
    <div className="App">
      <NavBar setPokemons={setPokemons} />
      <Routes>
        <Route path="/" element={<Home pokemons={pokemons} />} />
      </Routes>
    </div>
  );
}

export default App;
