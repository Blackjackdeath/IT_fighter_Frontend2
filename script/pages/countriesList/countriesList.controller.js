const countriesService = new CountriesService();
countriesService.handleActiveCountryChange(updateActiveCountry)

updateActiveCountry(country) {
    const newCountryCard = new CountryCard(country);
}