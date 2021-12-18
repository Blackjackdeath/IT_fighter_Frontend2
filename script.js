let data;
// Робота з даними
async function model() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all/');
        data = await response.json();
        render(data, 'Europe Asia Africa Americas Oceania', '');
        document.getElementById('region').addEventListener('click',getRegion);
        document.getElementById('search').addEventListener('input', getRegion);
    } catch (error) {
        return console.log(error);
    }
};

//Робота з ДОМ-деревом

function render(data, region, search) {
    for (let i = 0; i < data.length; i++) {
        if ((region.includes(data[i].region)) && (data[i].name.official.toLowerCase().indexOf(search.toLowerCase())>-1)) {
            document.getElementById('output').innerHTML += `<div>${i + 1} ${data[i].name.official}</div>`;
        }
    }
}
//Контролер

function getRegion() {
    document.getElementById('output').innerHTML = '';
    render(data, document.forms.regions.elements.region.value, document.getElementById('search').value);
    
}

model();
