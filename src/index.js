import debounce from 'lodash.debounce';
import imagesAPI from '../src/apiService';
import imgCard from '../src/templates/photoCardTpl.hbs';

const refs = {
    cardConteiner: document.querySelector('.gallery'),
    inputEl: document.querySelector('.js-search-input')
}

let searchQuery = '';

refs.inputEl.addEventListener(
  'input',
  debounce(() => {
    onSearch();
  }, 1000),
);

function onSearch() {
  searchQuery = refs.inputEl.value;
  imagesAPI(searchQuery)
    .then(createCountryCard)
    .catch(error => console.log(error));
}

function renderMarkup(templates, value) {
    const markup = templates(value);
    refs.cardConteiner.innerHTML = markup;
}

function createCountryCard(value) {
    renderMarkup(imgCard, value);
}