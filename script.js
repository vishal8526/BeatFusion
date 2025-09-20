const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Get the audio element and buttons
// const musicPlayer = document.getElementById('music-player');
// const backwardBtn = document.getElementById('backward-btn');
// const playPauseBtn = document.getElementById('play-pause-btn');
// const forwardBtn = document.getElementById('forward-btn');

// // Add event listeners to the buttons
// backwardBtn.addEventListener('click', () => {
//   // Move to the previous track (you'll need to implement this logic)
//   console.log('Move to previous track');
// });

// playPauseBtn.addEventListener('click', () => {
//   // Toggle play/pause
//   if (musicPlayer.paused) {
//     musicPlayer.play();
//     playPauseBtn.textContent = '❚❚';
//   } else {
//     musicPlayer.pause();
//     playPauseBtn.textContent = '►';
//   }
// });

// forwardBtn.addEventListener('click', () => {
//   // Move to the next track (you'll need to implement this logic)
//   console.log('Move to next track');
// });

// // Get the search input field, search button, and search results div
// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const searchResults = document.getElementById('search-results');

// // Add an event listener to the search button
// searchBtn.addEventListener('click', () => {
//   // Get the search query from the input field
//   const searchQuery = searchInput.value.trim();

//   // Make an API request to fetch the search results (you'll need to implement this logic)
//   fetch(`https://api.example.com/search?q=${searchQuery}`)
//     .then(response => response.json())
//     .then(data => {
//       // Display the search results
//       const resultsHtml = data.results.map(result => {
//         return `<div>${result.artist} - ${result.song}</div>`;
//       }).join('');
//       searchResults.innerHTML = resultsHtml;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// // Get the search input field, search button, search results div, and playlist container
// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const searchResults = document.getElementById('search-results');
// const playlistContainer = document.getElementById('playlist-container');
// const playlist = document.getElementById('playlist');

// // Add an event listener to the search button
// searchBtn.addEventListener('click', () => {
//   // Get the search query from the input field
//   const searchQuery = searchInput.value.trim();

//   // Make an API request to fetch the search results (you'll need to implement this logic)
//   fetch(`https://api.example.com/search?q=${searchQuery}`)
//     .then(response => response.json())
//     .then(data => {
//       // Display the search results
//       const resultsHtml = data.results.map(result => {
//         return `<div>${result.song} by ${result.artist}</div>`;
//       }).join('');
//       searchResults.innerHTML = resultsHtml;

//       // Create a playlist for the searched artist
//       const artistName = searchQuery;
//       document.getElementById('artist-name').textContent = artistName;

//       // Add event listeners to the search results to add songs to the playlist
//       searchResults.addEventListener('click', (e) => {
//         if (e.target.tagName === 'DIV') {
//           const songTitle = e.target.textContent;
//           const songHtml = `<li>${songTitle}</li>`;
//           playlist.innerHTML += songHtml;
//         }
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// // Get the user profile icon image and dropdown menu
// const userProfileIcon = document.getElementById('user-profile-icon');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// // Add an event listener to the user profile icon image
// userProfileIcon.addEventListener('click', () => {
//   // Toggle the dropdown menu
//   dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
// });

// // Add an event listener to the dropdown menu
// dropdownMenu.addEventListener('click', (e) => {
//   // Close the dropdown menu when an option is clicked
//   if (e.target.tagName === 'A') {
//     dropdownMenu.style.display = 'none';
//   }
// });