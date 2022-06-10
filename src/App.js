import React from "react";
import { Routes, Route } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exaxt path="/" element={<CharactersList />}></Route>
        <Route strict exaxt path="/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
