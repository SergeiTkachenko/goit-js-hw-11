import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './js/refs';
import { PixabayAPI } from './js/pixabayAPI';

refs.formEl.addEventListener('submit', onSearch);

const pixabayAPI = new PixabayAPI();

function onSearch(e) {
  e.preventDefault();
  const formValue = e.currentTarget.elements.searchQuery.value.trim();
  console.log(formValue);
  if (!formValue) {
    return Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  pixabayAPI.query = formValue;
  pixabayAPI.getPhotos();
}
