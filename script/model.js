import  { render } from "./viem.js"

async function model() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all/');
        const data = await response.json();
        render(data, 'Europe Asia Africa Americas Oceania', '');
        return data;
    } catch (error) {
      return console.log(error);
    }
};

export { model }