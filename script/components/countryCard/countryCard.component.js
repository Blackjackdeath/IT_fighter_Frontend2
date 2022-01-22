// Dummy component, view from MVC pattern
class CountryCard {
  country; // ICountry
  element; // HTMLElement
  constructor() {
    this.country = country;
    this.init();
  }

  init() {
    this.render();
  }

  getElement() {
    return this.element();
  }

  render() {
    this.element = document.createElement("div");
    this.element.innerHTML = `<h1>${this.country?.name}</h1>`;
  }
}
