const playlistData = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];
const playlistsGrid = document.querySelector("#playlists-grid");
const playlistCards = document.querySelectorAll(".playlist-card");
const nowPlayingTitle = document.querySelector("#now-playing-title");
const selectedCards = [];
//
playlistData.forEach((song) => {
  const songTitle = song.title;
  const songImg = song.image;
  const songDesc = song.description;
  //
  const li = document.createElement('li');
  const img = document.createElement('img');
  const name = document.createElement('p');


  li.classList.add("playlist-card")
  li.setAttribute("data-title", song.title);

  img.src = songImg;
  img.alt = `${songTitle} playlist cover`
  li.append(img);


  name.textContent = songTitle;
  li.append(name);

  playlistsGrid.append(li);
});


playlistsGrid.addEventListener('click', (event) => {
  const clickedCard = event.target.closest('.playlist-card');
  if (!clickedCard) return;

  const previous = playlistsGrid.querySelector('.playlist-card.selected');
  if (previous) previous.classList.remove('selected');

  clickedCard.classList.add('selected');
  nowPlayingTitle.textContent = clickedCard.dataset.title;
});
