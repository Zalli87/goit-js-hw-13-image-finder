const API_KEY = '9056490-f67ac46e342f0369ec0e655c9';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal'

export default class ImagesApiServis{
  constructor() {
    this.searchQuery = '';
    this.page = 1;
   }
  
  fetchImages() {
    return fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
      .then(response => response.json()).then(({hits}) => {
        this.incrementPage();
          return hits;
        });
    }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }


  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  
}

