class CountriesService extends EventObserver {
  setActiveCountry(country) {
    this.broadcast(country);
  }

  handleActiveCountryChange(handler) {
    this.subscribe(handler);
  }
}

// export Singleton
const countriesService = new CountriesService();
