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
const playlistsGrid = document.querySelector("#playlists-grid"); //This element is a ul
const playlistCards = document.querySelectorAll(".playlist-card");
const nowPlayingTitle = document.querySelector("#now-playing-title");
const selectedCards = [];
//
playlistData.forEach((song) => {
  const songTitleitle = song.title;
  const songImg = song.img;
  const songDesc = song.description;
  //
  const li = document.createElement('li');
  const img = document.createElement('img');
  const name = document.createElement('name');


  //give li attributes
  li.classList.add("playlist-card")
  li.setAttribute("data-title", song.title);
  //img manipulation
  img.src = songImg;
  img.alt = `${songTitle} playlist cover` //set alt text
  li.append(img);

  //add element to HTML
  name.textContent = songTitle;
  li.append(name);

  playlistGrid.append(li);
});

//if card is clicked: it is selected and added to now playing section

card.addEventListener("click", () => {
  if (slectedCards.length > 0) {
    selectedCards[0].classList.toggle("selected");
    selectedCards.pop();
  }
  li.classList.toggle("selected")
  selectedCards.push(li);
});