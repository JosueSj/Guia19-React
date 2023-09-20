
const baseUrl = 'https://rickandmortyapi.com/api/character';

async function getCharacters() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results.slice(0, 20); // Obtener los primeros 20 personajes
  } catch (error) {
    throw error;
  }
}

export { getCharacters };