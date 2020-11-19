import ImagesApiService from '../src/apiService';
import imgCard from '../src/templates/photoCardTpl.hbs';

const refs = {
    cardConteiner: document.querySelector('.gallery'),
    searchFormEl: document.querySelector('.search-form'),
    btnEl: document.querySelector('[data-action="load-more"]')
}

const imagesApiService = new ImagesApiService();


refs.searchFormEl.addEventListener('submit', onSearch);
refs.btnEl.addEventListener('click', onBtnClick);
refs.btnEl.disabled = true;


function onBtnClick() {

  fetchImgs().then(
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight - 800,
          behavior: 'smooth',
        });
      }, 1500),
    )
    .catch(err => console.log(err));

}

function fetchImgs(images) {
  
  return imagesApiService.fetchImages().then(images => {
    renderMarkup(images)
    if (images.length < 12) {
      refs.btnEl.disabled = true;
    }
    if (images.length === 0) {
       alert('Nothing found for your request')
    }
  });
  
}

function onSearch(e) {
  e.preventDefault();
  claerCardContainer();
  refs.btnEl.disabled = false;
  imagesApiService.query = e.currentTarget.elements.query.value;
  imagesApiService.resetPage();
  if (imagesApiService.query === '') {
    refs.btnEl.disabled = true;
    return alert('Enter your query')
   }
  fetchImgs();
}

function renderMarkup(images) {
    refs.cardConteiner.insertAdjacentHTML('beforeend', imgCard(images));
}

function claerCardContainer() {
  refs.cardConteiner.innerHTML = '';
}
