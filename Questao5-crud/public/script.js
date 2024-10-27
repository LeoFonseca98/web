const apiUrl = '/animes';

async function fetchAnimes() {
  const response = await fetch(apiUrl);
  const animes = await response.json();

  const animeList = document.getElementById('anime-list');
  animeList.innerHTML = '';
  
  animes.forEach(anime => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${anime.name}</strong> - ${anime.genre} - ${anime.studio}
      <button onclick="deleteAnime('${anime.id}')">Deletar</button>
    `;
    animeList.appendChild(listItem);
  });
}

document.getElementById('add-anime-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const genre = document.getElementById('genre').value;
  const studio = document.getElementById('studio').value;

  const newAnime = { name, genre, studio };

  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAnime)
  });

  fetchAnimes();
  e.target.reset();
});

async function deleteAnime(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  fetchAnimes();
}

window.onload = fetchAnimes;
