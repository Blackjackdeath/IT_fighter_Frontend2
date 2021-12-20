function render(data, region, search) {
    document.getElementById('output').innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        if ((region.includes(data[i].region)) && (data[i].name.official.toLowerCase().indexOf(search.toLowerCase())>-1)) {
            document.getElementById('output').innerHTML += `<div>${i + 1} ${data[i].name.official}</div>`;
        }
    }
};

export{ render }