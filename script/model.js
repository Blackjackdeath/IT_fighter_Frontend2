class ModelRequestOnServer {
  #_response;
  #_date;
  #_url;
  constructor(url) {
    this.#_url = url;
  };
  async request() {
    try {
      this.#_response = await fetch(this.#_url);
      this.#_date = await this.#_response.json();
      console.log(this.#_date);
      return this.#_date
    } catch (error) {
      console.log(error);
    };
  };
};

export { ModelRequestOnServer };