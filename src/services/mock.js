import slides from './slides.json';

export default {
  async fetchSides() {
    return await slides;
  },
};
