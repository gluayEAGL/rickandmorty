import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
export default function Character() {
  const { data, loading, error } = useCharacter(3);
  console.log({ data, loading, error });

  if (error) return <div>Something went wrong!</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={400} height={400} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} -<b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}