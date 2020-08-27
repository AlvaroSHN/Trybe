const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const response = await fetch(API_URL, { headers: { Accept: 'application/json' } })
  const result = await response.json();
  // console.log(response);
  // console.log('---')
  // console.log(result)
  // console.log('****')
  document.getElementById('jokeContainer').innerText = result.joke;
  // fetch(API_URL, { headers: { Accept: 'application/json' } })
  //   .then(response => response.json())
  //   .then(data =>
  //     document.getElementById('jokeContainer').innerText = data.joke
  //   );
}

window.onload = () => fetchJoke();