import React, { Link } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";
import { NavLink } from "react-router-dom";

export default function CharacterList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <div className="CharacterList">
        {data.characters.results.map((character) => {
          return (
            <NavLink to={`/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
