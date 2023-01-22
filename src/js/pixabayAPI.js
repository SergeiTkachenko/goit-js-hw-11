export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '33034340-c8a9f1364e27c54e88b731628';
  #query = '';
  #page = 1;
  #per_page = 40;

  async getPhotos() {
    try {
      const response = await fetch(
        `${this.#BASE_URL}?key=${this.#API_KEY}&q=${
          this.#query
        }&image_type=photo
        &orientation=horizontal&safesearch=true
        &page=${this.#page}&per_page=${this.#per_page}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  get query() {
    return this.#query;
  }
  set query(newQuery) {
    this.#query = newQuery;
  }
}
