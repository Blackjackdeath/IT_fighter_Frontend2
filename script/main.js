import { Controller } from "./controller.js";
import { ModelRequestOnServer } from "./model.js";
import { Render } from "./viem.js";

function init() {
    let data;
    let modelRequestOnServer = new ModelRequestOnServer('https://restcountries.com/v3.1/all/');
    let promise = modelRequestOnServer.request();
    let render = new Render;
    promise.then(
        result => {
            data = result;
            let controller = new Controller(data);
            document.getElementById('output').innerHTML = render.createBlock(controller.searchRegionAndName('All', ''));
            document.getElementById('region').addEventListener('click', ()=>document.getElementById('output').innerHTML = render.createBlock(controller.searchRegionAndName(document.forms.regions.elements.region.value, document.getElementById('search').value)));
            document.getElementById('search').addEventListener('input', () =>document.getElementById('output').innerHTML = render.createBlock(controller.searchRegionAndName(document.forms.regions.elements.region.value, document.getElementById('search').value)));
        },
        error => alert(error)
    );
};


init();