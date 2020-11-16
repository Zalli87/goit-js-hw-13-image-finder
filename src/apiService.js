
export default function fetchCountries(searchQuery) {
  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=9056490-f67ac46e342f0369ec0e655c9`).then(response => {
          return response.json();
       })
};