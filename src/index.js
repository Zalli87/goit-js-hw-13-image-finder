import imagesAPI from '../src/apiService';
import imgCard from '../src/templates/photoCardTpl.hbs';

const refs = {
    cardConteiner: document.querySelector('.gallery'),
    inputEl: document.querySelector('.js-search-input')
}



let searchQuery = '';

refs.inputEl.addEventListener('input', onSearch);

function onSearch() {
  searchQuery = refs.inputEl.value;
  imagesAPI(searchQuery)
    .then(createCountryCard)
    .catch(console.log("error"));
}

function renderMarkup(templates, value) {
    console.log(value);
    const markup = templates(value);
    refs.cardConteiner.innerHTML = markup;
}

function createCountryCard(value) {
    console.log(value);
    renderMarkup(imgCard, value);
}