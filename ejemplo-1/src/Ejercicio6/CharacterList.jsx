import React, { useEffect, useState } from 'react';
import { getCharacters } from './bd';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const charactersData = await getCharacters();
        setCharacters(charactersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Personajes de Rick and Morty</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;