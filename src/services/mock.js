import slides from './slides.json';
import miniSlides from './miniSlides.json';

export default {
  async fetchSides() {
    return await slides;
  },
  async fetchMiniSides() {
    return await miniSlides;
  },
};
